import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      threshold: 2000, // 设置只有超过 2k 的文件才执行压缩
      deleteOriginalAssets: false, // 设置是否删除原文件
      skipIfLargerOrEqual: true, // 如果压缩后的文件大小与原文件大小一致或者更大时，不进行压缩
    }),
  ],
  base: '/react-playground/',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
      },
    },
  },
})
