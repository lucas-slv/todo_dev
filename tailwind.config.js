/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#ffeaa7',
                secundary: '#fab1a0',
            },

            boxShadow: {
                section: '0 1.5px 3px rgba(0, 0, 0, 0.25)',
                input: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)',
            },
        },
    },
    plugins: [],
};
