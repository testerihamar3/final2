import {useDispatch, useSelector} from "react-redux";
import {decrementRedux, getUsersAsync, incrementRedux} from "./store/features/todoSlice";

function App() {
    const {
        todo: {count, loading, users},
    } = useSelector(state => state);
    const dispatch = useDispatch();

    const inc = () => {
        dispatch(incrementRedux(6));
    };
    const dec = () => {
        dispatch(decrementRedux(9));
    };

    const getUsers = () => {
        dispatch(getUsersAsync());
    };

    return (
        <div className="App">
            {loading && <h1>Loading ...</h1>}
            <button onClick={inc}>increment</button>
            <p>{count}</p>
            <span>{count}</span>
            <button onClick={dec}>decrement</button>
            <button onClick={getUsers}>get users ASYNC</button>
            {users.map(user => {
                return <h3>{user.email}</h3>;
            })}
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
