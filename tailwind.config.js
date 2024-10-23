/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.html"],
  theme: {
    extend: {
      screens: {
        xxs: "390px",
        xs: "414px",
        xsm: "475px",
        sm: "640px",
        smd: "690px",
        md: "768px",
        mdl: "960px",
        lg: "1024px",
        "2lg": "1112px",
        xl: "1280px",
        "xl-2xl": "1336px",
        "3xl": "1860px",
        "4xl": "2250px",
      },
      fontFamily: {
        display: "Vulf",
        sans: [
          "InterVar",
          {
            fontFeatureSettings: '"cv11", "ss01"',
          },
        ],
      },
      colors: {
        "rocky-top": "#ff8200",
        green: "#1C5F4A",
        soil: {
          50: "#f9f6f5",
          100: "#f4eceb",
          200: "#e9e0de",
          300: "#d8d4d1",
          400: "#b8a8a1",
          500: "#8a756e",
          600: "#725e56",
          700: "#5b4740",
          800: "#46332d",
          900: "#2e221e",
          950: "#1f1512",
        },

        lawn: {
          50: "#e5ecea",
          100: "#c2d3c9",
          200: "#9fbba8",
          300: "#7ca287",
          400: "#598966",
          500: "#3a7050",
          600: "#2f5a44",
          700: "#234437",
          800: "#1a4131",
          900: "#122e23",
          950: "#0d2219",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.soil.700"),
            a: {
              color: theme("colors.lawn.500"),
              "&:hover": {
                color: theme("colors.lawn.600"),
              },
              "&:visited": {
                color: theme("colors.lawn.700"),
              },
            },
            strong: {
              color: theme("colors.soil.800"),
            },
            h1: {
              color: theme("colors.soil.800"),
            },
            h2: {
              color: theme("colors.soil.800"),
            },
            h3: {
              color: theme("colors.soil.800"),
            },
            h4: {
              color: theme("colors.soil.800"),
            },
            blockquote: {
              color: theme("colors.soil.600"),
              borderLeftColor: theme("colors.soil.300"),
            },
            code: {
              color: theme("colors.soil.800"),
            },
            "a code": {
              color: theme("colors.lawn.500"),
            },
            pre: {
              color: theme("colors.soil.200"),
              backgroundColor: theme("colors.soil.800"),
            },
            thead: {
              color: theme("colors.soil.900"),
              borderBottomColor: theme("colors.soil.300"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.soil.200"),
              },
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.soil.200"),
            a: {
              color: theme("colors.lawn.300"),
              "&:hover": {
                color: theme("colors.lawn.200"),
              },
              "&:visited": {
                color: theme("colors.lawn.400"),
              },
            },
            strong: {
              color: theme("colors.soil.100"),
            },
            "a > strong": {
              color: theme("colors.lawn.300"),
              "&:hover": {
                color: theme("colors.lawn.200"),
              },
              "&:visited": {
                color: theme("colors.lawn.400"),
              },
            },
            h1: {
              color: theme("colors.soil.100"),
            },
            h2: {
              color: theme("colors.soil.100"),
            },
            h3: {
              color: theme("colors.soil.100"),
            },
            h4: {
              color: theme("colors.soil.100"),
            },
            blockquote: {
              color: theme("colors.soil.300"),
              borderLeftColor: theme("colors.soil.600"),
            },
            code: {
              color: theme("colors.soil.100"),
            },
            "a code": {
              color: theme("colors.lawn.300"),
            },
            pre: {
              color: theme("colors.soil.900"),
              backgroundColor: theme("colors.soil.200"),
            },
            thead: {
              color: theme("colors.soil.50"),
              borderBottomColor: theme("colors.soil.600"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.soil.800"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
