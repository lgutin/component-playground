import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import svgrEsbuild from "esbuild-plugin-svgr";

export default defineConfig({
  base: "/component-playground/",
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        svgrEsbuild({
          svgoConfig: {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
        }),
      ],
    },
  },
});
