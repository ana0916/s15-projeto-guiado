
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'

import { Inicio } from './pages/Inicio'
import { Portfolio } from './pages/Portfolio'
import { Contato } from './pages/Contato'
import { Sobre } from './pages/Sobre'

export function ApplicationRoutes (){
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/contato" element={<Contato />} />
        </Routes>
        </BrowserRouter>
    )
}