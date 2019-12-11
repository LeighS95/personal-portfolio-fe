import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
import styles from './social.module.scss';

const SocialLinksBlock = props => {
    const { navbar } = props;
    return (
        <div className={cx(styles.SocialLinks, {[styles.Navbar__adjustment]: navbar})}>
            <span><a href="https://github.com/LeighS95" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size={props.size} /></a></span>
            <span><a href="https://www.linkedin.com/in/stephen-leigh-8a6519184/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}  size={props.size} /></a></span>
            <span><a href="##" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCodepen}  size={props.size} /></a></span>
        </div>
    )
}

export default SocialLinksBlock;