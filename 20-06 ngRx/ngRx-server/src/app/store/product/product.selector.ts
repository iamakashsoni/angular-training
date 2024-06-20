import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectProductState = createFeatureSelector<AppState>('product');

export const productState = createSelector(
  selectProductState,
  (state: AppState) => state.product
);
