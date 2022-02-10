import { defineConfig } from "vite";
import { ViteFaviconsPlugin } from "vite-plugin-favicon";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFaviconsPlugin({
      logo: "about.png", // svg works too!
      favicons: {
        // path: "./src/",
        appName: "Digital Village Hackathon",
        appDescription:
          "Digital Village Hackathon is a national level initiative for students to compete in solving pressing problems in the domain of precision agriculture, under the project “Digital Village: A Data-Driven Approach to Precision Agriculture in Small Farms",
        developerName: "dsc",
        developerURL: null, // prevent retrieving from the nearest package.json
      },
    }),
  ],
});
