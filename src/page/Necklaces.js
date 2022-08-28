import React from 'react'
import ReactDOM from 'react-dom/client'

//source
import NecklacesSec from '../source/NecklacesSec'

//css
import './all.css'
import './Necklaces.css'

function Necklaces(){
  return (
    <article>
    <h3 id="backN">
      <div>
        <span>Necklaces</span>
      </div>
    </h3>
    <section>
      <NecklacesSec />
    </section>
</article>
  )
}

export default Necklaces