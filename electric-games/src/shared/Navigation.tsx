import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <header>
    <ul className='myList'>
        <li className='routingListItem'><Link to={"/"}  style={{ textDecoration: 'none', color: '#000000'}}>Show All</Link></li>
        <li className='routingListItem'><Link to={"search"} style={{ textDecoration: 'none', color: '#000000' }}>Search</Link></li>
        <li className='routingListItem'><Link to={"addGame"}  style={{ textDecoration: 'none', color: '#000000' }}>Add Game</Link></li>
        <li className='routingListItem'><Link to={"deleteGame"}  style={{ textDecoration: 'none', color: '#000000' }}>Delete </Link></li>
        <li className='routingListItem'><Link to={"updateGame"}  style={{ textDecoration: 'none', color: '#000000'}}>Update</Link></li>
        <li className='routingListItem'><Link to={"quiz"}  style={{ textDecoration: 'none', color: '#000000' }}>Quiz</Link></li>
    </ul>
        </header>
    )
}

export default Navigation;