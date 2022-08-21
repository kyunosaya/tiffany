import React from 'react';
import ReactDOM from 'react-dom/client';

// component
import Header from './component/Header'
import Sec01 from './component/Sec01'
import Sec02 from './component/Sec02'
import Sec03 from './component/Sec03'
import Footer from './component/Footer'

// source
import './index.css'
import appointment from './data.json'

function App(){
  return (
    <div id="wrap">
      <div id="headerWrap">
        <Header />
      </div>

      <main>
        <Sec01 
        appointment={appointment}
        id={appointment.id}
        name={appointment.name}
        />

        <Sec02 />

        <Sec03 />
      </main>

      <div id="footerwrap">
        <Footer />
      </div>




    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)