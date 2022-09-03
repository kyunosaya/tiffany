import './css/all.css'

function RingsSec({appointmentR}){
    return (
        <li key={appointmentR.id}>
            <figure>
                <img src={appointmentR.ringsImage} alt={appointmentR.ringsName} />
                <figcaption>
                    <p>{appointmentR.ringsName}</p>
                    <p>{appointmentR.ringsPrice}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default RingsSec