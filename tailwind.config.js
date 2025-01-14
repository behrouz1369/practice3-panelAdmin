/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily:{
                roboto : 'Roboto'
            },
            colors:{
                orange:{
                    '450':'#fd9400',
                    '550':'#d57e04',
                    '850':'#fe5722',
                },
                blue:{
                    '450':'#1e96f2',
                    '550':'#108eef'
                }
            }
        },
    },
    plugins: [],
}
