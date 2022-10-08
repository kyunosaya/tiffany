import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState,useEffect,useCallback} from 'react'

//source
import Search from './Search'
import WatchesSec from '../source/WatchesSec'
import WatchesData from './json/watches.json'

//css
import './css/all.css'
import './css/Watches.css'

function Watches(){

  //state 설정
  let [appointmentList,setAppointmentList] = useState([])
  // sort(metal)
  let [sortBy,setSortBy] = useState('')

  // checkbox
  let [sortAscBy,setSortAscBy] = useState('name')

  //callback
  const fetchData = useCallback( () => {
    fetch('./json/watches.json')
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
    <h3 id="backW">
      <div>
        <span>Watches</span>
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
            <WatchesSec 
              key={item.id}
              appointmentW={item}
            />
          ))
        }
      </ul>
    </section>
</article>
  )
}

export default Watches