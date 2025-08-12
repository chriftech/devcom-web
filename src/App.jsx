import React from 'react'
import Items from "./components/todo/Items";
import { UserAuth } from "./context/AuthContext";
import './index.css';

function App() {
  const { session } = UserAuth()
  return (
    <div>
        <Items />
    </div>
  );
}

export default App;
