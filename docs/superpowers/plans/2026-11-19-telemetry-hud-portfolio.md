# Autonomous Telemetry HUD Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul Vivek Kushwah's portfolio into an extraordinary, high-awe Cyber-Telemetry HUD with interactive Agentic AI incident simulation, native scroll-driven scrollytelling, cursor spotlight cards, and a `Cmd+K` command palette, while permanently eliminating previous canvas frame-rate drops.

**Architecture:** Astro static site with React interactive islands. Core narrative rendered as zero-JS static HTML, while interactive HUD systems (Agentic AI Topology, Cursor Spotlight Cards, and `Cmd+K` Palette) are loaded via `client:visible` and `client:idle`. Animations are built using compositor-only native CSS (`animation-timeline: view()`, `@starting-style`, `opacity`, `transform`) in strict compliance with Google's Modern Web Guidance.

**Tech Stack:** Astro 4, React 18, Tailwind CSS 3, Framer Motion, HTML5 Canvas (Hardware-accelerated), Native CSS View Timelines & Native `<dialog>` API.

## Global Constraints
- Maximum canvas particles: 75 nodes (spatial partitioning grid, zero $O(N^2)$ checks).
- Canvas MUST auto-pause via `cancelAnimationFrame` when scrolled out of view or when `document.hidden`.
- Never animate non-composited layout properties (`width`, `height`, `top`, `left`). Use `transform` and `opacity` only.
- Native `<dialog>` modal must follow Modern Web Guidance: no redundant `role="dialog"`, include `overscroll-behavior: contain`, and animate with `@starting-style` and `transition-behavior: allow-discrete`.
- Strictly honor `@media (prefers-reduced-motion: reduce)`.
- No broken builds: Every task must compile cleanly with `npm run build`.

---

### Task 1: Overhaul Background Canvas & Vignette CSS

**Files:**
- Modify: `src/components/DevOpsNetwork.tsx`
- Modify: `src/styles/global.css:25-50`

**Interfaces:**
- Produces: `<DevOpsNetwork />` React component running 60 FPS capped at 75 nodes with spatial grid partitioning and visibility/scroll observers.

- [ ] **Step 1: Replace unoptimized canvas loop with spatial-partitioned 75-node cluster**

Update `src/components/DevOpsNetwork.tsx` to:
1. Cap nodes to 75.
2. Remove 4,000 dust particle array.
3. Use a spatial grid to limit proximity checks.
4. Auto-pause rendering when element is off-screen using `IntersectionObserver` or when `document.hidden`.

- [ ] **Step 2: Update CSS to replace heavy scanline overlay with ambient vignette**

In `src/styles/global.css`, remove the continuous full-screen scanline gradient and replace with a hardware-accelerated ambient vignette and subtle cyber grid.

- [ ] **Step 3: Run build and verify 60 FPS canvas execution**

Run: `npm run build`
Expected: Build passes with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/DevOpsNetwork.tsx src/styles/global.css
git commit -m "perf: optimize background canvas to 75 nodes and replace scanline overlay"
```

---

### Task 2: Kinetic Hero Terminal & High-Awe Header

**Files:**
- Modify: `src/components/ShellHero.tsx`
- Modify: `src/data/portfolio.ts:1-25`

**Interfaces:**
- Consumes: `ABOUT` from `src/data/portfolio.ts`
- Produces: `<ShellHero />` with live telemetry indicator pill, chromatic headline, and quick-action buttons.

- [ ] **Step 1: Enhance hero component with live telemetry badge and kinetic actions**

In `src/components/ShellHero.tsx`:
1. Add a pulsing status badge: `● PRODUCTION CLUSTER: OPERATIONAL (99.99% SLO)`.
2. Large high-impact hero title with gradient glow (`from-neon-cyan via-white to-neon-pink`).
3. Tactile quick actions: `[ Explore Architecture ]`, `[ View Incidents & Experience ]`, and `[ Download Resume (PDF) ]`.

- [ ] **Step 2: Run build to verify hero rendering**

Run: `npm run build`
Expected: Build passes with 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ShellHero.tsx src/data/portfolio.ts
git commit -m "feat: upgrade hero with kinetic typography and live telemetry indicator"
```

---

### Task 3: Interactive Agentic AI Telemetry Trace Visualizer

**Files:**
- Create: `src/components/AgenticTraceVisualizer.tsx`
- Modify: `src/pages/index.astro:20-40`

**Interfaces:**
- Produces: `<AgenticTraceVisualizer />` containing an interactive SVG pipeline graph with "Simulate Incident" trigger and inspection drawer.
- Consumes: Placed immediately after Hero in `src/pages/index.astro`.

- [ ] **Step 1: Build the SVG topology and interactive state engine**

Create `src/components/AgenticTraceVisualizer.tsx`:
1. 4 core topology nodes: `OpenTelemetry Ingest` $\rightarrow$ `Cilium & Karpenter Mesh` $\rightarrow$ `Agentic AI Root Cause Analysis` $\rightarrow$ `GitOps Self-Healing (ArgoCD/Flux)`.
2. Simulated packet animation along SVG connecting bezier curves.
3. "Simulate Latency Anomaly" button: triggers amber alert state, traces through Agentic AI node, and resolves to green healthy state with RCA report log.
4. Clickable node drawer displaying simulated metrics, tools used, and architectural rationale.

- [ ] **Step 2: Integrate into index.astro**

Add `<AgenticTraceVisualizer client:visible />` below `<ShellHero client:load />` in `src/pages/index.astro`.

- [ ] **Step 3: Run build and verify component mounts**

Run: `npm run build`
Expected: Build passes with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/AgenticTraceVisualizer.tsx src/pages/index.astro
git commit -m "feat: add interactive Agentic AI telemetry trace visualizer with incident simulation"
```

---

### Task 4: Scrollytelling Experience Timeline & Spotlight Cards

**Files:**
- Modify: `src/components/HoloCard.tsx`
- Modify: `src/components/Experience.astro`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: Google Modern Web Guidance (`motion`, `scrollytelling`, `scroll-entry-exit-effects`).
- Produces: Illuminated vertical spine in `Experience.astro` and pointer-following spotlight gradient in `HoloCard.tsx`.

- [ ] **Step 1: Add dynamic cursor spotlight to HoloCard**

In `src/components/HoloCard.tsx`:
1. Track mouse position relative to the card (`clientX`, `clientY`).
2. Render a smooth radial gradient spotlight that follows the cursor across the border and card backdrop.

- [ ] **Step 2: Add native scroll-driven timeline spine to Experience.astro**

In `src/components/Experience.astro`:
1. Add a central vertical SVG/CSS trace spine linking career tenures (Nymcard, Zebpay, Rizzle, Vivvix).
2. Use `@supports ((animation-timeline: view()) and (animation-range: entry))` to scale and illuminate the line on scroll.
3. Provide an `IntersectionObserver` progressive enhancement script for non-supporting browsers.

- [ ] **Step 3: Run build and verify timeline animations**

Run: `npm run build`
Expected: Build passes with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/HoloCard.tsx src/components/Experience.astro src/styles/global.css
git commit -m "feat: implement scroll-driven experience timeline spine and spotlight cards"
```

---

### Task 5: Global Cyber HUD Dock & Native Top-Layer Command Palette (`Cmd+K`)

**Files:**
- Create: `src/components/CommandPalette.tsx`
- Modify: `src/components/NavHUD.tsx`
- Modify: `src/layouts/Layout.astro`

**Interfaces:**
- Consumes: Google Modern Web Guidance (`dialog`, `animate-to-from-top-layer`).
- Produces: Native `<dialog>` Command Palette triggered by keyboard `Cmd+K` / `Ctrl+K` and HUD button, with `@starting-style` transitions and `overscroll-behavior: contain`.

- [ ] **Step 1: Create native `<dialog>` Command Palette component**

Create `src/components/CommandPalette.tsx`:
1. Native `<dialog>` modal with search input and filtered command list.
2. Commands: Jump to sections (`#about`, `#topology`, `#experience`, `#skills`, `#contact`), Run Incident Simulation, Copy Email, Download Resume.
3. CSS transitions using `@starting-style`, `transition-behavior: allow-discrete`, and `dialog::backdrop` fade.
4. Keyboard listener for `Meta+k` / `Ctrl+k` and `Escape`.

- [ ] **Step 2: Connect Command Palette to NavHUD and Layout**

Integrate into `src/components/NavHUD.tsx` and mount inside `src/layouts/Layout.astro`.

- [ ] **Step 3: Run build and verify modal interactions**

Run: `npm run build`
Expected: Build passes with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/CommandPalette.tsx src/components/NavHUD.tsx src/layouts/Layout.astro
git commit -m "feat: add native dialog command palette with modern top-layer transitions"
```

---

### Task 6: End-to-End Polish, Performance Audit & Verification

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: Production-ready build verified across mobile/desktop, zero console errors, and 60 FPS verified.

- [ ] **Step 1: Full project build test**

Run: `npm run build`
Expected: Static build completes with output generated in `dist/`.

- [ ] **Step 2: Verify bundle size and static route generation**

Verify `dist/index.html` has valid markup and scripts.

- [ ] **Step 3: Commit final integration**

```bash
git add .
git commit -m "chore: complete autonomous telemetry HUD portfolio redesign"
```
