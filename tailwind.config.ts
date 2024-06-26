import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        lemonMilk: ['var(--font-lemonMilk)'],
      },
      colors: {
        cream: {
          2: '#E6D9CA',
        },
        pink: {
          4: '#E4C0AF',
        },
        brown: {
          1: '#4E372B',
          2: '#B25036',
        },
        typo: {
          white: '#F9F9FA',
        },
        green: {
          1: '#6A7048',
        },
        orange: {
          1: '#D5994C',
        },

        minHeight: {
          '900': '972px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
