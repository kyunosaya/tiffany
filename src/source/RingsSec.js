import './css/all.css'

function RingsSec({appointmentR}){
    return (
        <li key={appointmentR.id}>
            <figure>
                <img src={appointmentR.image} alt={appointmentR.name} />
                <figcaption>
                    <p>{appointmentR.name}</p>
                    <p>{appointmentR.price}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default RingsSec