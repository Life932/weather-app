/** @type {import('tailwindcss').Config} */
export default {
  // The 'content' array is the most important part.
  // It tells Tailwind to look at your main HTML file and all
  // JavaScript/JSX files within your 'src' folder.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // The 'theme' object is where you would customize your design system,
  // like adding custom colors, fonts, or breakpoints.
  // For now, we are just extending the default theme.
}