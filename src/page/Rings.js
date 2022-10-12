import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState,useEffect,useCallback} from 'react'

//source
import Search from './Search'
import RingsSec from '../source/RingsSec'
import RingsData from './json/rings.json'

//css
import './css/all.css'
import './css/Rings.css'

function Rings(){

  //state 설정
  let [appointmentList,setAppointmentList] = useState([])
  // sort(metal)
  let [sortBy,setSortBy] = useState('')

  // checkbox
  let [sortAscBy,setSortAscBy] = useState('name')

  //callback
  const fetchData = useCallback( () => {
    fetch('./json/rings.json')
    .then( response => response.json())
    .then( data => setAppointmentList(data) )
  } , [] )

  //effect
  useEffect( () => {fetchData()} , [fetchData] )


      // namesearch
      let [query,setQuery] = useState('')
      const filterAppointment = appointmentList.filter(
        item => {
          return (
            item.name.toLowerCase().includes(query.toLowerCase()) && 
            item.metal.includes(sortBy)
          )
        }
      ).sort( (a,b) => {
        let sorter = (sortAscBy === 'name')? 1 : -1 ;
        return (
          a[sortAscBy] > b[sortAscBy] ? 1 * sorter : -1 * sorter
        )
      })

  return (
    <article>
    <h3 id="backR">
      <div>
        <span>Rings</span>
        <p>Do you want a beautiful ring? Then find Tiffany's luxurious ring. It can be a gift to your family, friends, and lovers, or it can be a gift to me. Adding beauty to a beautiful hand in itself would be a good choice. If you look for rings of various designs, I'm sure your eyes will be fun.</p>
      </div>
    </h3>
    <section>
      <Search 
        query={query}
        onQueryChange={ myQuery => setQuery(myQuery) }
        sortBy = {sortBy}
        onSortByChange = {mySort => setSortBy(mySort)}
        sortAscBy={sortAscBy}
        onSortAscByChange={mySort => setSortAscBy(mySort)}
      />
      <ul className="product">
        {
          filterAppointment.map( item => (
            <RingsSec 
              key={item.id}
              appointmentR={item}
            />
          ))
        }
      </ul>
    </section>
</article>
  )
}

export default Rings