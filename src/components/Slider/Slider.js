import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


const Slider = () => {
    return (
        <Carousel>
            <div>
                <div className="herder-img">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="header-img-text">
                                    Բոլոր ֆինանսական հաշվիչները մեկ հարթակում
                    </h1>
                                <p className="header-img-p">Մեր հարթակում գտնվող բազմաթիվ 
                                հաշվիչների օգնությամբ կարող էք հաշվել Ձեր
                                 նախընտրած բանկացած հաշիվը առանց բանկ կամ հաշվապահական
                                  ծառայության դիմելու։</p>
                                <div className="header-img-button">
                                 <Link className="btn calc-btn" to='calcpage'>Հաշվիչների</Link>
                                </div>
                            </div>
                            <div className="col-md-5 slider">
                                <img src="img/slider1.png" className="calc-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="herder-img">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="header-img-text">
                                    ԱՊՊԱ հաշվիչ
                    </h1>
                                <p className="header-img-p">ԱՊՊԱ ապահովագրավճարների հաշվարկը իրականացվում է 2016թ. սեպտեմբերի 1-ից ԱՊՊԱ ոլորտում իրականացված փոփոխությունները հաշվի առնելով` համաձայն ՀՀ Ավտոապահովագրողների բյուրոյի թիվ RL 1-001 “ԱՊՊԱ հիմնարար պայմանները” կանոնի:</p>
                                <div className="header-img-button">
                                      <Link className="btn calc-btn appa-button" to='appa'>ԱՊՊԱ Հաշվիչ</Link>
                                </div>
                            </div>
                            <div className="col-md-5 slider">
                                <img src="img/slider2.png" className="calc-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="herder-img">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="header-img-text">
                                    Աշխատավարձի հաշվիչ
                    </h1>
                                <p className="header-img-p">Այս հաշվիչը հնարավորություն է տալիս թե' աշխատողներին, թե' հաշվապահներին հաշվարկային աշխատավարձի մուտքագրման դեպքում ստանալ ճշգրիտ տեղեկատվություն առձեռն աշխատավարձի մեծության վերաբերյալ և հակառակը: </p>
                                <div className="header-img-button">
                                   <Link className="btn calc-btn appa-button" to='salary'>Աշխատավարձի Հաշվիչ</Link>
                                </div>
                            </div>
                            <div className="col-md-5 slider">
                                <img src="img/slider3.png" className="calc-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )


}

export default Slider