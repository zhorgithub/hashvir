import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar(props) {
    const { children } = props;
    return (
        <ul className="list-unstyled components">
            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <Link to='cars'>Cars</Link>
                    </li>
                    <li>
                        <Link to='salary'>Աշխատավարձ</Link>
                    </li>
                    <li>
                        <Link to='appa'>Ապպա</Link>
                    </li>
                    <li>
                        <Link to='realEstate'>Գույքահարկ</Link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>

    )

}

export default Sidebar