
module.exports = {
    purge: ['./scr/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    future:{
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault:true
    },
    theme:{
        fontFamily: {
            'source': ['Source Serif Pro', 'serif'],
            'crimson': ['Crimson Text', 'serif'],
            'poppins': ['Poppins', 'sans-serif'],
            'ballet': ['Ballet', 'cursive'],
        },
        fontSize:{
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
            'xxl': '10rem'
        },
        screens: {
            'xs': '320px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
    },
    darkMode: false,
    // variants:{
    //     extend: {
    //     }
    // }
    // variants: {
    //     extend: {},
    // },
    // plugins: [],
}

