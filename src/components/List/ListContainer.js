import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList } from '../../../src/redux/columnsRedux';
import { createActionAddColumn } from '../../../src/redux/columnsRedux';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);