import './App.css'
import items from './items.ts'
import Accordion from './components/Accordion.tsx';

function App() {

  return (
    <>
      <h1>Accordion</h1>
      {!items || items.length === 0 ?
        <div>No items available</div> :
        <Accordion items={items} />
      }
    </>
  )
}

export default App
