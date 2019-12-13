import React from 'react';
import styles from './minihero.module.scss';
import Overlay from './Overlay';

const MiniHero = props => {

    return (
        <div className={styles.Minihero__Container}>
            <div className={styles.Minihero__Img} style={{ backgroundImage: `url(${props.image})`}}>
            </div>
            <div className={styles.Minihero__Content}>
                <h1 className={styles.Minihero__Content_Title}>{props.title}</h1>
                <p className={styles.Minihero__Content_Text}>{props.text}</p>
            </div>
        </div>
    )
}

export default MiniHero;