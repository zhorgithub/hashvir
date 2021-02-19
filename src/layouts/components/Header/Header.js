import React from 'react'
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'

const Header = () => {

    const handleSendEmail = () => {

        const templateParams = {
            content: "esim inch namak"
        }
        emailjs.send(
            'service_ggnk25g',
            'template_j1uurpq',
            { content: "esim inch namak" },
            'user_8Dt0iQFa52BMqbsYRVowX'
        )
    }

    return (
        <div className="container-fluid px-0 header-parent">
            <nav className="navbar navbar-expand-md navbar-light bg-white p-0"><Link className="navbar-brand mr-4" to='/'><img className="logo" src="img/Calculator.png" /></Link> <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"> <a className="nav-link" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Հաշվիչներ<span className="fa fa-angle-down"></span></a>
                            <div className="dropdown-menu" id="dropdown-menu1" aria-labelledby="navbarDropdown1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-car"></span> </div>
                                                <div className="d-flex flex-column"> <Link className="dropdown-item" to='cars'>
                                                    <h6 className="mb-0">Գույքահարկ</h6> <small className="text-muted">Տրանսպորտային</small>
                                                </Link> </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-home"></span> </div>
                                                <div className="d-flex flex-column"> <Link className="dropdown-item" to='realEstate'>
                                                    <h6 className="mb-0">Գույքահարկ</h6> <small className="text-muted">Անշարժ գույք</small>
                                                </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-ambulance"></span> </div>
                                                <div className="d-flex flex-column"> <Link className="dropdown-item" to='appa'>
                                                    <h6 className="mb-0">ԱՊՊԱ</h6> <small className="text-muted">--------</small>
                                                </Link></div>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-female"></span> </div>
                                                <div className="d-flex flex-column"> <Link className="dropdown-item" to='mbenefit'>
                                                    <h6 className="mb-0">Մայրության նպաստ</h6> <small className="text-muted">-----</small>
                                                </Link></div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-briefcase"></span> </div>
                                                <div className="d-flex flex-column">   <Link className="dropdown-item" to='salary'>
                                                    <h6 className="mb-0">Աշխատավարձ</h6> <small className="text-muted">-----</small></Link>

                                                </div>

                                            </div>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-tint"></span> </div>
                                                <div className="d-flex flex-column"> <Link className="dropdown-item" to='utilities'>
                                                    <h6 className="mb-0">Կոմունալներ</h6> <small className="text-muted">Գազ,Ջուր,Լույս...</small>
                                                </Link></div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <li className="nav-item"> <a className="nav-link" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources<span className="fa fa-angle-down"></span></a>
                            <div className="dropdown-menu" id="dropdown-menu2" aria-labelledby="navbarDropdown2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-folder"></span> </div>
                                                <div className="d-flex flex-column"> <a className="dropdown-item" href="#">
                                                    <h6 className="mb-0">WhitePaper</h6> <small className="text-muted">Marketing and report</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-question"></span> </div>
                                                <div className="d-flex flex-column"> <a className="dropdown-item" href="#">
                                                    <h6 className="mb-0">FAQs</h6> <small className="text-muted">Qs and answers</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-calculator"></span> </div>
                                                <div className="d-flex flex-column"> <a className="dropdown-item" href="#">
                                                    <h6 className="mb-0">Tools</h6> <small className="text-muted">All tools</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-paper-plane"></span> </div>
                                                <div className="d-flex flex-column"> <a className="dropdown-item" href="#">
                                                    <h6 className="mb-0">Success Stories</h6> <small className="text-muted">Experiences</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                        {/* <li className="nav-item"> <a className="nav-link" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customers<span className="fa fa-angle-down"></span></a>
                            <div className="dropdown-menu" id="dropdown-menu3" aria-labelledby="navbarDropdown3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-feed"></span> </div>
                                                <div className="d-flex flex-column"> <a className="dropdown-item" href="#">
                                                    <h6 className="mb-0">Feedback</h6> <small className="text-muted">Opinions, complaints</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="row d-flex tab">
                                                <div className="fa-icon text-center"> <span className="fa fa-question"></span> </div>
                                                <div className="d-flex flex-column"> <a className="dropdown-item" href="#">
                                                    <h6 className="mb-0">FAQs</h6> <small className="text-muted">Qs and answers</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                        <li className="nav-item"> <Link className="nav-link" to='about'>Մեր Մասին</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to='contact'>Կապ մեր հետ</Link></li>
                    </ul>
                    <div className="nav-item dropright hashvich-right">
                        <input type='text' className="yoid" placeholder="Ի՞նչ նոր հաշվիչ կուզեք տեսնել" name="massage-me" />
                        <button type="button" className="btn calc-btn" onClick={handleSendEmail} >Ուղարկել</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default React.memo(Header)