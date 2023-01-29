import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import Home from './screen/Home'
import Login from "./screen/Login";
import Register from "./screen/Register";
import LandPage from './screen/LandPage'
import './App.css'

function App() {
    return (
        <Router>
            <Suspense fallback={false}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/land/:id' element={<LandPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
                <Footer />
            </Suspense>
        </Router>
    )
}

export default App
