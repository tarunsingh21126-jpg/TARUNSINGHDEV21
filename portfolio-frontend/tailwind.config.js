/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Background surfaces */
        bg: {
          primary: '#161617',
          surface: '#18181B',
          input:   '#1E1E24',
        },
        /* Borders */
        border: {
          DEFAULT: '#2A2A30',
          focus:   '#00A07A',
        },
        /* Text */
        text: {
          primary:     '#F9F7F3',
          secondary:   '#A0A0A5',
          placeholder: '#7A7A8A',
        },
        /* Accents */
        primary:   '#00A07A',
        secondary: '#C44547',

        /* Legacy aliases — keep existing components working */
        charcoal: {
          900: '#161617',
          800: '#18181B',
          700: '#2A2A30',
        },
        cream:  '#F9F7F3',
        muted:  '#A0A0A5',
      },

      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },

      borderRadius: {
        pill: '999px',
        card: '12px',
        btn:  '12px',
      },

      lineHeight: {
        display: '1.1',
        heading: '1.25',
        body:    '1.55',
      },

      letterSpacing: {
        display: '-0.03em',
        heading: '-0.02em',
        body:    '0em',
        wide:    '0.08em',
        widest:  '0.18em',
      },
    },
  },
  plugins: [],
}
