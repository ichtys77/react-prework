import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

{/*class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,

  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} imageSrc={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
        
      </section>
    );
  }
}*/}

const List = props => (

  <section className={styles.component}>
    <Container>
      <Hero title={props.title} image={props.image} />
      <div className={styles.description}>
        {ReactHtmlParser(props.description)}
      </div>

      <div className={styles.columns}>
        {props.columns.map(columnData => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>

      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={props.addColumn} />
      </div>

    </Container>
  </section>
);

List.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;
