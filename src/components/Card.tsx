type TCard = {
  title: string,
  subtitle: string
}

function Card(props: TCard) {
  return (
    <div className="bg-white w-full shadow border-b-2">
      <h1>{ props.title }</h1>
      <p>{ props.subtitle }</p>
    </div>
  )
}

export default Card
