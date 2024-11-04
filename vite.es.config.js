// 打包 ES 模块所用的配置文件

import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir: 'empty', // 不打包public里的静态资源
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, 'src/bundle.js'), // 打包的入口文件
      name: 'YokyulComponentUI',
      fileName: 'yokyul-component-ui',
      formats: ['es']
    },
    rollupOptions: {
      // 不需要打包到组件库里的依赖。因为在下载该组件库时，会自动下载需要的依赖
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'lodash-es'
      ]
    }
  }
})
