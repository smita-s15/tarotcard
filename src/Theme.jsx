import { createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";
import "@fontsource/inter"


const defaultTheme = createTheme({
    palette: {
        background: {
            default: "#400040"
        },
        primary: {
            main: "#000000",
            dark: "#000000",
        },
        secondary: {
            main: "#FED5C3",
            light: "#B4C9CE",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1920,
        },
    },
    typography: {
        fontFamily:"Bohemias Soul",
    },
});


const theme = {
    ...defaultTheme,
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "38px",
                    lineHeight: "53.2px",
                    fontFamily: 'Bohemian Soul', 
                }, 
                h2: {
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "40px",
                    lineHeight: "35px",
                    fontFamily: 'montesrrat', 
                }, 
                h5: {
                    fontFamily: 'monteserrat', 
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: "28.8px",
                }, 
                h6: {
                    fontFamily: 'monteserrat', 
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "26px",
                }, 
            },
        },
    },

};

export default theme;
