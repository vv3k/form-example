import {Action} from '@ngrx/store';
import {Profile} from '../models/form.model';
import * as formActions from '../actions/form.action';

const initialState: Profile = {};

export function reducer(state: Profile[] = [], action: formActions.Actions) {
  switch (action.type) {
    case formActions.ADD_ROW:
      const payload = action.payload;
      const len = state.length + 1;
      payload['id'] = len;
      payload['number'] = len;
      return [...state, payload];
    case formActions.LOAD_INITIAL_DATA:
      return [...state, ...action.payload];
    case formActions.DELETE_ROW:
      const arr = [...state];
      const id = arr.findIndex(ele => ele.id === action.payload);
      arr.splice(id, 1);
      return [...arr];
    case formActions.EDIT_ROW:
      const arr_ = [...state];
      // const ele_ = arr_.find(ele => ele.number === action.payload.number);
      const newarr = arr_.map(ele => {
        if (ele.number === action.payload.number) {
          return Object.assign({}, ele, action.payload);
        }
        return ele;
      });
      return [...newarr];
    default:
      return state;
  }
}
