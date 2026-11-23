import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 部署在子路径 /WHEN-I-with-U/ 下；Netlify 部署在域名根路径 /。
// Netlify 构建时会自动设置环境变量 NETLIFY=true，据此切换 base，
// 否则在 Netlify 上所有 JS/CSS 都会请求 /WHEN-I-with-U/assets/... 而 404，
// 页面会一直停在 index.html 里内联的启动占位界面。
const base = process.env.NETLIFY === 'true' ? '/' : '/WHEN-I-with-U/';

export default defineConfig({
  base,

  plugins: [react()],

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
