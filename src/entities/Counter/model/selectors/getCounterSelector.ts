import { StateSchema } from 'app/providers/StoreProvider'

export const getCounterSelector = (state: StateSchema) => state.counter ?? null
