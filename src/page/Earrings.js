import React from 'react'
import ReactDOM from 'react-dom/client'

//source
import Search from './Search'
import EarringsSec from '../source/EarringsSec'
import earringsData from './json/earrings.json'

//css
import './css/all.css'
import './css/Earrings.css'


function Earrings(){
  return (
    <article>
    <h3 id="backE">
      <div>
        <span>Earrings</span>
      </div>
    </h3>
    <section>
      <Search />
      <ul className='product'>
        {
          earringsData.map( item => (
            <EarringsSec 
              key={item.id}
              appointmentE={item}
            
            />
          ))
        }
      </ul>
    </section>


</article>
  )
}

export default Earrings