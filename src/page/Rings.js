import React from 'react'
import ReactDOM from 'react-dom/client'

//source
import Search from './Search'
import RingsSec from '../source/RingsSec'
import ringsData from './json/rings.json'

//css
import './css/all.css'
import './css/Rings.css'

function Rings(){
  return (
    <article>
    <h3 id="backR">
      <div>
        <span>Rings</span>
      </div>
    </h3>
    <section>
      <Search />
      <ul className='product'>
        {
          ringsData.map( item => (
            <RingsSec 
              key={item.id}
              appointmentR={item}
            />
          ))
        }
      </ul>
    </section>
</article>
  )
}

export default Rings