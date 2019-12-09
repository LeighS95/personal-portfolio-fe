import React, { Component } from 'react';
import cx from 'classnames';
import styles from './header.module.scss';
import { lookupService } from 'dns';

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
        return (
            <header className={styles.Header__Wrapper}>
                <div className={styles.Menu__Icon} onClick={this.toggleMenu}>
                    <span className={cx(styles.Line1, {'Open__Menu': isOpen})}></span>
                    <span className={cx(styles.Line2, {'Open__Menu': isOpen})}></span>
                    <span className={cx(styles.Line3, {'Open__Menu': isOpen})}></span>
                </div>
                <div className={styles.Logo__Container}><a href="/" className={styles.Logo__Img}>Portfolio</a></div>
                {isOpen ? (
                    <nav className={styles.Navbar}>
                        <ul className={styles.Navbar__List}>
                            <li className={styles.Navbar__List_Item}>About Me</li>
                            <li className={styles.Navbar__List_Item}>Projects</li>
                            <li className={styles.Navbar__List_Item}>Skills</li>
                            <li className={styles.Navbar__List_Item}>Request CV</li>
                            <li className={styles.Navbar__List_Item}>Contact</li>
                        </ul>
                    </nav>
                ): null}
                
            </header>
        )
    }
}

export default Header;