import './css/all.css'

function WatchesSec({appointmentW}){
    return (
        <li key={appointmentW}>
            <figure>
                <img src={appointmentW.image} alt={appointmentW.name} />
                <figcaption>
                    <p>{appointmentW.name}</p>
                    <p>{appointmentW.price}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default WatchesSec