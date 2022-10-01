
import './css/all.css'

function EarringsSec({appointmentE}){
    return (
        <li>
            <figure>
                <img src={appointmentE.image} alt={appointmentE.name}/>
                <figcaption>
                    <p>{appointmentE.name}</p>
                    <p>{appointmentE.price}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default EarringsSec