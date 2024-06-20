import { createReducer, on } from '@ngrx/store';
import { AppState, initialState } from '../app.state';
import { add, clear, clearAll, remove } from './product.actions';

export const productReducer = createReducer(
  initialState,
  //add
  on(add, (state: AppState, { product }: any) => {
    console.log('Add reducer called!', JSON.stringify(product));
    return {
      ...state,
      product: [...state.product, product],
    };
  }),

  //remove
  on(remove, (state: AppState, { id }: any) => ({
    ...state,
    product: state.product.filter((item) => item.id != id),
  })),

  //clear
  on(clear, (state: AppState) => ({
    ...state,
    product: [],
  })),

  // Clear All
  on(clearAll, (state) => initialState)
);
