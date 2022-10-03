import Search from "../components/Search"
import Card from "../components/Card"
import { useState, useEffect } from 'react'
import axios from "axios";

export function Index() {
  const [name, setName] = useState<string>('Talita')

  useEffect(() => {
    axios.get("/api/reminders").then((response) => {
      console.log
        (response.data);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-bold text-2xl">Hello {name} 👋🏼,</h1>
        <Search />
      </div>

      <Card title='name' subtitle='name2' />
    </div>
  )
}

