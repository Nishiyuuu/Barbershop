import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    // ЗАМІНІТЬ 'repo-name' на назву вашого репозиторію на GitHub
    base: command === 'serve' ? '/' : '/repo-name/',

    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        // Використовуємо абсолютний шлях через process.cwd(), щоб не плутатись
        input: glob.sync('src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: '[name].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['src/**/*.html']),
      // PostCSS плагіни краще виносити в postcss.config.js,
      // але якщо працює тут — залишайте
    ],
  };
});
