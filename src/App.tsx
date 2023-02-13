import ContextProvider from "./context"
import Routes from "./routes"


function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}

export default App
