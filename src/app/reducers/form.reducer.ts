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
    default:
      return state;
  }
}
