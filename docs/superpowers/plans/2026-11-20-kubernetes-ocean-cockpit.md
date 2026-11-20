# Implementation Plan: Kubernetes High Seas & Maritime Cockpit

- **Target**: Rebuild `PlayableUniverse.tsx` into a high-performance, hyperfluid 3D maritime Kubernetes fleet with interactive vessels, dynamic Gerstner waves, floating cargo salvage, sonar audio synthesis, and comprehensive information drawers.

---

## Proposed Changes

### Task 1: Maritime Sound Synthesizer (`SoundEngine`)
- Upgrade audio engine with:
  - `playSonar()`: High-frequency resonant sonar ping
  - `playBell()`: Crisp nautical ship's bell
  - `playFoghorn()`: Deep resonant bass blast for chaos/storm alerts
  - `playTriumph()`: Harmonic brass chord for GitOps reconciliation
  - `playAmbientOcean()`: Gentle procedural ocean wash

### Task 2: 3D Ocean Simulation & Vessel Fleet (`PlayableUniverse.tsx`)
- **Fluid Ocean Plane**:
  - Vertex displaced plane geometry calculating dynamic Gerstner wave heights:
    $y = \sin(x \cdot 0.15 + t \cdot 1.8) \cdot 0.8 + \cos(z \cdot 0.18 + t \cdot 1.4) \cdot 0.6$
  - Wireframe/translucent bioluminescent ocean shader with dynamic theme colors.
- **Vessel & Port Fleet**:
  - **Flagship Helm Core**: 7-spoked Kubernetes ship's wheel rotating at the center with a glowing Lighthouse beacon beam.
  - **Port 01: Helmsman's Anchorage** (Identity, MANIT Bhopal, Core Philosophy, 99.99% Uptime, 40% FinOps).
  - **Port 02: Nymcard Cargo Vessel** (Abu Dhabi Remote · Autonomous Operators, Kafka/PG/RabbitMQ, Agentic AI RCA).
  - **Port 03: Zebpay Ocean Freighter** (2T+ req/mo API Gateway migration, Opencost FinOps 40%, Karpenter & Cilium).
  - **Port 04: Rizzle Media Cruiser** (High-throughput HPA autoscaling, zero OOM pod evictions, 25% MTTR drop).
  - **Port 05: Vivvix Data Armada** (Airflow 2.x migration, Azure AKS, 50% deployment speedup, Star Spot Award).
  - **Port 06: Autonomous Agentic Drydock** (Interactive Storm / Incident Minigame).
  - **Port 07: Harbor Warehouse** (5-Category Technical Stack & Skill Matrix).
  - **Port 08: Coastal Telegraph** (Direct Comms & Resume PDF).
- **Floating Shipping Containers (Docker / ISO Pods)**:
  - 40 colorful floating cargo containers bobbing on the waves according to real-time wave heights.
  - Clicking a container salvages it, increases "Cargo Points", and pops a quick SRE tip!

### Task 3: Rich Interactive Information System (Fixing Teleport & Empty States)
- Bottom Teleport Dock now contains 8 clearly labeled maritime stations.
- Clicking ANY teleport button:
  1. Sets active vessel state immediately.
  2. Smoothly flies the camera to frame that vessel.
  3. Deploys the animated **Cargo Manifest HUD Card** with full achievements, metrics, technologies, and next/previous vessel buttons!
- Floating 3D HTML labels projected above each vessel in screen-space coordinates.
- "Cruise Expedition" button to auto-tour the fleet.

### Task 4: Dynamic Theme Engine & Mobile Responsiveness
- Support 4 maritime themes: `DEEP OCEAN`, `GOLDEN HARBOR`, `BERMUDA RADAR`, `ARCTIC EXPEDITION`.
- Touch swipe & drag support for mobile screens.

### Task 5: Build, Test & Verify
- Run `npm run build` to verify clean build into `dist/`.
- Use Playwright MCP tools to navigate to `http://localhost:4321/`, click teleport buttons, verify cargo manifest drawer opens with rich text, click themes, verify ocean waves.
- Take screenshots and present in artifact.
