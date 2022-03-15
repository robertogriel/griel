import React from 'react';

const Footer = () => {
    return (
        <>
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
            <b>Version</b> 3.1.0
            </div>
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        </footer>
            <script src="./assets/admin-lte/plugins/jquery/jquery.min.js"></script>

            <script src="./assets/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="./assets/admin-lte/dist/js/adminlte.min.js"></script>
        </>
    );
}

export default Footer;