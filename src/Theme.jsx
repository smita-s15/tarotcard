import { createTheme } from "@mui/material/styles";
import './index.css'

const defaultTheme = createTheme({
    palette: {
        background: {
            default: "#2D1022"
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
        fontFamily: "BohemianSoul, monteserat",
    }
});


const theme = {
    ...defaultTheme,
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontStyle: "normal",
                    fontFamily: 'Bohemian Soul',
                    fontWeight: 600,
                    fontSize: "38px",
                    lineHeight: "53.2px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: "20px", lineHeight: "30px"
                    },
                },
                h2: {
                    fontFamily: 'Bohemian Soul',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "43px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: '25px', lineHeight: '30px'
                    }
                },
                h3: {
                    fontFamily: 'montserrat',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "22px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: '20px', lineHeight: '25px'
                    }
                },
                h5: {
                    fontFamily: 'montserrat',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: "15px",lineHeight: '20px'
                    },
                },
                h6: {
                    fontFamily: 'montserrat',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: "13px",lineHeight: "20px",
                    },
                },
            },
        },
    },

};

export default theme;
