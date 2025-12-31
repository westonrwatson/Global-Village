# Global Village

A React website built with Vite and Tailwind CSS, deployed on GitHub Pages.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages. The base path is set to `/Global-Village/` in `vite.config.js`.

### First-time Setup

1. Make sure you have `gh-pages` installed (it's already in devDependencies)
2. Update the `base` path in `vite.config.js` if your repository name is different
3. Deploy:
```bash
npm run deploy
```

This will:
- Build the project
- Deploy the `dist` folder to the `gh-pages` branch
- Make your site available at `https://[your-username].github.io/Global-Village/`

### GitHub Repository Settings

After the first deployment, go to your GitHub repository settings:
1. Navigate to Settings → Pages
2. Under "Source", select the `gh-pages` branch
3. Your site will be live at the URL shown

## Project Structure

```
Global-Village/
├── public/          # Static assets
├── src/
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles with Tailwind
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json     # Dependencies and scripts
```

## Technologies

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Static site hosting

