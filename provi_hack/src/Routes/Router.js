import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroEngajador from '../CadastroEngajador/CadastroEngajador';
import CadastroPage from '../CadastroPage/CadastroPage';
import HomePage from '../HomePage/Home';
import Login from '../Login';


const Router = () => {
    return(
        <BrowserRouter>
        {/* Páginas dos ROUTERS. */}
            <Routes>
                <Route path = "/" element={<HomePage />}/>
                <Route path = "/cadastro" element={<CadastroPage />}/>
                <Route path = "/cadastro-engajador" element={<CadastroEngajador />}/>
                <Route path = "/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Router;