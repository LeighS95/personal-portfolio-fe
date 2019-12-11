import React from 'react';
import Card from '../Utils/Card';
import styles from './CardSection.module.scss';

const CardSection = props => {

    const content = props.content;

    return (
        <React.Fragment>
            {console.log(content)}
            <h2 className={styles.Section__Title}>{content.section}</h2>
            <div className={styles.CardSection__wrapper}>
                {content.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            image={card.image}
                            title={card.title}
                            text={card.text}
                            projectUrl={card.projectUrl}
                            gitUrl={card.gitUrl}
                        />
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default CardSection;