import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        plugins: [
          [
            "@babel/plugin-transform-react-jsx",
            {
              runtime: "automatic",
              jsxFactory: "createElement",
            },
          ],
        ],
      },
    }),
  ],
});
