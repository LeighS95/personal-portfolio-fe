import React from 'react';
import styles from './hero.module.scss';
import Overlay from './Overlay';
import SocialLinksBlock from './SocialLinksBlock';

const Hero = () => {
    return (
        <div className={styles.Hero__Container}>
            <div className={styles.Hero__Img}><Overlay /></div>
            <div className={styles.Hero__Content}>
                <h1 className={styles.Hero__Content_Title}>Stephen Leigh</h1>
                <p className={styles.Hero__Content_Text}>Web Developer / software Developer</p>
                <SocialLinksBlock size="3x" />
            </div>
        </div>
    )
}

export default Hero;