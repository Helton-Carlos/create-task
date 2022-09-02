
import { AppRoutes } from "./Routes"
import Menu from "./layout/Menu"

function App() {
  return (
    <div className="flex">
      <Menu />
      <div className="m-9 w-full">
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
