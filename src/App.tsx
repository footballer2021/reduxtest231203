import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './redux/store';
import { decrease, increase } from './redux/counterSlice';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>(); 

const App:React.FC = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>Hello World!</h1>
      <h3>Count:{count}</h3>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
    </>
  );
}

export default App;