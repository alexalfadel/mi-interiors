/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        '103': '1.03',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#FAF9F6',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#DCDCDC',
          400: '#C4C4C4',
          500: '#9B9B9B',
          600: '#7A7A7A',
          700: '#5A5A5A',
          800: '#3A3A3A',
          900: '#1A1A1A',
        },
        green: {
          50: '#F0F4F1',
          100: '#E1E9E3',
          200: '#C3D3C7',
          300: '#A5BDAB',
          400: '#8B9D83',
          500: '#6B7D63',
          600: '#5A6B52',
          700: '#4A5A42',
          800: '#3A4832',
          900: '#2A3622',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};