import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { esbuildCommonjs, viteCommonjs } from "@originjs/vite-plugin-commonjs";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "../wwwroot/dist");
console.log("outdir = ", outDir);

// https://vitejs.dev/config/
export default defineConfig({
  root,
  resolve: {
    alias: {
      "@": root,
    },
  },
  plugins: [react(), viteCommonjs()],
  // resolve: {
  //   alias: {
  //     "devextreme/ui": "devextreme/esm/ui",
  //     "@": fileURLToPath(new URL("./src", import.meta.url)),
  //   },
  // },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["./dx.bundle.js"])],
    },
  },
  build: {
    outDir,
    manifest: true,
    emptyOutDir: true,
    rollupOptions: {
      input: [
        "src/pages/ReactCounter/index.jsx",
        "src/pages/ReactNote/index.jsx",
        "src/pages/ImageAnalysis/index.jsx",
        "src/pages/WorkflowManager/index.jsx",
        // "src/dx.bundle.js",
        "src/site.js",
        "src/index.js",
      ],
      // external: [
      //   "globalize",
      //   "globalize/number",
      //   "globalize/currency",
      //   "globalize/date",
      //   "globalize/message",
      //   "devextreme-quill",
      //   "turndown",
      //   "devextreme-showdown",
      //   "exceljs",
      //   "jspdf",
      //   "devexpress-diagram",
      //   "devexpress-gantt",
      //   "luxon",
      // ],
      // output: {
      //   globals: {
      //     // jquery: "window.jQuery",
      //     jszip: "window.JSZip",
      //     knockout: "window.ko",
      //     angular: "window.angular",
      //     globalize: "window.Globalize",
      //     "globalize/number": "window.Globalize",
      //     "globalize/currency": "window.Globalize",
      //     "globalize/date": "window.Globalize",
      //     "globalize/message": "window.Globalize",
      //     "devextreme-quill": "window.DevExpress.Quill",
      //     turndown: "window.TurndownService",
      //     "devextreme-showdown": "window.showdown",
      //     exceljs: "window.ExcelJS",
      //     jspdf: "window.jspdf.jsPDF",
      //     "devexpress-diagram": "window.DevExpress.diagram",
      //     "devexpress-gantt": "window.DevExpress.Gantt",
      //     luxon: "window.luxon",
      //   },
      // },
    },
    minify: false,
  },
  server: {
    port: 3000,
    strictPort: true,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:5000",
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
});
