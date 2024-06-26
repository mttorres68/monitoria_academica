const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgsegundario: "url('/cool-background.png')",
        galaxy: "url('/background-galaxy.png')",
        rodape: "url('/rodape.png')",
      },
    },
    corePlugins: {
      preflight: true,
    },
  },
  plugins: [require("flowbite/plugin")],
});
