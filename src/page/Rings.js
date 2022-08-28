import React from 'react'
import ReactDOM from 'react-dom/client'

//source
import RingsSec from '../source/RingsSec'

//css
import './all.css'
import './Rings.css'

function Rings(){
  return (
    <article>
    <h3 id="backR">
      <div>
        <span>Rings</span>
      </div>
    </h3>
    <section>
      <RingsSec />
    </section>
</article>
  )
}

export default Rings