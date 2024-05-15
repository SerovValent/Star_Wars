import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-light bg-opacity-50 rounded-bottom-3">
            <div className={`d-inline-flex btn btn-danger border border-light rounded-pill align-items-center gap-2`}>

                <div>Send me an</div>
                <div className={`email fs-5`}>email</div>
            </div>
        </footer>
    );
};

export default Footer;