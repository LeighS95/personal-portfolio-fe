import React from 'react';
import styles from './card.module.scss';

const Card = props => {
    const {image, title, text, projectUrl, gitUrl} = props;

    return (
        <div className={styles.Card}>
            <div className={styles.Card__Img}>
                <img src={image} alt={title}/>
            </div>
            <div className={styles.Card__Content}>
                <h3 className={styles.Card__Content_Title}>{title}</h3>
                <p className={styles.Card__Content_Text}>{text}</p>
                <div className={styles.Buttons}>
                    <a href={projectUrl}>View Project</a>
                    <a href={gitUrl}>View Github</a>
                </div>
            </div>
        </div>
    )
}

export default Card;