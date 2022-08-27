import React from 'react'
import ReactDOM from 'react-dom/client'
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
      <figure>
        <img src="../../img/watches/whatches01.png" alt="상품1" />
        <figcaption>제품1</figcaption>
      </figure>
      <figure>
        <img src="../../img/watches/whatches02.png" alt="상품2" />
        <figcaption>제품2</figcaption>
      </figure>
      <figure>
        <img src="../../img/watches/whatches03.png" alt="상품3" />
        <figcaption>제품3</figcaption>
      </figure>
      <figure>
        <img src="../../img/watches/whatches04.png" alt="상품4" />
        <figcaption>제품4</figcaption>
      </figure>
    </section>
</article>
  )
}

export default Watches