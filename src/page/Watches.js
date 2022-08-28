import React from 'react'
import ReactDOM from 'react-dom/client'

//source
import WatchesSec from '../source/WatchesSec'

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
      <WatchesSec />
    </section>
</article>
  )
}

export default Watches