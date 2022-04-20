import { createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";


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
        fontFamily:["Bohemias Soul", 'sans-serif'].join(',')
    },
});


const theme = {
    ...defaultTheme,
    components: {
        MuiTypography: {
            styleOverrides: {
                h2: {
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "38px",
                    lineHeight: "53.2px",
                    fontFamily: 'Bohemian Soul', 
                }, 
                h6: {
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26px",
                    fontFamily: 'monteserrat', 
                }, 
            },
        },
    },

};

export default theme;
