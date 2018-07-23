import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Profile} from '../models/form.model';

// Specifying const strings.
export const ADD_ROW = 'ADD_PROFILE_ROW';
export const DELETE_ROW = 'DELETE_PROFILE_ROW';
export const EDIT_ROW = 'EDIT_PROFILE_ROW';
export const LOAD_INITIAL_DATA = 'LOAD_INITIAL_DATA';

export class AddProfileRow implements Action {
  readonly type = ADD_ROW;
  constructor(public payload: Profile) {}
}

export class DeleteProfileRow implements Action {
  readonly type = DELETE_ROW;
  constructor(public payload: number) {}
}

export class EditProfileRow implements Action {
  readonly type = EDIT_ROW;
  constructor(public payload: Profile) {}
}

export class LoadProfileRow implements Action {
  readonly type = LOAD_INITIAL_DATA;
  constructor(public payload: Profile[]) {}
}

export type Actions = AddProfileRow | EditProfileRow | LoadProfileRow | DeleteProfileRow;
