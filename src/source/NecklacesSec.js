import './css/all.css'

function NecklacesSec({appointmentN}){
    return (
        <li key={appointmentN.id}>
            <figure>
                <img src={appointmentN.necklacesImage} alt={appointmentN.necklacesName} />
                <figcaption>
                    <p>{appointmentN.necklacesName}</p>
                    <p>{appointmentN.necklacesPrice}</p>
                </figcaption>
            </figure>       
        </li>
    )
}

export default NecklacesSec