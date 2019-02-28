import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footerContent">
                    {this.props.children}
                    <p className="copyright">Copyright © Your Website 2019</p>
                </div>
            </footer>
        );
    }
}

export default Footer;