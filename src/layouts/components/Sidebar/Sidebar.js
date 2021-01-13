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
                <Link to='inspection'>Տեխզննում</Link>
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
                <Link to='exchange'>Փոխարժեք</Link>
            </li>
            <li>
                <Link to='mbenefit'>Մայրության նպաստ</Link>
            </li>
            <li>
                <Link to='vacation'>Արձակուրդային</Link>
            </li>
             <li>
                <Link to='carclearance'>Տրանսպորտային միջոցների մաքսազերծում</Link>
            </li>
            <li>
                <Link to='caraccountin'>Տրանսպորտային միջոցների հաշվառում</Link>
            </li> 
             <li>
                <Link to='utilities'>Կոմունալներ</Link>
            </li> 
        </ul>
    )

}

export default Sidebar