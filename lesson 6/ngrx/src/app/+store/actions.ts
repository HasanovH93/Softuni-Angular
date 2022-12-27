import { createAction, props } from "@ngrx/store"

const actionTypes = {
    increment: 'INCREMENT',
    setValue: 'SET_VALUE'
}



export const increment = createAction(actionTypes.increment);
export const setValue = createAction(actionTypes.increment, props<{ counter: number }>());