import {connect} from 'react-redux';
import Column from './Column';
import { getCardsForColumn } from '../../../src/redux/cardsRedux';
import { createActionAddCard } from '../../../src/redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id, props.listId),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    listId: props.listId,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);