import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Favorite from "./pages/Favorite"
import Provider from "./context/Provider"
import Release from "./pages/Release"
import Noticias from "./pages/Noticias"
import './index.css';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorito" element={<Favorite />} />
        <Route path="/release" element={<Release />} />
        <Route path="/noticia" element={<Noticias />} />
      </Routes>
    </Provider>
  )
}

export default App
