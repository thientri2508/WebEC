import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import HomePage from './pages/HomePages'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
