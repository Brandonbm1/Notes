import AppRoutes from "./components/AppRoutes"
import Navbar from "./components/Navbar.jsx"
import {AppContextProvider} from "./context/AppContext"
import './styles/css/styles.css'
function App() {

  return (
    <AppContextProvider>
      <main className="App dark">
        <header className="App-header">
          <Navbar />
        </header>
        <section className="container">
          <AppRoutes />
        </section>
      </main>
    </AppContextProvider>
  )
}

export default App
