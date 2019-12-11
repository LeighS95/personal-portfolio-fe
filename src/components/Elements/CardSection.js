import React from 'react';
import Card from '../Utils/Card';
import styles from './CardSection.module.scss';

const CardSection = props => {

    const content = props.content[0]
    const { section, image, title, text, projectUrl, gitUrl } = content;

    return (
        <React.Fragment>
            <h2 className={styles.Section__Title}>{section}</h2>
            <div className={styles.CardSection__wrapper}>
                {props.content.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            image={image}
                            title={title}
                            text={text}
                            projectUrl={projectUrl}
                            gitUrl={gitUrl}
                        />
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default CardSection;