import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Index } from './pages/Index';
import { Product } from "./pages/Product";

import { Menu } from "./layout/Menu";
function App() {
  return (
    <div className="flex">
      <Router >
        <Menu />
        <div className="m-9 w-full">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App




