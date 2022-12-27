import {createFeatureSelector, createSelector} from '@ngrx/store'
import { IMainState } from './index'

const mainSelector = createFeatureSelector<IMainState>('main')


export const getCounter = createSelector(mainSelector,s => s.counter)