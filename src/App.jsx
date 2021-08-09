import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { UserContext } from './components/UserContext';


function App() {
  const [user, setUser] = useState(null);
  const ContextValue = {user,setUser}
  return (
    <UserContext.Provider value={ContextValue}>
      <div className="App">
        <h1>Codelicious TODO</h1>

        {user && <>
          <p>Welcome, {user.name} <a href="#" onClick={() => { setUser(null) }}>Log out</a></p>
          <hr/>
          <TodoList/>
        </>}
        {!user && <Login setUser={setUser} />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
