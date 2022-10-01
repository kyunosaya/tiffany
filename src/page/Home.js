import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/all.css'
import './css/Home.css'

function Home({appointment,id,name}){
  return (
    <article>
      <div className='box'>
        <h2>Tiffany&amp; Co.</h2>
      </div>

    <section>
      <h2>The World of Tiffany</h2>
      <section>
        <div className="text">
          <p>Every story has a beginning. Discover how Tiffany &amp; Co. began in 1837 and grew into a global design house at the forefront of innovative jewelry design and expert craftsmanship.</p>
          <p>Charles Lewis Tiffany’s passion for acquiring rare and unusual gemstones paved the way for Tiffany &amp; Co.’s longstanding legacy of discovery and exploration, establishing the company’s reputation as a world-renowned jeweler.</p>
        </div>
        <div className="image">
          <img src="./img/tiffanygift.png" alt="제품01" />
        </div>
      </section>
    </section>
</article>
  )
}

export default Home