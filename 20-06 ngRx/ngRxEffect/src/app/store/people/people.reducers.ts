import { createReducer, on } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  addData,
  addDataFailure,
  addDataSuccess,
  loadData,
  loadDataFailure,
  loadDataSuccess,
} from './people.actions';

export const initialState: AppState = {
  people: [],
};

export const peopleReducer = createReducer(
  initialState,
  on(loadData, (state) => {
    console.log('Load data reducer here');
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadDataSuccess, (state, { payload }) => {
    console.log('Load data success reducer here', payload);
    return {
      ...state,
      loading: false,
      people: payload,
    };
  }),
  on(loadDataFailure, (state, { payload }) => {
    console.log('Load data failure reducer here');
    return {
      ...state,
      loading: false,
      error: payload,
    };
  }),

  on(addData, (state, { payload }) => {
    console.log('add data reducer here');
    console.log(payload)
    return {
      ...state,
      loading: true,
      people: payload,
    };
  }),
  on(addDataSuccess, (state, { payload }) => {
    console.log('add data success reducer here', payload);
    return {
      ...state,
      loading: false,
      people: payload,
    };
  }),
  on(addDataFailure, (state, { payload }) => {
    console.log('add data failure reducer here');
    return {
      ...state,
      loading: false,
      error: payload,
    };
  })
);
