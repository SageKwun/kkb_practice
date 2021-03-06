import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "esm",
    },
    {
      file: "dist/bundle.min.js",
      format: "esm",
      name: "version",
      plugins: [terser()],
    },
  ],
  plugins: [json()],
};
