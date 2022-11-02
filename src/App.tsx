import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Menu } from "./layout/Menu";
import { Index } from './pages/Index';
import { Task } from "./pages/Task";
import { Customers } from './pages/Customers';
import { Income } from "./pages/Income";
import { Promote } from "./pages/Promote";
import { Login } from "./pages/Login"

function App() {
  return (
    <div className="flex">
      <Router >
        <Menu />
        <div className="m-9 w-full">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/task" element={<Task />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/income" element={<Income />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App




