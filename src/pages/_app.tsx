import React from "react";
import PropTypes from "prop-types";
import "../styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@/components/theme";

function App({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector(`#jss-server-side`);
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Makerspace</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant,
                consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: PropTypes.object.isRequired,
};

export default App;
