import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: `#F1C818`,
        },
        secondary: {
            main: `#0a0a0a`,
        },
        error: {
            main: red.A400,
        },
        background: {
            default: `#fff`,
        },
    },
});

export default theme;
