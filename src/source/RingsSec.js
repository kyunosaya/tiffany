import data from './json/rings.json'
import './css/all.css'

function RingsSec(){
    return (
        <ul className='product'>
            {
                data.map((item,index) => {
                    return (
                        <li key={index}>
                            <figure>
                            <img src={item.ringsImage} alt={item.ringsName} />
                                <figcaption>
                                    <p>{item.ringsName}</p>
                                    <p>{item.ringsPrice}</p>
                                </figcaption>
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RingsSec