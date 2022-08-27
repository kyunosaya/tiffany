import React from 'react'
import ReactDOM from 'react-dom/client'
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
      <figure>
        <img src="../../img/earring/earrings01.png" alt="상품1" />
        <figcaption>제품1</figcaption>
      </figure>
      <figure>
        <img src="../../img/earring/earrings02.png" alt="상품2" />
        <figcaption>제품2</figcaption>
      </figure>
      <figure>
        <img src="../../img/earring/earrings03.png" alt="상품3" />
        <figcaption>제품3</figcaption>
      </figure>
      <figure>
        <img src="../../img/earring/earrings04.png" alt="상품4" />
        <figcaption>제품4</figcaption>
      </figure>
    </section>
</article>
  )
}

export default Earrings