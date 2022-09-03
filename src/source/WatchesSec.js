import './css/all.css'

function WatchesSec({appointmentW}){
    return (
        <li key={appointmentW}>
            <figure>
                <img src={appointmentW.watchesImage} alt={appointmentW.watchesName} />
                <figcaption>
                    <p>{appointmentW.watchesName}</p>
                    <p>{appointmentW.watchesPrice}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default WatchesSec