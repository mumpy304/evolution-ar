# Evolution AR (Computer example) -> Android APK

Scan an image with your phone camera and a timeline of the product's evolution
(ENIAC -> IBM PC -> Mac -> laptops -> tablets -> AI PCs) appears over it.

## Get the APK (no Android Studio needed)

GitHub builds the APK for you, free.

1. **Make `targets.mind`** (the file that lets the app recognise your image):
   - Open https://hiukim.github.io/mind-ar-js-doc/tools/compile
   - Upload `scan-me-computer.png` (or your own image), click **Start**, then **Download compiled**.
   - Save the file as `www/targets.mind`.
   - Tip: use detailed, high-contrast images (posters, packaging). Flat logos track badly.
2. **Create a free GitHub repo**, upload this whole folder to it (keep `.github/workflows` and the `www` folder).
3. Go to the repo's **Actions** tab -> **Build APK** -> wait ~5 minutes for the green tick
   (you can also press **Run workflow**).
4. Open the finished run -> **Artifacts** -> download `evolution-ar-apk` (a zip containing `app-debug.apk`).
5. Send `app-debug.apk` to your phone and install it (allow "Install unknown apps" when asked).
   Open the app, allow the camera, tap **Start AR**, and point it at the image (show `scan-me-computer.png` on your laptop screen).

The file is a debug APK, which is fine for personal use and demos. A Play Store release needs signing.

## Change the content
Edit `www/products.js` (products, years, titles, descriptions, emoji). Push the change and GitHub rebuilds the APK.
For more products, compile all images together in the compiler tool, in the same order as `targetIndex`.

## Test in a browser first (optional)
```
npm install
npm run prep
npm run serve        # open the printed http://localhost URL
```
"Preview without camera" shows the interface without needing `targets.mind`.
