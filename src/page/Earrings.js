import React from 'react'
import ReactDOM from 'react-dom/client'

//source
import EarringsSec from '../source/EarringsSec'

//css
import './all.css'
import './Earrings.css'


function Earrings(){
  return (
    <article>
    <h3 id="backE">
      <div>
        <span>Earrings</span>
      </div>
    </h3>
    <section>
      <EarringsSec />
    </section>


</article>
  )
}

export default Earrings