import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dtsPlugin from 'vite-plugin-dts';
import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    vueJsx(),
    dtsPlugin({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist/types',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'vue_project_collect',
      fileName: 'vue_project_collect',
      formats: ['es'],
    },
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      external(id) {
        return id.includes('node_modules');
      },
      output: {
        dir: 'dist/es',
        sourcemap: true,
        preserveModules: true,
        entryFileNames: '[name]-[hash:6].js',

        // 在preserveModules模式下 不支持
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return 'vendor';
        //   }
        // },
        // 控制非入口代码块的文件名
        // chunkFileNames: 'chunks/[name]-[hash:8].js',
      },
    },
  },
});
