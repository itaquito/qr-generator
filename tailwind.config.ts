import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo['600'],
        background: colors.slate['50'],
        border: colors.indigo['300'],
      },
    },
  },
  plugins: [],
};
export default config;
