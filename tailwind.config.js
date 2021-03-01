
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
            'xxl': '10rem'
        },
        screens: {
            'xs': '320px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    }
    // darkMode: false,
    // // theme: {
    // //     colors: {},
    // //     extend: {},
    // // },
    // variants: {
    //     extend: {},
    // },
    // plugins: [],
}

