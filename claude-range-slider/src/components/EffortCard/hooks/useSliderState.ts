/**
 * @file        useSliderState.ts
 * @author      Astraeus
 * @created     2026-06-18 20:08:51 UTC
 * @license     MIT
 *
 * Manages slider value, derived status labels, and the flip-up animation
 * that fires when the slider reaches the "Ultracode" threshold.
 *
 * @disclaimer
 * This file is released under the MIT License. Anyone may use it for any
 * purpose. The author accepts no liability for any outcome arising from its use.
 * All rights and final interpretation of this file are reserved by the author.
 * To contact the author: astraeuszhao@gmail.com
 */

import { useState, useEffect, useRef, useCallback } from 'react'

export type StatusLabel = 'Low' | 'Medium' | 'High' | 'Ultracode'

export interface SliderState {
  sliderValue: number
  isActive: boolean
  isFull: boolean
  isAnimating: boolean
  statusLabel: StatusLabel
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const THRESHOLD = 100

function getLabel(value: number): StatusLabel {
  if (value < 33) return 'Low'
  if (value < 66) return 'Medium'
  if (value < THRESHOLD) return 'High'
  return 'Ultracode'
}

export function useSliderState(): SliderState {
  const [sliderValue, setSliderValue] = useState(70)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prevLabelRef = useRef<StatusLabel>(getLabel(70))

  const statusLabel = getLabel(sliderValue)
  const isActive = sliderValue >= THRESHOLD
  const isFull = sliderValue === 100

  useEffect(() => {
    const prev = prevLabelRef.current
    const next = statusLabel

    if (next === 'Ultracode' && prev !== 'Ultracode') {
      if (timerRef.current != null) clearTimeout(timerRef.current)
      setIsAnimating(true)
      timerRef.current = setTimeout(() => {
        setIsAnimating(false)
        timerRef.current = null
      }, 460)
    } else if (next !== 'Ultracode' && prev === 'Ultracode') {
      if (timerRef.current != null) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
      setIsAnimating(false)
    }

    prevLabelRef.current = next
  }, [statusLabel])

  useEffect(() => {
    return () => {
      if (timerRef.current != null) clearTimeout(timerRef.current)
    }
  }, [])

  const onInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value, 10))
  }, [])

  return { sliderValue, isActive, isFull, isAnimating, statusLabel, onInput }
}
