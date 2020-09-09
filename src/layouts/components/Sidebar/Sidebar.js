import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar(props) {
    const { children } = props;
    return (
        <ul className="list-unstyled components">
            <li>
            <Link to='salary'>Աշխատավարձ</Link>
            </li>
            <li>
                <Link to='realEstate'>Գույքահարկ</Link>
            </li>
            <li>
                <Link to='cars'>Տրանսպորտային միջոցների գույքահարկ</Link>
            </li>

            <li>
                <Link to='appa'>Ապպա</Link>
            </li>
            <li>
                <a href="#">Տեխզննում</a>
            </li>
            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Վարկ</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Վարկ 1</a>
                    </li>
                    <li>
                        <a href="#">Վարկ 2</a>
                    </li>
                    <li>
                        <a href="#">Վարկ 3</a>
                    </li>
                </ul>
            </li> 
            <li className="active">
                <a href="#avandSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Ավանդ</a>
                <ul className="collapse list-unstyled" id="avandSubmenu">
                    <li>
                        <a href="#">Ավանդ 1</a>
                    </li>
                    <li>
                        <a href="#">Ավանդ 2</a>
                    </li>
                    <li>
                        <a href="#">Ավանդ 3</a>
                    </li>
                </ul>
            </li> 
            <li>
                <a href="#">Փոխարժեք</a>
            </li>
            <li>
                <a href="#">Մայրության նպաստ</a>
            </li>
            <li>
                <a href="#">Արձակուրդային</a>
            </li>
            <li>
                <a href="#">Տրանսպորտային միջոցների մաքսազերծում </a>
            </li>
            <li>
                <a href="#">Տրանսպորտային միջոցների հաշվառում</a>
            </li>
            <li>
                <a href="#">Կոմունալներ</a>
            </li>
        </ul>
    )

}

export default Sidebar