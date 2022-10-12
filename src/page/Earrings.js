import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState,useEffect,useCallback} from 'react'

//source
import Search from './Search'
import EarringsSec from '../source/EarringsSec'
import EarringsData from './json/earrings.json'

//css
import './css/all.css'
import './css/Earrings.css'

function Earrings(){

  //state 설정
  let [appointmentList,setAppointmentList] = useState([])
  // sort(metal)
  let [sortBy,setSortBy] = useState('')

  // checkbox
  let [sortAscBy,setSortAscBy] = useState('name')

  //callback
  const fetchData = useCallback( () => {
    fetch('./json/earrings.json')
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
    <h3 id="backE">
      <section>
      <div>
        <span>Earrings</span>
        <p>Adding glitter to your ears is a great help to add a luxurious atmosphere. Many celebrities wear colorful earrings. It will make your beautiful face shine. If fancy earrings are burdensome, wear simple earrings. Tiffany & Co., Ltd. has various designs of earrings. If you wear different earrings depending on the mood you want, your dignity will look higher.</p>
      </div>
      </section>
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
            <EarringsSec 
              key={item.id}
              appointmentE={item}
            />
          ))
        }
      </ul>
    </section>
</article>
  )
}

export default Earrings