import { type Config } from "tailwindcss";

import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'midnight-green': 'rgb(1,78,86)',
        'light-coral': 'rgb(246,126,126)',
        'rapture-blue': 'rgb(121,200,199)',
        'police-blue': 'rgb(44,98,105)',
        'deep-jungle-green': 'rgb(0,64,71)',
        'sacramento-state-green': 'rgb(1,47,52)',
        'dark-green': 'rgb(0,37,41)'
      },
      // fontFamily: {
      //   sans: ['var(--font-livvic)', ...fontFamily.sans],
      // }
    },
  },
  plugins: [],
} satisfies Config;
