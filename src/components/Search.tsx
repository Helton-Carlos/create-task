import { useState } from "react"

function Search() {

  const [input, setInput] = useState<string>("")

  return (
    <div>
      <div className="border border-indico-200 rounded">
        <input
          type="text"
          className="block w-[216px] px-3 py-1 text-indico-700 bg-white border rounded-md focus:border-indico-400 focus:ring-indico-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          value={ input }
          onChange={ (event) => setInput(event.target.value)}
        />
      </div>
    </div>
  )
}

export default Search
