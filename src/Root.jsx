import React from 'react'
import Items from "./components/todo/Items";
import { UserAuth } from "./context/AuthContext";
import './index.css';

function Root() {
  const { session } = UserAuth()
  return (
    <div>
        <Items />
    </div>
  );
}

export default Root;
