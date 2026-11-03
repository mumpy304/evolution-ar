// Copies A-Frame and MindAR into www/libs so the app works fully offline inside the APK.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const libs = path.join(root, "www", "libs");
fs.mkdirSync(libs, { recursive: true });

const files = [
  ["node_modules/aframe/dist/aframe.min.js", "aframe.min.js"],
  ["node_modules/mind-ar/dist/mindar-image-aframe.prod.js", "mindar-image-aframe.prod.js"],
];

for (const [src, dest] of files) {
  const from = path.join(root, src);
  if (!fs.existsSync(from)) {
    console.error("Missing " + src + " - run `npm install` first.");
    process.exit(1);
  }
  fs.copyFileSync(from, path.join(libs, dest));
  console.log("copied", dest);
}

if (!fs.existsSync(path.join(root, "www", "targets.mind"))) {
  console.warn("\nWARNING: www/targets.mind not found. The app will build, but AR scanning needs it (see README step 1).");
}
