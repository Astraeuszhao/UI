# UI

> A personal archive of handpicked UI components, motion effects, and interaction designs: anything the author finds interesting, worth keeping, or visually remarkable.

---

## About This Repository

This repository is a personal UI collection. It stores standalone components, animation effects, complete UI concepts, and distinctive interaction patterns that the author considers worth preserving.

Each folder represents one independent project. Each project must have its own independent Git repository. This root repository exists only as a centralized archive.

> **This repository is not actively maintained.** Each sub-project is maintained in its own repository. This archive is a static snapshot and will not be continuously synchronized.

---

## Technology Stack

All projects in this collection use, or may later use, the following technologies. Technologies marked with an asterisk (*) are currently used by at least one project in this collection.

### Core

| Technology | Role |
|------------|------|
| **TypeScript** * | Primary language with strict mode enabled |
| **React** * | UI framework using functional components and Hooks |
| **Tailwind CSS** * | Utility-first CSS framework |
| **Node.js** * | JavaScript runtime environment |
| **Vite** * | Development server and build tool |
| **nodemon** | Development-time watcher and restart utility |

### Styling and Animation

| Technology | Role |
|------------|------|
| **WebGL / WebGL2** * | GPU-accelerated browser rendering |
| **WebGPU** | Modern GPU rendering and compute API |
| **Framer Motion / Motion** | React animation library |
| **GSAP** | Professional animation platform |
| **Three.js / React Three Fiber** | 3D rendering for the browser |
| **Lottie** | JSON-based animation playback |
| **CSS Houdini** | Low-level CSS painting and animation APIs |

### UI and Design Systems

| Technology | Role |
|------------|------|
| **Radix UI** | Accessible unstyled primitives |
| **shadcn/ui** | Composable UI components built on Radix UI |
| **Headless UI** | Accessible unstyled components |
| **Ariakit** | Accessible React component toolkit |
| **cmdk** | Command palette primitive |
| **Vaul** | Drawer primitive for React |

### State and Data

| Technology | Role |
|------------|------|
| **Zustand** | Lightweight state management |
| **Jotai** | Atomic state management |
| **Valtio** | Proxy-based state management |
| **XState** | Finite state machines and statecharts |
| **TanStack Query** | Server-state synchronization |
| **SWR** | Remote data fetching Hooks |
| **tRPC** | End-to-end type-safe APIs |
| **Axios** | HTTP client |

### Forms, Validation, and Utilities

| Technology | Role |
|------------|------|
| **Zod** | TypeScript-first validation |
| **React Hook Form** | Form state management |
| **Valibot** | Lightweight schema validation |
| **clsx / cva** | Class composition utilities |
| **nanoid** | Compact unique ID generation |
| **date-fns / Day.js** | Date utilities |
| **Lodash / Radash** | Utility function collections |

### Testing and Quality

| Technology | Role |
|------------|------|
| **Vitest** | Vite-native unit testing |
| **Jest** | JavaScript testing framework |
| **React Testing Library** | UI behavior testing |
| **Playwright** | End-to-end browser testing |
| **Cypress** | Component and end-to-end testing |
| **Storybook** | Isolated component development |
| **ESLint** | Static code analysis |
| **Prettier** | Code formatting |

### Build, Deployment, and Infrastructure

| Technology | Role |
|------------|------|
| **Rollup** | Library bundling |
| **esbuild** | Fast JavaScript bundling |
| **Webpack 5** | Configurable bundling |
| **Next.js** | React framework |
| **Remix** | Full-stack React framework |
| **Astro** | Content-focused site generation |
| **pnpm** | Fast package management |
| **Turborepo** | Monorepo build system |
| **Docker** | Containerization |
| **GitHub Actions** | CI/CD workflows |
| **Vercel** | Frontend deployment |
| **Cloudflare Workers** | Edge compute |

---

## Project Index

| Directory | Project Name | Summary |
|-----------|--------------|---------|
| [`claude-range-slider`](./claude-range-slider) | Claude Range Slider | Effort slider with WebGL2 fire animation |

---

## Repository Structure

```text
UI/
|-- README.md
|-- LICENSE
`-- claude-range-slider/
    |-- README.md
    |-- package.json
    |-- vite.config.ts
    |-- tsconfig.json
    `-- src/
        |-- App.tsx
        |-- main.tsx
        |-- index.css
        `-- components/
            `-- EffortCard/
                |-- EffortCard.tsx
                |-- hooks/
                |   |-- useSliderState.ts
                |   `-- useWebglFire.ts
                `-- shaders/
                    `-- index.ts
```

---

## Repository Rules

- Every project must live in its own folder.
- Every project must have its own independent Git repository.
- Every project must be published to GitHub.
- This root repository exists only as an archive and may remain inactive.
- All public-facing language must use formal American English.
- All source files must include the standard file header.
- All source code must follow the official standards for TypeScript, React, and Tailwind CSS.

### GitHub Commit Rule

Every project must use strict version-style commit titles.

- The first project commit title must be exactly `V0.0.1`.
- The second project commit title must be exactly `V0.0.2`.
- Each later commit title must increment the final number by one.
- The commit body may contain a short description, but it must use formal American English.
- The commit body must not exceed three or four English words.

Example:

```text
V0.0.1

Initial release
```

---

## Coding Standards

Official documentation takes precedence in all style and convention decisions.

- **TypeScript**: Follow the TypeScript Handbook. Strict mode must remain enabled.
- **React**: Follow the React official documentation. Use functional components and Hooks.
- **Tailwind CSS**: Follow the Tailwind CSS official documentation.
- **Comments**: Use JSDoc-style comments where documentation is necessary.
- **Naming**: Components use PascalCase. Hooks use the `use` prefix. Utility functions use camelCase. Constants use SCREAMING_SNAKE_CASE.
- **Formatting**: Prefer Prettier-compatible formatting. Avoid manual formatting exceptions.

### Standard File Header

Every source file must begin with the following header:

```typescript
/**
 * @file        ComponentName.tsx
 * @author      Astraeus
 * @created     YYYY-MM-DD HH:mm:ss UTC
 * @license     MIT
 *
 * Brief description of what this file does.
 *
 * @disclaimer
 * This file is released under the MIT License. Anyone may use it for any
 * purpose. The author accepts no liability for any outcome arising from its use.
 * All rights and final interpretation of this file are reserved by the author.
 * To contact the author: astraeuszhao@gmail.com
 */
```

---

## Attribution and References

The code in this repository is an original implementation and does not directly incorporate third-party source code. The following source provided substantial creative inspiration and visual reference:

| Source | Nature of Reference |
|--------|---------------------|
| **Claude Code** by [Anthropic](https://www.anthropic.com) | Effort-level slider UI, fire animation behavior, and the general visual direction used by `claude-range-slider`. |

If you believe this repository infringes upon your rights, please contact the author directly before pursuing formal action. The implementation process can be explained upon request.

---

## Contact

For questions, suggestions, or rights-related inquiries:

- Website: [astraeuszhao.com](https://astraeuszhao.com)
- Website: [smartdolphin.top](https://smartdolphin.top)
- Email: astraeuszhao@gmail.com

---

## Disclaimer

All content in this repository, including code, designs, and associated materials, is freely available for any commercial or non-commercial use. The author accepts no responsibility for any direct or indirect loss, legal dispute, or consequence arising from its use.

All rights to this repository and its contents, including the right of final interpretation, are reserved by the author (Astraeus).

---

## License

[MIT License](./LICENSE) Copyright (c) 2026 Astraeus
