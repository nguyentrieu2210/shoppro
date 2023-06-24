import {Link} from "react-router-dom"
const Menu = ({ categories }) => {
    return (
        <nav>
            <div id="menu" className="collapse navbar-collapse">
                <ul>
                    {
                        categories.map((value) =>
                            <li className="menu-item"><Link to={`Category-${value._id}`}>{value.name}</Link></li>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}
export default Menu;