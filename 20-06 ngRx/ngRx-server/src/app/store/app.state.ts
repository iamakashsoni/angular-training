import { Products } from '../models/products.model';
import { Users } from '../models/users.model';

export interface AppState {
  user: Users[];
  product: Products[];
}

export const initialState: AppState = {
  user: [],
  product: [{ id: 1, name: 'ABC', price: 100, brand: 'DH' }],
};
