import './css/Nav.css'
import {Link} from 'react-router-dom'

function Nav(){
    return (
        <nav>
            <h2 id="hide">메인 내비게이션</h2>
            <div>
                <ul>
                    <li>
                        <Link to="/page01">earrings</Link>
                    </li>
                    <li>
                        <Link to="/page02">necklaces</Link>
                    </li>
                    <li>
                        <Link to="/page03">rings</Link>
                    </li>
                    <li>
                        <Link to="/page04">watches</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav