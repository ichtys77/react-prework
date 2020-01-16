import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>React 'apka'</h1>
        <h2 className={styles.subtitle}>Jedziemy z koksem</h2>
        <List title={['JEST ROBOTAAAA! ', <sup key='1'>już wkrótce!</sup>]}
          image={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}>
          <p>Pewnie się za nią wezmę jutro, pojutrze lub za rok!</p>
        </List>
      </main>
    )
  }
}

export default App;
