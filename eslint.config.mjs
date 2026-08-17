import { defineConfig, globalIgnores } from "eslint/config"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname })

export default defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
    ".contentlayer/**",
    ".vercel/**",
  ]),
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
])
