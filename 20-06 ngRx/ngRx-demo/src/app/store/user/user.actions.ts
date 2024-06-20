import { createAction, props } from '@ngrx/store';
import { Users } from '../../models/users.model';

export const add = createAction('[Users] Add', props<{ user: Users }>);

export const remove = createAction('[Users] Remove', props<{ id: number }>());

export const clear = createAction('[Users] Clear');
