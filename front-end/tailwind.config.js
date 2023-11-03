/** @type {import('tailwindcss').Config} */
// eslint-disable max-classes-per-file

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            primary: '#65b597',
            ...colors,
        },
        borderWidth: {
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
        },
        maxWidth: {
            primary: '1200px',
        },
    },
    plugins: [
        plugin(function ({ addBase, addUtilities, theme }) {
            addBase({});
            addUtilities({
                '.flex-center': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                '.margin-center': {
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                },
            });
        }),
    ],
};
