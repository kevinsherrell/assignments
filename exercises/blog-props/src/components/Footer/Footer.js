import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footerContent">
                    {this.props.children}
                    {/* <span className="fa-stack">
                        <a href="#">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#">
                            <i className="fas fa-circle fa-stack-2x iconCircle"></i>
                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                        </a>
                    </span> */}
                    <p className="copyright">Copyright © Your Website 2019</p>
                </div>
            </footer>
        );
    }
}

export default Footer;