
import './css/all.css'

function EarringsSec({appointmentE}){
    return (
        <li>
            <figure>
                <img src={appointmentE.earringsImage} alt={appointmentE.earringsName}/>
                <figcaption>
                    <p>{appointmentE.earringsName}</p>
                    <p>{appointmentE.earringsPrice}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default EarringsSec