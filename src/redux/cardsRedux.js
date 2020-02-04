import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({ cards, searchString }, columnId) => cards.filter(card =>
  card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
//export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });
//console.log({createActionAddCard});

//export const createAction_moveCard = payload => ({ payload, type: MOVE_CARD });
//console.log({createAction_moveCard});

// reducer
export default function reducer(state = [], /* statePart = [], */ action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    /* case MOVE_CARD: {
      const { id, src, dest } = action.payload;
      const targetCard = statePart.filter(card => card.id == id)[0];
      const targetColumnCards = statePart.filter(card => card.columnId == dest.columnId).sort((a, b) => a.index - b.index);

      if (dest.columnId == src.columnId) {
        targetColumnCards.splice(src.index, 1);
        targetColumnCards.splice(dest.index, 0, targetCard);
        console.log(targetColumnCards.map(card => `${card.index}, title: ${card.title}`));
      } else {
        return statePart;
      }
    }
      break; */
    default:
      return state;
  }
}