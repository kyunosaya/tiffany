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
  let [sortBy,setSortBy] = useState('gold')

  // checkbox
  let [sortAscBy,setSortAscBy] = useState('')
  let [orderAscBy,setOrderAscBy] = useState('')

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
          item.metal === sortBy
        )
      }
    ).sort( (a,b) => {
      if(a[sortAscBy] > b[sortAscBy]){
        return 1;
      }
      else if(a[sortAscBy] < b[sortAscBy]){
        return -1;
      }
      return 0;
    }).sort( (a,b) => {
      if(a[orderAscBy] > b[orderAscBy]){
        return -1;
      }
      else if(a[orderAscBy] < b[orderAscBy]){
        return 1;
      }
      return 0;
    } )

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
        onOrderAscByChange={myorder => setOrderAscBy(myorder)}
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