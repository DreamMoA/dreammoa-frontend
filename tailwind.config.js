/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //src 모든파일에 tailwind 적용해줌줌
  ],
  darkMode: 'class',  // 다크모드 활성화 방식
  theme: {
    extend: {
      colors: {
        'my-blue': {
          1: '#003458',
          2: '#3F628A',
          3: '#DBF2FF',
          4: '#88A9D5',
        },
        'hmy-blue': {
          1: '#002B48',
          2: '#304B6A',
          3: '#B9CFDA',
          4: '#728EB3',
        },
        'my-yellow': '#F9F871',
        'hmy-yellow': '#E0DF65',
        'my-red' : '#EB3223',
        'hmy-red' : '#C62A1D',
      }
    },
  },
  plugins: [],
}