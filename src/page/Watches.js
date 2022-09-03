import React from 'react'
import ReactDOM from 'react-dom/client'

//source
import Search from './Search'
import WatchesSec from '../source/WatchesSec'
import WatchesData from './json/watches.json'

//css
import './all.css'
import './Watches.css'

function Watches(){
  return (
    <article>
    <h3 id="backW">
      <div>
        <span>Watches</span>
      </div>
    </h3>
    <section>
      <Search />
      <ul className='product'>
        {
          WatchesData.map( item => (
            <WatchesSec 
              key={item.id}
              appointmentW={item}
            />
          ))
        }
      </ul>
    </section>
</article>
  )
}

export default Watches