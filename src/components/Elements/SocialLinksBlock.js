import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
import styles from './social.module.scss';

const SocialLinksBlock = props => {
    return (
        <div className={styles.SocialLinks}>
            <span><a href="##" target="_blank"><FontAwesomeIcon icon={faGithub} size={props.size} /></a></span>
            <span><a href="##" target="_blank"><FontAwesomeIcon icon={faLinkedin}  size={props.size} /></a></span>
            <span><a href="##" target="_blank"><FontAwesomeIcon icon={faCodepen}  size={props.size} /></a></span>
        </div>
    )
}

export default SocialLinksBlock;