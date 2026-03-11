import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'web-portfolio'

function normalizeBasePath(basePath) {
  if (!basePath) {
    return '/'
  }

  const trimmed = basePath.trim()
  if (!trimmed) {
    return '/'
  }

  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

function getBuildBasePath() {
  // Allow explicit override for deploy targets (for example, GitHub Pages).
  const explicitBase = process.env.VITE_BASE_PATH
  if (explicitBase) {
    return normalizeBasePath(explicitBase)
  }

  // In GitHub Actions, default to repo subpath for project pages.
  if (process.env.GITHUB_ACTIONS === 'true') {
    return `/${repoName}/`
  }

  // Default for local preview and root-domain hosting (for example, Vercel).
  return '/'
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? getBuildBasePath() : '/',
}))
