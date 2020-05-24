import {createAction, props} from '@ngrx/store';

export type validFilters = 'todos'|'completed'|'pending';

export const setFilter = createAction(
  '[filter] Set filter',
  props<{ filter:validFilters }>()
);





