/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
            },
            colors: {
                primary: {
                    ...colors.red,
                    700: '#bf1922',
                    500: '#e32832',
                },
                secondary: {
                    300: '#FBDB6B',
                    500: '#FACF39',
                    700: '#F9C307',
                },
            },
            width: {
                300: "75rem",
            }
        },
    },
    plugins: [require('tailwindcss'), require('postcss')],
};
