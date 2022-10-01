import './css/all.css'

function NecklacesSec({appointmentN}){
    return (
        <li key={appointmentN.id}>
            <figure>
                <img src={appointmentN.image} alt={appointmentN.name} />
                <figcaption>
                    <p>{appointmentN.name}</p>
                    <p>{appointmentN.price}</p>
                </figcaption>
            </figure>       
        </li>
    )
}

export default NecklacesSec