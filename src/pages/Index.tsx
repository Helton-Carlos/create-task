import Search from "../components/Search"
import Card from "../components/Card"
import { useState, useEffect } from 'react'
import axios from "axios";
import CardTask from "../components/CardTask";

export function Index() {
  const [name, setName] = useState<string>('Alberth')
  const [reminder, setReminder] = useState<string[]>([])

  useEffect(() => {
    axios.get("/api/cards").then((response) => {
      const { index } = response.data
      console.log(index)
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-bold text-2xl">Hello {name} 👋🏼,</h2>
        <Search />
      </div>

      <div className="flex flex-col gap-4 md:flex-wrap md:flex-row">
        <CardTask name='Alberth' func='Web Design' />
        <Card title="Alberth" subtitle="string" />
      </div>
    </div>
  )
}

