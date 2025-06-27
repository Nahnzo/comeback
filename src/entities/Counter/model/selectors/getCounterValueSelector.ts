import { createSelector } from '@reduxjs/toolkit'
import { getCounterSelector } from './getCounterSelector'

export const getCounterValueSelector = createSelector(getCounterSelector, (counter) => counter.value)
