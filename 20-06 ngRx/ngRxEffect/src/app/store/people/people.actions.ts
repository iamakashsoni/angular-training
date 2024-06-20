import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Person] load');

export const loadDataSuccess = createAction(
  '[Person] loadSuccess',
  props<{ payload: any }>()
);
export const loadDataFailure = createAction(
  '[Person] loadFailed',
  props<{ payload: any }>()
);

export const addData = createAction('[Person] add', props<{ payload: any }>());
export const addDataSuccess = createAction(
  '[Person] addSuccess',
  props<{ payload: any }>()
);
export const addDataFailure = createAction(
  '[Person] addFailed',
  props<{ payload: any }>()
);
