import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul className='flex justify-between'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/products'>Products</Link></li>
            </ul>
        </nav>
    )
}