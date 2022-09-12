
interface ButtonProps{
  title: string
}

function Button(props:ButtonProps){ //
  return(
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (<div>
    <Button title="send 1"></Button>
    <Button title="send 2"></Button>
    <Button title="send 3"></Button>
  </div>)
}

export default App
