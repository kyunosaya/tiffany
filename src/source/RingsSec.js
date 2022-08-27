import data from './data.json'

function RingsSec(){
    return (
        <ul>
            {
                data.map((item) => {
                    return (
                        <li key={item.id}>
                            <figure>
                                {item.image}
                                <figcaption>
                                    <p>{item.name}</p>
                                    <p>{item.image}</p>
                                </figcaption>
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RingsSec