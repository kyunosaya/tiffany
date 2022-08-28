import data from './json/watches.json'
import './css/all.css'

function WatchesSec(){
    return (
        <ul className='product'>
            {
                data.map((item,index) => {
                    return (
                        <li key={index}>
                            <figure>
                                <img src={item.watchesImage} alt={item.watchesName} />
                                <figcaption>
                                    <p>{item.watchesName}</p>
                                    <p>{item.watchesPrice}</p>
                                </figcaption>
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default WatchesSec