import data from './json/earrings.json'
import './css/all.css'

function EarringsSec(){
    return (
        <ul className='product'>
            {
                data.map((item,index) => {
                    return (
                        <li key={index}>
                            <figure>
                                <img src={item.earringsImage} alt={item.earringsName} />
                                <figcaption>
                                    <p>{item.earringsName}</p>
                                    <p>{item.earringsPrice}</p>
                                </figcaption>
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default EarringsSec