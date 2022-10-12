import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState,useEffect,useCallback} from 'react'

//source
import Search from './Search'
import NecklacesSec from '../source/NecklacesSec'
import NecklacesData from './json/necklaces.json'

//css
import './css/all.css'
import './css/Necklaces.css'

function Necklaces(){

  //state 설정
  let [appointmentList,setAppointmentList] = useState([])
  // sort(metal)
  let [sortBy,setSortBy] = useState('')

  // checkbox
  let [sortAscBy,setSortAscBy] = useState('name')

  //callback
  const fetchData = useCallback( () => {
    fetch('./json/necklaces.json')
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
    <h3 id="backN">
      <section>
      <div>
        <span>Necklaces</span>
        <p>Didn't you feel something was missing? Didn't you want to give an accent to the look you're wearing? Then, please give us a point with our necklaces. It will fill your empty throat with deficiencies. Double your glamour by wearing a beautiful dress and a fancy necklace. Or you can wear casual clothes and a simple necklace. Choose according to your preference! Accessories in our design are enough to make you more beautiful.</p>
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
            <NecklacesSec 
              key={item.id}
              appointmentN={item}
            />
          ))
        }
      </ul>
    </section>
</article>
  )
}

export default Necklaces