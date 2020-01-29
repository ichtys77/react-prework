import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

{/*class Card extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
  }
  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h4>{title}</h4>
      </section>
    );
  }
}*/}

const Card = props => (
  <Draggable draggableId={props.id} index={props.index}>
    {(provided) => (
      <section className={styles.component}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <h4>{props.title}</h4>
      </section>
    )}
  </Draggable>
);

Card.propTypes = {
  title: PropTypes.node.isRequired,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;