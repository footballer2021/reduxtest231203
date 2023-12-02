import { useEffect } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './redux/store';
import { decrease, increase } from './redux/counterSlice';
import { getUsers } from './redux/usersSlice';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>(); 

const App:React.FC = () => {
  const count = useAppSelector((state) => state.counter.count);
  const { users, loading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers())
  },[dispatch]);

  return (
    <>
      <h1>Hello World!</h1>
      <h3>Count:{count}</h3>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
      <h2>Users</h2>
      { loading && <p>...Loading</p>}
      { error && <p>データ取得に失敗しました</p>}
      {users && users.map((user:any, index:number) => <div key={index}>{user.name}</div>)}
    </>
  );
}

export default App;