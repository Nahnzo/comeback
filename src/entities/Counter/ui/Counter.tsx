import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValueSelector } from '../model/selectors/getCounterValueSelector'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValueSelector)

  const decF = () => {
    dispatch(counterActions.decrement())
  }
  const incF = () => {
    dispatch(counterActions.increment())
  }

  return (
    <div>
      <h1>value: {counterValue}</h1>
      <button onClick={incF}>inc</button>
      <button onClick={decF}>dec</button>
    </div>
  )
}
