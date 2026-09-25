import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function efommPath(server) {
  server.middlewares.use((request, response, next) => {
    const url = new URL(request.url, 'http://localhost');
    if (url.pathname === '/efomm') {
      response.writeHead(302, { Location: `/efomm/${url.search}` });
      response.end();
      return;
    }
    next();
  });
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'efomm-directory-path',
    configureServer: efommPath,
    configurePreviewServer: efommPath,
  }],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        efomm: 'efomm/index.html',
      },
    },
  },
})
