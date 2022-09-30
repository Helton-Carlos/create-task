import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { useState, useEffect } from "react"

import { Menu } from "./layout/Menu";
import { Index } from './pages/Index';
import { Task } from "./pages/Task";
import { Customers } from './pages/Customers';
import { Income } from "./pages/Income";
import { Promote } from "./pages/Promote";

import { createServer } from "miragejs"
let server = createServer()
server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })

function App() {

  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
      })
  }, [])

  return (
    <div className="flex">
      <Router >
        <Menu />
        <div className="m-9 w-full">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Task" element={<Task />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/income" element={<Income />} />
            <Route path="/promote" element={<Promote />} />

            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App




