import Index from "./pages/Index"
import Menu from "./layout/Menu"

function App() {
  return (
    <div className="flex">
      <Menu />
      <div className="m-9 w-full">
        <Index />
      </div>
    </div>
  )
}

export default App
