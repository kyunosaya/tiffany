import data from './json/necklaces.json'
import './css/all.css'

function NecklacesSec(){
    return (
        <ul className='product'>
            {
                data.map((item,index) => {
                    return (
                        <li key={index}>
                            <figure>
                                <img src={item.necklacesImage} alt={item.necklacesName} />
                                <figcaption>
                                    <p>{item.necklacesName}</p>
                                    <p>{item.necklacesPrice}</p>
                                </figcaption>
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NecklacesSec