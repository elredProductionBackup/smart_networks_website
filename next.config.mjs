import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // A parent directory also has a lockfile; pin the tracing root to this project
  // so Next.js doesn't infer the wrong workspace root.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
