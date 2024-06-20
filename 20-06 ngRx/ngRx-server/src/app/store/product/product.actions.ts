import { createAction, props } from '@ngrx/store';
import { Products } from '../../models/products.model';

export const add = createAction('[Products] Add', props<{ product: Products }>());

export const remove = createAction(
  '[Products] Remove',
  props<{ id: number }>()
);

export const clear = createAction('[Products] Clear');


export const clearAll = createAction('[Products] ClearAll');
