import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Index } from './pages/Index'
import { Product } from "./pages/Product"

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  )
}




