import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__Container}>
                <div className={styles.Footer__Col_left}>
                    <ul className={styles.Footer__Links}>
                        <li className={styles.Footer__List_Title}>Links</li>
                        <li className={styles.Footer__List_Item}>About Me</li>
                        <li className={styles.Footer__List_Item}>Projects</li>
                        <li className={styles.Footer__List_Item}>Skills</li>
                        <li className={styles.Footer__List_Item}>Request CV</li>
                    </ul>
                </div>
                <div className={styles.Footer__Col_Center}>
                    <ul className={styles.Footer__Links}>
                        <li className={styles.Footer__List_Title}>Social Links</li>
                        <li className={styles.Footer__List_Item}>GitHub</li>
                        <li className={styles.Footer__List_Item}>Codepen</li>
                        <li className={styles.Footer__List_Item}>Linkedin</li>
                    </ul>
                </div>
                <div className={styles.Footer__Col_Right}>
                    <ul className={styles.Footer__Links}>
                        <li className={styles.Footer__List_Title}>Contact</li>
                        <li className={styles.Footer__List_Item}>Send Message</li>
                        <li className={styles.Footer__List_Item}>Linkedin</li>
                    </ul>
                </div>
            </div>
            <div className={styles.Footer__copyright}>
                <p> Stephe Leigh &copy; 2019</p>
            </div>
        </div>
        
    )
}

export default Footer;