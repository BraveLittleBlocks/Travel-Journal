import './App.css'
import data from './data'
import Card from './components/Card'
function App() {
  
  const cards = data.map((item) =>{
    return <Card key={item.key} {...item} />
  })
  
  return (
    <div>
      <section>{cards}</section>
    </div>
  )
}

export default App
