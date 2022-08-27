import React from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './component/App'
import Home from './page/Home'
import Earrings from './page/Earrings'
import Necklaces from './page/Necklaces'
import Rings from './page/Rings'
import Watches from './page/Watches'

function Main(){
    return (
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/page01" element={<Earrings />}></Route>
                    <Route path="/page02" element={<Necklaces />}></Route>
                    <Route path="/page03" element={<Rings />}></Route>
                    <Route path="/page04" element={<Watches />}></Route>
                </Routes>
            </App>
        </BrowserRouter>
    )
}

export default Main