# Portfolio Website Project - Complete Summary

## Project Overview

A modern, professional DevOps engineer portfolio website built with Astro, React, and Tailwind CSS. The website showcases work experience, projects, skills, certifications, awards, and contact information for Vivek Kushwah, a DevOps Engineer.

## Technology Stack

### Core Framework
- **Astro 4.15.0** - Static site generator
- **React 18.3.1** - For interactive components
- **TypeScript 5.5.4** - Type safety
- **Tailwind CSS 3.4.7** - Utility-first CSS framework

### Key Dependencies
- `@astrojs/react` - React integration for Astro
- `@astrojs/tailwind` - Tailwind CSS integration
- `@astrojs/sitemap` - Automatic sitemap generation
- `mermaid 10.9.1` - Architecture diagrams (optional, currently not used in projects)

### Build & Deployment
- **Output**: Static site (GitHub Pages compatible)
- **Site URL**: https://wiwek13.github.io
- **GitHub Actions**: Automated deployment workflow

## Project Structure

```
wiwek13.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── favicon.svg             # Site favicon
│   ├── headshot.jpg            # User headshot (to be added)
│   └── headshot-placeholder.svg # Fallback placeholder
├── src/
│   ├── components/
│   │   ├── About.astro         # About section with stats
│   │   ├── Awards.astro        # Awards and recognition
│   │   ├── Certifications.astro # Certifications and education
│   │   ├── Contact.astro       # Contact information
│   │   ├── DevOpsIcon.tsx      # Custom SVG icon component
│   │   ├── Experience.astro    # Work experience timeline
│   │   ├── Footer.astro        # Site footer
│   │   ├── Hero.astro          # Hero/landing section
│   │   ├── MermaidDiagram.tsx  # Mermaid diagram component
│   │   ├── Navigation.astro     # Site navigation
│   │   ├── Projects.astro      # Featured projects
│   │   └── Skills.astro        # Technical skills grid
│   ├── layouts/
│   │   └── Layout.astro        # Main layout with SEO
│   ├── pages/
│   │   └── index.astro         # Main page
│   └── styles/
│       └── global.css          # Global styles and animations
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies
├── tailwind.config.mjs          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Component Details

### 1. Layout.astro
- **Purpose**: Base layout with SEO metadata
- **Features**:
  - OpenGraph tags for social sharing
  - Twitter Card metadata
  - Canonical URLs
  - Theme color meta tag
  - Dark mode optimized

### 2. Navigation.astro
- **Purpose**: Fixed top navigation bar
- **Features**:
  - Glassmorphism design
  - Mobile-responsive menu
  - Smooth scroll navigation
  - Active link highlighting

### 3. Hero.astro
- **Purpose**: Landing section with introduction
- **Features**:
  - Name and title display
  - Headshot image (from `/public/headshot.jpg`)
  - Social media links (LinkedIn, GitHub, Email)
  - CTA buttons (Get In Touch, View Work)
  - Status badge (Available for opportunities)
  - Background pattern and gradient orbs

### 4. About.astro
- **Purpose**: Personal introduction and key metrics
- **Content**:
  - Professional description
  - Key statistics (40% Cost Reduction, 35% Faster Builds, 99.9% Uptime, 25% MTTR Reduction)
- **Design**: Glass cards with fade-in animations

### 5. Experience.astro
- **Purpose**: Work experience timeline
- **Data Structure**:
  ```javascript
  {
    company: string,
    role: string,
    period: string,
    location: string,
    achievements: string[],
    technologies: string[]
  }
  ```
- **Current Companies**:
  1. Zebpay (2024/05 – Present) - 6 achievements
  2. Rizzle (2023/09 – 2024/02) - 6 achievements
  3. Vivvix (Numerator + Kantar) (2022) - 5 achievements
  4. Numerator (2022) - 5 achievements
- **Design**: Timeline layout with glass cards

### 6. Projects.astro
- **Purpose**: Featured projects showcase
- **Data Structure**:
  ```javascript
  {
    title: string,
    description: string,
    technologies: string[]
  }
  ```
- **Current Projects**:
  1. Infrastructure Automation with Terraform and Azure
  2. Monitoring and Observability with Prometheus and Grafana
- **Note**: Architecture diagrams removed per requirements

### 7. Skills.astro
- **Purpose**: Technical skills organized by category
- **Categories**:
  - Cloud Platforms (AWS, Azure, GCP)
  - Container Orchestration (Kubernetes, Docker, Helm, Istio)
  - Infrastructure as Code (Terraform, Ansible, CloudFormation, Pulumi)
  - CI/CD & GitOps (GitHub Actions, Jenkins, GitLab CI, ArgoCD, Flux)
  - Monitoring & Observability (Prometheus, Grafana, ELK Stack, Datadog, New Relic)
  - Programming & Scripting (Python, Go, Bash, YAML, JavaScript)
  - Databases & Caching (PostgreSQL, MongoDB, Redis, Neo4j)
  - SRE & Platform Engineering (Service Mesh, Chaos Engineering, Cost Optimization, DevSecOps)
- **Design**: Grid layout with tech tags (no ratings)

### 8. Awards.astro
- **Purpose**: Awards and recognition
- **Data Structure**:
  ```javascript
  {
    title: string,
    company: string,
    count: number
  }
  ```
- **Current Awards**:
  - Power Performer, Zebpay (2x)
  - Star Spot Award, Vivvix (K+N)
  - Star Spot Award, Numerator

### 9. Certifications.astro
- **Purpose**: Certifications and education
- **Certifications** (only 3 kept):
  1. Docker & Kubernetes: The Practical Guide (Udemy, Nov 2022)
  2. Developing CI/CD Solutions with Azure DevOps (LinkedIn Learning, May 2022)
  3. Go: The Complete Developer's Guide (Golang) (Udemy, Sep 2022)
- **Education**:
  - B.Tech in Computer Science
  - Maulana Azad National Institute Of Technology
  - 2016 – 2020, Bhopal, India
  - CGPA: 7.57/10

### 10. Contact.astro
- **Purpose**: Contact information and CTA
- **Contact Methods**:
  - Email: wiwek13@gmail.com
  - LinkedIn: linkedin.com/in/wiwek13
  - GitHub: github.com/wiwek13
  - Location: New Delhi, India

### 11. Footer.astro
- **Purpose**: Site footer with copyright and social links

### 12. DevOpsIcon.tsx
- **Purpose**: Custom SVG icon component
- **Icons Available**: cloud, kubernetes, docker, terraform, ci, monitor, code, database, tools, award, education, user, lightbulb, rocket, chart
- **Usage**: `<DevOpsIcon client:load name="cloud" className="w-6 h-6" />`

## Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Cyan (#06b6d4)
- **Background**: Dark slate (#0a0a0f)
- **Text**: Slate-100 to Slate-400

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono
- **Headings**: Bold, negative letter spacing (-0.02em)

### Components
- **Glass Cards**: `glass-card` class with backdrop blur
- **Tech Tags**: `tech-tag` class for technology badges
- **Gradient Text**: `gradient-text` class for highlighted text
- **Section Padding**: `section-padding` (py-20)

### Animations
- **Fade In Up**: On initial load
- **Fade On Scroll**: Intersection Observer based
- **Hover Effects**: Subtle translate and shadow changes
- **No heavy animations**: Performance optimized

## Content Data

### Personal Information
- **Name**: Vivek Kushwah
- **Title**: DevOps Engineer
- **Email**: wiwek13@gmail.com
- **Phone**: 8989879834
- **Location**: New Delhi, India (Khargone)
- **LinkedIn**: https://www.linkedin.com/in/wiwek13/
- **GitHub**: https://github.com/wiwek13

### Work Experience (Complete List)

#### 1. Zebpay (2024/05 – Present)
- **Role**: Engineer
- **Location**: New Delhi, India
- **Key Achievements**:
  - Led Azure APIM to AWS API Gateway migration
  - Designed reusable Terraform modules for AWS, Azure, GCP
  - Achieved 40% cloud cost reduction
  - Rebuilt CI/CD pipelines, reduced build time by 35%
  - Deployed centralized observability platform (Prometheus, Grafana, Thanos, Loki, Opsgenie)
  - Managed Kafka to AWS MSK migration
  - Implemented automated compliance workflows
- **Technologies**: AWS, Azure, GCP, Terraform, Kubernetes, EKS, GitHub Actions, Prometheus, Grafana, Docker, Python, Go

#### 2. Rizzle (2023/09 – 2024/02)
- **Role**: Engineer
- **Location**: Hyderabad, India
- **Key Achievements**:
  - Designed scalable cloud infrastructure (EC2, ElasticSearch, MongoDB)
  - Kubernetes operations with 20% better resource utilization
  - Dockerized application stacks with multi-stage builds
  - Automated workflows reducing deployment time by 40%
  - Developed Slack-based release tools in Node.js
  - Reduced MTTR by 25% with Prometheus and Grafana
- **Technologies**: AWS, EC2, ElasticSearch, MongoDB, RDS, S3, CloudFront, Kubernetes, Docker, Jenkins, GitHub Actions, AWS CodePipeline, ArgoCD, Node.js, Prometheus, Grafana

#### 3. Vivvix (Numerator + Kantar) (2022)
- **Role**: DevOps Engineer
- **Location**: India
- **Key Achievements**:
  - Provisioned infrastructure with Terraform and Atlantis
  - Optimized Docker images
  - Built ELK stack logging, cut downtime by 25%
  - Engineered Azure Pipelines, reduced deployment time by 50%
  - Managed Databricks ETL workflows
  - Deployed AKS clusters
- **Technologies**: Terraform, Atlantis, Docker, ELK Stack, Elastalert, Azure Pipelines, Azure, Databricks, Azure Data Factory, Azure ML Workspaces, AKS, Kubernetes

#### 4. Numerator (2022)
- **Role**: DevOps Engineer
- **Location**: India
- **Key Achievements**:
  - Managed AWS infrastructure (Lambda, RDS, EKS, DMS, EC2, CloudFront, Route 53)
  - Implemented IaC with Terraform and Atlantis
  - Enhanced CI/CD pipelines, reduced runtime by 30%
  - Built Airflow infrastructure with Kubernetes
  - Implemented monitoring stack (Prometheus, Grafana, PagerDuty, Slack)
- **Technologies**: AWS, Lambda, RDS, EKS, DMS, EC2, CloudFront, Route53, Terraform, Atlantis, Snowflake, CircleCI, GitHub Actions, Django, Airflow, Docker, Kubernetes, Prometheus, Grafana, PagerDuty

### Projects (Complete List)

#### 1. Infrastructure Automation with Terraform and Azure
- **Description**: Designed and implemented infrastructure automation using Terraform and Azure. Created Terraform modules and Git/GitHub best practices. Integrated CI/CD pipelines with Azure YAML for Drift and Atlantis in AKS for automated deployments.
- **Technologies**: Terraform, Azure, Git, Atlantis, Azure Pipelines, Kubernetes, Helm

#### 2. Monitoring and Observability with Prometheus and Grafana
- **Description**: Implemented monitoring and observability solution using Prometheus for metric collection with custom exporters and alerting rules, along with Grafana for interactive dashboards. Integrated with PagerDuty and Slack for incident management.
- **Technologies**: AWS, EKS, Kubernetes, Prometheus, Grafana, Microservices, Databases, PagerDuty, Slack

### Skills (Complete List)

**Cloud Platforms**: AWS, Azure, GCP

**Container Orchestration**: Kubernetes, Docker, Helm, Istio

**Infrastructure as Code**: Terraform, Ansible, CloudFormation, Pulumi

**CI/CD & GitOps**: GitHub Actions, Jenkins, GitLab CI, ArgoCD, Flux, Azure Pipelines, CircleCI, AWS CodePipeline

**Monitoring & Observability**: Prometheus, Grafana, ELK Stack, Datadog, New Relic, Alert Manager, PagerDuty, Slack/Teams Integrations

**Programming & Scripting**: Python, Go, Bash, YAML, JavaScript, CPP, Java, HCL (Terraform), PowerShell

**Databases & Caching**: PostgreSQL, MongoDB, Redis, Neo4j

**SRE & Platform Engineering**: Service Mesh, Chaos Engineering, Cost Optimization, DevSecOps

**Other Technologies**: Linux, Snowflake, Databricks, Airflow, SonarQube, SQL, NoSQL, DSA, Operating Systems, RDBMS, Networking Protocols, Build and Release, Deployment, SCM

### Awards
1. Power Performer, Zebpay (2x)
2. Star Spot Award, Vivvix (K+N)
3. Star Spot Award, Numerator

### Certifications (Only 3)
1. Docker & Kubernetes: The Practical Guide (Udemy, Nov 2022)
2. Developing CI/CD Solutions with Azure DevOps (LinkedIn Learning, May 2022)
3. Go: The Complete Developer's Guide (Golang) (Udemy, Sep 2022)

### Education
- **Degree**: B.Tech in Computer Science
- **Institution**: Maulana Azad National Institute Of Technology
- **Period**: 2016 – 2020
- **Location**: Bhopal, India
- **CGPA**: 7.57/10

## Configuration Files

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  site: 'https://wiwek13.github.io',
  base: '/',
  output: 'static',
});
```

### tailwind.config.mjs
- Custom color palette
- Inter and JetBrains Mono fonts
- Custom animations
- Extended theme configuration

### package.json
- Scripts: dev, build, preview, start
- Dependencies: Astro, React, Tailwind, Mermaid, Sitemap
- TypeScript support

## Key Design Decisions

1. **No Skill Ratings**: Skills displayed as tags only, no percentage ratings
2. **No Architecture Diagrams**: Removed from projects section
3. **Headshot**: Pre-uploaded image at `/public/headshot.jpg` (not uploadable)
4. **Clean Design**: Minimal, professional aesthetic
5. **Dark Theme**: Optimized for dark mode
6. **Responsive**: Mobile-first design approach
7. **Performance**: Static site generation, optimized assets
8. **SEO**: Complete metadata and OpenGraph tags

## Build Process

1. **Development**: `npm run dev` - Starts dev server on port 4321
2. **Build**: `npm run build` - Generates static site in `dist/` folder
3. **Preview**: `npm run preview` - Preview production build locally

## Deployment

### GitHub Pages (Automatic)
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Automatically builds and deploys on push to `main` branch
- Uses GitHub Pages Actions

### Manual Deployment
1. Run `npm run build`
2. Deploy `dist/` folder contents to GitHub Pages

## File Locations for Content Updates

- **Work Experience**: `src/components/Experience.astro` - Update `experiences` array
- **Projects**: `src/components/Projects.astro` - Update `projects` array
- **Skills**: `src/components/Skills.astro` - Update `skillCategories` array
- **Awards**: `src/components/Awards.astro` - Update `awards` array
- **Certifications**: `src/components/Certifications.astro` - Update `certifications` array
- **About**: `src/components/About.astro` - Update description and stats
- **Headshot**: Add image to `public/headshot.jpg`

## Styling System

### Utility Classes
- `glass-card`: Glassmorphism card effect
- `tech-tag`: Technology badge styling
- `gradient-text`: Gradient text effect
- `section-padding`: Consistent section spacing
- `fade-on-scroll`: Scroll-triggered animations

### Color Scheme
- Background: `#0a0a0f` (very dark blue-black)
- Cards: `slate-900/60` with backdrop blur
- Text: `slate-100` to `slate-400`
- Accents: Blue, Purple, Pink gradients

## Animation System

- **Intersection Observer**: Triggers animations on scroll
- **Fade In**: Elements fade in when visible
- **Hover Effects**: Subtle lift and shadow on hover
- **No Heavy Animations**: Performance optimized

## SEO Configuration

- **Title**: "Vivek Kushwah | DevOps Engineer"
- **Description**: DevOps engineer specializing in AWS, Azure, Kubernetes, Terraform, CI/CD
- **Keywords**: DevOps, SRE, Cloud Engineer, AWS, Azure, Kubernetes, Terraform, CI/CD, Infrastructure, Platform Engineering
- **OpenGraph**: Complete social media sharing tags
- **Twitter Cards**: Optimized for Twitter sharing
- **Sitemap**: Auto-generated by Astro

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design (mobile, tablet, desktop)
- Dark mode optimized

## Performance Optimizations

- Static site generation
- Minimal JavaScript (only for interactions)
- Optimized images
- Lazy loading where applicable
- Efficient CSS with Tailwind

## Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly

## Current State

- ✅ All components implemented
- ✅ Real data from resume integrated
- ✅ Clean, professional design
- ✅ Responsive layout
- ✅ SEO optimized
- ✅ GitHub Pages ready
- ⏳ Headshot image needs to be added to `public/headshot.jpg`

## Notes for Recreation

1. Install dependencies: `npm install`
2. Add headshot: Place image at `public/headshot.jpg`
3. Customize content: Update component data arrays
4. Build: `npm run build`
5. Deploy: Push to GitHub or deploy `dist/` folder

## Key Features Summary

- Modern, clean design
- Dark theme optimized
- Responsive layout
- Glassmorphism effects
- Scroll-triggered animations
- Professional typography
- Complete SEO metadata
- GitHub Pages deployment
- Static site generation
- TypeScript support
- React components for interactivity
- Custom SVG icons
- No skill ratings
- No architecture diagrams in projects
- Pre-uploaded headshot (not uploadable)
