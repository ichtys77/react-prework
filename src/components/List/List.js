import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js'

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        imageSrc: PropTypes.string.isRequired,
        children: PropTypes.node,
    }
    static defaultProps = {
        children: <p>Mogę wszystko, ale czy mi się chce??</p>,
    }
    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} imageSrc={this.props.imageSrc}/>
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column columnTitle={'Zakupy'}/>
                    <Column columnTitle={'Nauka'}/>
                    <Column columnTitle={'Łork'}/>
                </div>
            </section>
        )
    }
}

export default List;
