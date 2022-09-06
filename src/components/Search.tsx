function Search() {
  return (
    <div className="flex items-center">
      <div className="flex border border-indico-200 rounded">
        <input
          type="text"
          className="block w-[216px] px-3 py-1 text-indico-700 bg-white border rounded-md focus:border-indico-400 focus:ring-indico-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
      </div>
    </div>
  )
}

export default Search
