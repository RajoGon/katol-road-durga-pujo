# Katol Road Durga Pujo 2026

An installable, mobile-first festival guide for Sarbajanin Durgotsava 2026, organised by the Bengali Cultural Society, Katol Road, Nagpur.

## Run locally

The app has no runtime or build dependencies. Serve the project directory over HTTP:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Free deployment

Cloudflare Workers Static Assets can host the project as a purely static site. Connect the repository and use:

- Build command: leave empty
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

The included `wrangler.jsonc` supplies the Worker name, compatibility date and static asset directory. The root `.assetsignore` file prevents Cloudflare from uploading Git history, Android build files, source videos and the APK. Do not remove it when deploying the repository root. No backend, database, paid map API or video service is required. The optimized videos in `media/` are static assets and load only after a visitor presses Play.

## Updating a day video

1. Add the optimized MP4 to `media/`.
2. Add a WebP cover image to `assets/thumbnails/`.
3. Update the relevant `video` entry in `app.js` with its `src`, `poster`, and duration.

Original source videos are retained locally in the ignored source-assets folder. Root-level WhatsApp videos are duplicate source files and are also ignored. Only the smaller files in `media/` need to be deployed.

## Android APK

The `android/` project is a small native WebView shell. Its build automatically copies the current website, images, thumbnails and optimized MP4 files into the APK, so schedules and videos work without hosting. Maps, Instagram, WhatsApp and phone actions open in the appropriate Android app and require an internet or mobile connection.

Requirements:

- JDK 17
- Android SDK Platform 35 and Build Tools 35.0.0

Build an installable debug APK:

```sh
cd android
export JAVA_HOME=/path/to/jdk-17
export ANDROID_HOME=/path/to/android-sdk
./gradlew :app:assembleDebug
```

The output is `android/app/build/outputs/apk/debug/app-debug.apk`. Debug APKs are suitable for direct testing and sharing. A Play Store release should use a private, long-lived release signing key and an Android App Bundle.

## Main content files

- `app.js`: schedule, timings, video mapping and interface behaviour
- `styles.css`: mobile-first visual system
- `index.html`: page structure, venue, contacts and external links
- `sw.js`: offline caching for the app shell and schedules; videos are deliberately excluded
- `manifest.webmanifest`: installable PWA metadata
- `android/`: native Android wrapper and repeatable Gradle build
