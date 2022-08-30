
import { Routes } from "./Routes"
import Menu from "./layout/Menu"

function App() {
  return (
    <div className="flex">
      <Menu />
      <div className="m-9 w-full">
      <Routes />
      </div>
    </div>
  )
}

export default App
