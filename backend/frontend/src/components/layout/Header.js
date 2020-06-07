import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-light bg-light" style={{color: 'blue'}}>
                    <a className="navbar-brand" href="#">
                            Parser XML
                    </a>
                </nav>
        );
    }
}

export default Header;