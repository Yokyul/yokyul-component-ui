// 打包 UMD 模块所有的 vite 配置

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
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, 'src/bundle.js'), // 打包的入口文件
      name: 'YokyulComponentUI',
      fileName: 'yokyul-component-ui',
      formats: ['umd']
    },
    rollupOptions: {
      // 不需要打包到组件库里的依赖。因为在下载该组件库时，会自动下载需要的依赖
      external: ['vue'],
      output: {
        exports: 'named', // 指定通过名称去拿到组件库代码，即 YokyulComponentUI
        // globals 对应的是上面 external 中的依赖，指定通过什么名字去全局引入这个依赖
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
