import React from 'react'
import ReactDOM from 'react-dom/client'
import './all.css'
import './Home.css'

function Home({appointment,id,name}){
  return (
    <article>
    <h2>
      <div></div>
    </h2>
    <section>
      <h2>Wave Bracelet</h2>
      <section>
        <div className="text">
          <p>Every story has a beginning. Discover how Tiffany Co. began in 1837 and grew into a global design house at the forefront of innovative jewelry design and expert craftsmanship.</p>
          <p>Journey through the milestones that established Tiffany as an international icon of legendary style, bold artistry and innovative design.</p>
        </div>
        <div className="image">
          <img src="./img/earring/earrings01.png" alt="제품01" />
        </div>
      </section>
    </section>
</article>
  )
}

export default Home