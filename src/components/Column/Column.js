import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import { Droppable } from 'react-beautiful-dnd';

{/* class Column extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node.isRequired,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}><Icon name={icon} /></span>
        </h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        
        <div>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
          
      </section>
    );
  }

}*/}

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>{props.title}
      <span className={styles.icon}><Icon name={props.icon} /></span>
    </h3>
    <div>
      <Droppable droppableId={props.id}>
        {provided => (
          <div
            className={styles.cards}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
    <div>
      <Creator text={settings.cardCreatorText} action={props.addCard} />
    </div>
  </section>
);

Column.propTypes = {
  title: PropTypes.node.isRequired,
  cards: PropTypes.array,
  icon: PropTypes.node.isRequired,
  addCard: PropTypes.func,
  id: PropTypes.string,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
