import React from 'react'
import ReactDOM from 'react-dom/client'

//source
import Search from './Search'
import NecklacesSec from '../source/NecklacesSec'
import NecklacesData from './json/necklaces.json'

//css
import './css/all.css'
import './css/Necklaces.css'

function Necklaces(){
  return (
    <article>
    <h3 id="backN">
      <div>
        <span>Necklaces</span>
      </div>
    </h3>
    <section>
      <Search />
      <ul className='product'>
        {
          NecklacesData.map( item => (
            <NecklacesSec 
              key={item.id}
              appointmentN={item}

            />
          ))
        }
      </ul>
    </section>
</article>
  )
}

export default Necklaces