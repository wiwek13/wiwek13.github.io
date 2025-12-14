# Vivek Kushwah - DevOps Portfolio

A modern, dark-mode portfolio website showcasing expertise in DevOps, SRE, Cloud Engineering, and Infrastructure.

## 🚀 Features

- **Modern Design**: Dark mode with glassmorphism effects, smooth gradients, and responsive layouts
- **Comprehensive Sections**:
  - Hero section with strong DevOps branding
  - About section (short + long variants)
  - Skills matrix (Cloud, Infrastructure, DevOps Tools, Kubernetes, IaC, SRE, Monitoring)
  - Experience timeline with achievements
  - Featured projects with architecture diagrams (Mermaid)
  - Certifications and education
  - Contact section with social links
- **SEO Optimized**: Complete OpenGraph and Twitter Card metadata
- **Performance**: Optimized for fast loading and smooth animations
- **Accessibility**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Diagrams**: [Mermaid](https://mermaid.js.org/) - Architecture diagrams
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/wiwek13/wiwek13.github.io.git
cd wiwek13.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build:
```bash
npm run preview
```

## 🚢 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy (if configured)

### Manual Deployment

1. Build the site:
```bash
npm run build
```

2. The `dist` folder contains the static files ready for deployment

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select source: "Deploy from a branch"
   - Choose branch: `main` (or `gh-pages`)
   - Select folder: `/ (root)` or `/dist` depending on your setup

### Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

## 📝 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.astro`
   - Update name, title, and social links
   - Modify the description

2. **About Section**: Edit `src/components/About.astro`
   - Update the about text
   - Modify achievements and metrics

3. **Experience**: Edit `src/components/Experience.astro`
   - Add/update work experience
   - Modify achievements and technologies

4. **Skills**: Edit `src/components/Skills.astro`
   - Update skill categories and proficiency levels
   - Add or remove skills

5. **Projects**: Edit `src/components/Projects.astro`
   - Add your projects with descriptions
   - Update Mermaid diagrams for architecture

6. **Certifications**: Edit `src/components/Certifications.astro`
   - Add your certifications
   - Update education details

7. **Contact**: Edit `src/components/Contact.astro`
   - Update contact information
   - Modify social links

### Styling

- Global styles: `src/styles/global.css`
- Tailwind config: `tailwind.config.mjs`
- Color scheme: Modify gradient colors in `global.css`

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effects on cards
- **Gradient Text**: Eye-catching gradient text effects
- **Smooth Animations**: Floating elements and gradient shifts
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Optimized dark color scheme

## 📊 SEO & Performance

- Semantic HTML structure
- OpenGraph and Twitter Card metadata
- Optimized images and assets
- Fast loading times
- Mobile-friendly design

## 🔧 Configuration

### Astro Config

Edit `astro.config.mjs` to customize:
- Site URL
- Base path
- Integrations

### Tailwind Config

Edit `tailwind.config.mjs` to customize:
- Color palette
- Typography
- Spacing and sizing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- **Email**: wiwek13@gmail.com
- **LinkedIn**: [linkedin.com/in/wiwek13](https://www.linkedin.com/in/wiwek13/)
- **GitHub**: [github.com/wiwek13](https://github.com/wiwek13)

---

Built with ❤️ using Astro, Tailwind CSS, and Mermaid
