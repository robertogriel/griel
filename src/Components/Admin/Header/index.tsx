import React from "react";
import { Helmet } from "react-helmet";

const Header = (props: any) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props.title}Griel Developer</title>

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />

                <link rel="stylesheet" href="./assets/admin-lte/plugins/fontawesome-free/css/all.min.css" />

                <link rel="stylesheet" href="./assets/admin-lte/dist/css/adminlte.min.css" />
            </Helmet>
        </>
    );
}

export default Header;