import React from 'react'
import ReactDOM from 'react-dom/client'
import './Search.css'

function Search(){
    return (
      <section id="search">

        <div className="check">
          <p><input type="checkbox" /> 가격순</p>
          <p><input type="checkbox"/> 최신순</p>
        </div>

        <div className="choice">
          <button>
            메탈별로 보기 {/* <>아이콘</> */}
          </button>
          <ul>
            <li>Gold</li>
            <li>Silver</li>
            <li>Rose Gold</li>
            <li>Platinum</li>
            <li>The rest</li>
          </ul>
        </div>

        <div className="text">
          <input type="text" placeholder='이름을 입력하세요.'/>
        </div>

      </section>
    )
  }

  export default Search