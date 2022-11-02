import { useState } from "react"

type TInput = {
  label: string,
  type: string,
  name: string,
  placeholder: string
}

function Input(props: TInput) {
  const [input, setInput] = useState<string>("")

  return (
    <div className="my-2">
        <label htmlFor={ props.name }>{ props.label }</label>
        <input
          type={props.type}
          className="block w-[216px] px-3 py-1 text-indico-700 bg-white border rounded-md focus:border-indico-400 focus:ring-indico-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder={ props.placeholder }
          id={ props.name }
          onChange={ (event) => setInput(event.target.value)}
        />
    </div>
  )
}

export default Input
