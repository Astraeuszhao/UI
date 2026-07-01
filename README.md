# UI

Personal collection of UI components, motion effects and interactive design archive repository.

---

## Language / 语言

<details open>
<summary>English</summary>

### I. Repository Overview

This repository acts as a **centralized archive warehouse** for directory aggregation only, without routine iteration maintenance for subprojects.

1. Each top-level folder corresponds to a fully independent engineering project;
2. Every subproject maintains its own separate Git repository and is released independently on GitHub;
3. This root repository only keeps static snapshot archives and will not synchronize daily updates of each subproject continuously;
4. No active daily maintenance is performed in this root repo. All feature iterations, bug fixes and version upgrades are carried out within each standalone sub-repository.

### II. Technology Stack Constraints

#### Mandatory Technology Admission Rules

All subproject development, iterations and external contribution PRs **must strictly adopt technologies listed below only**.

1. All contributors must develop business functions using technologies within the list;
2. Any PR adopting unlisted technologies will be rejected directly;
3. If new technology is truly necessary for business scenarios, add a line at the very top of PR description: `Request to add technology: XXX`, including detailed reasons, advantages over existing alternatives and long-term maintainability.

#### Technology Stack List

| Layer | Technologies |
|-------|--------------|
| Core Runtime | TypeScript, JavaScript, React, Vite, Node.js, pnpm, npm, yarn, Bun, Deno, nodemon |
| Styling & Animation | Tailwind CSS, CSS Modules, Plain CSS, CSS-in-JS, Framer Motion, GSAP, WebGL2, WebGPU, Three.js |
| Headless UI | Radix UI, shadcn/ui, Headless UI, Ariakit, cmdk, Vaul, React Aria, Floating UI |
| State Management | Zustand, Jotai, Valtio, XState, TanStack Query, SWR, tRPC, Axios, React Context, Redux Toolkit |
| Form & Utilities | Zod, Valibot, React Hook Form, clsx, cva, nanoid, uuid, date-fns, Lodash, Radash |
| Code Quality | ESLint, Prettier, Vitest, Jest, React Testing Library, Playwright, Cypress, Storybook |
| Build & Deployment | Rollup, esbuild, Webpack 5, Next.js, Remix, Astro, Turborepo, Docker, GitHub Actions |

### III. Subproject Index

| Folder | Project Name | Description | Version |
|--------|--------------|-------------|---------|
| claude-range-slider | Claude Range Slider | WebGL2 particle flame effect effort level slider | V0.0.3 |
| modelnex-console | ModelNex Console | Interactive console login page with animations | V0.0.1 |

### IV. Repository Management Standards

#### 1. Subproject Hosting Rules

1. Each independent business module shall be placed in an individual top-level folder;
2. Each subfolder must correspond to a standalone full Git repository hosted on GitHub;
3. The root repository is merely for catalog archiving and will not participate in any subproject business iteration;
4. All public documents and code comments are written in formal American English;
5. Every source file shall carry unified copyright header statement;
6. All codes strictly follow official original specifications of corresponding technologies.

#### 2. Git Commit Version Standard

All subprojects use pure version number as commit subject:

- Initial commit: `V0.0.1`
- Increment the last digit for each release: `V0.0.2`, `V0.0.3`...
- Commit body uses concise formal English within 3~4 words.

#### 3. Mandatory Source File Header

```typescript
/**
 * @file        FileName.tsx
 * @author      Astraeus
 * @created     2026-XX-XX HH:mm:ss UTC
 * @license     GPL-2.0-only
 *
 * Brief description of current file function
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: astraeuszhao@gmail.com
 */
```

### V. Inspiration and Attribution

| Reference Source | Detailed Reference Scope |
|------------------|--------------------------|
| Claude Code (Anthropic) | Structure, particle flame visual style and interaction logic of `claude-range-slider` |

### VI. Contact

E-mail: astraeuszhao@gmail.com

### VII. License

**GNU General Public License v2.0 (GPLv2)** - See LICENSE file for full text.

Copyright (C) 2000-2026 Astraeus

### VIII. Code Standards

Global coding standards are defined in `CODE_STANDARD.md`.

</details>

<details>
<summary>中文</summary>

### 一、仓库整体说明

本仓库属于**中心化归档总仓**，仅做目录聚合展示，不负责各子项目日常迭代维护。

1. 总仓库内每一个独立文件夹，均对应一套完整独立工程；
2. 每个子工程都拥有完全独立的Git仓库，并单独发布至GitHub平台；
3. 本顶层总仓库仅做静态快照归档，不会持续同步各个子项目的日常更新；
4. 本总仓库不做日常主动维护，所有功能迭代、Bug修复、版本更新均在各个子项目独立仓库内完成。

### 二、整体技术栈约束

#### 技术准入强制规则

本仓库所有子项目开发、迭代、外部贡献PR提交，**仅允许使用下方罗列的技术栈**。

1. 所有参与本项目开发的开发者，必须严格选用下表内技术进行业务开发；
2. 外部人员提交PR时，若PR代码使用了本表未收录的技术，本仓库将直接拒绝合并；
3. 若确实有合理业务场景需要新增未收录技术，提交PR时必须在PR描述最顶部单独写明：`申请新增技术：XXX`，附带详细使用理由、替代已有技术的优势、长期维护可行性。

#### 技术栈清单

| 层级 | 技术栈 |
|------|--------|
| 核心基础运行层 | TypeScript、JavaScript、React、Vite、Node.js、pnpm、npm、yarn、Bun、Deno、nodemon |
| 样式体系与动画渲染 | Tailwind CSS、CSS Modules、Plain CSS、CSS-in-JS、Framer Motion、GSAP、WebGL2、WebGPU、Three.js |
| 无样式基础UI组件基座 | Radix UI、shadcn/ui、Headless UI、Ariakit、cmdk、Vaul、React Aria、Floating UI |
| 全局状态与远程数据管理 | Zustand、Jotai、Valtio、XState、TanStack Query、SWR、tRPC、Axios、React Context、Redux Toolkit |
| 表单校验与通用工具库 | Zod、Valibot、React Hook Form、clsx、cva、nanoid、uuid、date-fns、Lodash、Radash |
| 代码质量与自动化测试 | ESLint、Prettier、Vitest、Jest、React Testing Library、Playwright、Cypress、Storybook |
| 打包工程化、部署与运维 | Rollup、esbuild、Webpack 5、Next.js、Remix、Astro、Turborepo、Docker、GitHub Actions |

### 三、子项目总览索引表

| 文件夹 | 项目全称 | 项目简要介绍 | 版本 |
|--------|----------|--------------|------|
| claude-range-slider | Claude Range Slider | 基于WebGL2粒子火焰特效的等级拖拽滑动组件 | V0.0.3 |
| modelnex-console | ModelNex Console | 交互式控制台登录页面，包含动画字符与错误提示系统 | V0.0.1 |

### 四、仓库强制管理规范

#### 1、子项目托管硬性规则

1. 所有独立业务必须单独放置顶层一级文件夹内；
2. 每一个子文件夹必须拥有独立完整Git仓库，单独托管在GitHub；
3. 顶层总仓库仅做目录聚合归档，不介入任何子项目业务迭代；
4. 全项目所有对外公开文档、注释文案均使用标准美式正式英文撰写；
5. 所有源码文件必须统一挂载标准文件头部版权声明；
6. 全部代码严格遵循对应技术官方原版开发规范文档。

#### 2、Git提交版本规范

所有子项目严格采用纯版本号式提交标题：

- 项目首次初始化提交标题固定：`V0.0.1`
- 后续每一次正式提交，仅递增最后一位数字：`V0.0.2`、`V0.0.3`……
- Commit正文仅填写简短正式英文描述，字数严格控制在3~4个单词以内。

#### 3、强制源码标准文件头

```typescript
/**
 * @file        FileName.tsx
 * @author      Astraeus
 * @created     2026-XX-XX HH:mm:ss UTC
 * @license     GPL-2.0-only
 *
 * Brief description of current file function
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: astraeuszhao@gmail.com
 */
```

### 五、灵感来源与引用说明

| 参考来源 | 具体借鉴范围 |
|----------|--------------|
| Anthropic旗下Claude Code | `claude-range-slider`项目的能效滑动条结构、火焰粒子动效整体视觉风格与交互逻辑 |

### 六、联系方式

电子邮箱：astraeuszhao@gmail.com

### 七、开源协议

**GNU General Public License v2.0（GPLv2）** - 完整协议文本查看 LICENSE 文件。

版权所有：Copyright (C) 2000-2026 Astraeus

### 八、代码规范指引

本项目统一编码规范详见 `CODE_STANDARD.md`。

</details>