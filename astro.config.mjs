import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import lottie from "astro-integration-lottie";

const SERVER_PORT = 4321;
const LOCALHOST_URL = 'http://localhost:${SERVER_PORT}';
const LIVE_URL = "https://randomphenomena.github.io"
const SCRIPT = process.env.npm_lifecycle.scrpt || "";

const isBuild = SCRIPT.includes("astro build");

let BASE_URL = LOCALHOST_URL;
if (isBuild){
  BASE_URL = LIVE_URL
}  
// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT},
  site: BASE_URL,
  integrations: [
    tailwind(),
    react(),
    lottie(),]
});