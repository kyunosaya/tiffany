import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState,useEffect,useCallback} from 'react'

// source
import './css/Search.css'
import { AiOutlineDown,AiOutlineCheck } from "react-icons/ai";
import WatchesData from './json/watches.json'

function DropDown({toggleSort,onSortByChange,sortBy}){
  if(!toggleSort){
    return null
  }
  return (
    <ul>
      <li onClick={ () => {onSortByChange('gold')} }>
        Gold {(sortBy === 'gold') && <AiOutlineCheck />}
      </li>
      <li onClick={ () => {onSortByChange('rosegold')} }>
        Rose Gold {(sortBy === 'rosegold') && <AiOutlineCheck />}
      </li>
      <li onClick={ () => {onSortByChange('silver')} }>
        Silver {(sortBy === 'silver') && <AiOutlineCheck />}
      </li>
      <li onClick={ () => {onSortByChange('platinum')} }>
        Platinum {(sortBy === 'platinum') && <AiOutlineCheck />}
      </li>
      <li onClick={ () => {onSortByChange('rest')} }>
        Rest {(sortBy === 'rest') && <AiOutlineCheck />}
      </li>

      {/* <li>name <AiOutlineCheck /></li>
      <li>price <AiOutlineCheck /></li>
      <li>date <AiOutlineCheck /></li>
      <li>asc <AiOutlineCheck /></li>
      <li>desc <AiOutlineCheck /></li> */}
    </ul>
  )
}

function Search({query,onQueryChange,sortBy,onSortByChange,sortAscBy,onSortAscByChange,onOrderAscByChange}){

  let [toggleSort,setToggleSort] = useState(false)

  // 중복체크안되게설정
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('check')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
  }

    return (
      <section id="search">

        <div className="check">
          <p>
            <input 
              type="checkbox"
              name="check"
              onClick={
                () => {
                  onSortAscByChange('name')
                }                
              }
              onChange={(e) => checkOnlyOne(e.target)}
              
            /> 
            이름순
          </p>
          <p>
            <input 
              type="checkbox"
              name="check"
              onClick={
                () => {
                  onOrderAscByChange('price')
                }                
              }
              onChange={(e) => checkOnlyOne(e.target)}
            /> 
            가격순
          </p>
          <p>
            <input 
              type="checkbox"
              name="check"
              onClick={
                () => {
                  onOrderAscByChange('date')
                }                
              }
              onChange={(e) => checkOnlyOne(e.target)}
            /> 
            최신순
          </p>
        </div>

        <div className="choice">
          <button
            onClick = {
              () => { setToggleSort(!toggleSort) }
            }
          >
            메탈별로 보기 <AiOutlineDown />
          </button>
          <DropDown 
            toggleSort = {toggleSort}
            sortBy = {sortBy}
            onSortByChange = {mySort => onSortByChange(mySort)}
            sortAscBy={sortAscBy}
          />
        </div>

        <div className="text">
          <input 
            type="text" 
            placeholder='이름을 입력하세요.'
            value={query}
            onChange={
              (event) => {
                onQueryChange(event.target.value)
              }
            }
          />
        </div>

      </section>
    )
  }

  export default Search