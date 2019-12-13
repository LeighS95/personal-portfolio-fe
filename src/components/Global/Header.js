import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import SocialLinksBlock from '../Elements/SocialLinksBlock';
import styles from './header.module.scss';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        }
    }

    toggleMenu = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        });
        console.log('hello')
    }

    render() {
        const { isOpen } = this.state;
        const { isMobile, isTablet } = this.props;
        return (
            <header className={styles.Header__Wrapper}>
                <div className={styles.Logo__Container}><a href="/" className={styles.Logo__Img}>Portfolio</a></div>
                <div className={styles.Menu__Icon} onClick={this.toggleMenu}>
                    <span className={cx(styles.Line1, {'Open__Menu_Icon': isOpen})}></span>
                    <span className={cx(styles.Line2, {'Open__Menu_Icon': isOpen})}></span>
                    <span className={cx(styles.Line3, {'Open__Menu_Icon': isOpen})}></span>
                </div>
                <nav className={cx(styles.Navbar, {'OPEN__NAV': isOpen})}>
                    <ul className={styles.Navbar__List}>
                        <li className={styles.Navbar__List_Item}>
                            <Link to="/" onClick={this.toggleMenu}>Home</Link>
                        </li>
                        <li className={styles.Navbar__List_Item}><Link to="/about" onClick={this.toggleMenu}>About Me</Link></li>
                        <li className={styles.Navbar__List_Item}>Projects</li>
                        <li className={styles.Navbar__List_Item}>
                            <Link to="/request-cv" onClick={this.toggleMenu}>CV</Link>
                        </li>
                        <li className={styles.Navbar__List_Item}>
                            <Link to="/contact" onClick={this.toggleMenu}>Contact</Link>
                        </li>
                    </ul>
                    {isTablet || isMobile ? (
                        <SocialLinksBlock size="2x" />
                    ) : null}
                </nav>
            </header>
        )
    }
}

export default Header;