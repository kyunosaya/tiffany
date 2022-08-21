import React from 'react'
import ReactDOM from 'react-dom/client'

function Sec02(){
  return (
    <article id="sec02">
    <h3 className="sec02Top">
      <div>
        <span>Whatever Shining style</span>
      </div>
    </h3>
    <section className="sec02">
      <figure>
        <img src="./img/main/box01-01.png" alt="상품1" />
        <figcaption>제품1</figcaption>
      </figure>
      <figure>
        <img src="./img/main/box01-02.png" alt="상품2" />
        <figcaption>제품2</figcaption>
      </figure>
      <figure>
        <img src="./img/main/box01-03.png" alt="상품3" />
        <figcaption>제품3</figcaption>
      </figure>
      <figure>
        <img src="./img/main/box01-04.png" alt="상품4" />
        <figcaption>제품4</figcaption>
      </figure>
    </section>
</article>
  )
}

export default Sec02