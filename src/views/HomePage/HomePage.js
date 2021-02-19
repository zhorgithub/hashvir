import React from 'react'
import AppaPage from '../CalcPage/AppaPage'
import CarsPage from '../CalcPage/CarsPage'
import RealEstatePage from '../CalcPage/RealEstatePage'
import SalaryPage from '../CalcPage/SalaryPage'
import { Link } from 'react-router-dom'


const HomePage = () => {

    return (
        <>
            <div className="container-fluid">
                <h3 className="center-teg">Մեր հաշվիչները</h3>
            </div>
            <div className="icon-part">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col1">
                            <div className="icon-part-parent">
                                <div className="calc-icon"><i className="fa fa-suitcase" aria-hidden="true"></i></div>
                                <p className="calc-icon-text"><Link to='/salary'>Աշխատավարձի հաշվիչ</Link></p>
                            </div>
                        </div>
                        <div className="col col2">
                            <div className="icon-part-parent">
                                <div className="calc-icon"><i className="fa fa-home" aria-hidden="true"></i></div>
                                <p className="calc-icon-text"><Link to='realEstate'>Գույքահարկի հաշվիչ</Link></p>
                            </div>
                        </div>
                        <div className="col col3">
                            <div className="icon-part-parent">
                                <div className="calc-icon"><i className="fa fa-cab" aria-hidden="true"></i></div>
                                <p className="calc-icon-text"><Link to='appa'>ԱՊՊԱ</Link></p>
                            </div>
                        </div>
                       <div className="col col4">
                            <div className="icon-part-parent">
                                <div className="calc-icon"><i className="fa fa-car" aria-hidden="true"></i></div>
                                <p className="calc-icon-text"><Link to='inspection'>Տեխզննում</Link></p>
                            </div>
                        </div>
                        {/*  <div className="col col5">
                            <div className="icon-part-parent">
                                <div className="calc-icon"><i className="fa fa-tree" aria-hidden="true"></i></div>
                                <p className="calc-icon-text">Վարկային</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h3 className="center-text">Վերջին թարմացումներ</h3>
            </div>
            <div className="container-fluid flex-calc">
               <p className="container-fluid home-page-text">Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է: 
                    Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ,
                    ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է: 
                    Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ`
                    մնալով էապես անփոփոխ: Այն հայտնի է դարձել 1960-ականներին Lorem Ipsum բովանդակող Letraset էջերի թողարկման 
                    արդյունքում, իսկ ավելի ուշ համակարգչային տպագրության այնպիսի ծրագրերի թողարկման հետևանքով, ինչպիսին է Aldus PageMaker-ը,
                    որը ներառում է Lorem Ipsum-ի տարատեսակներ:Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության 
                    համար նախատեսված մոդելային տեքստ է: Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է 
                    տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր 
                    տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է: Այս տեքստը ոչ միայն կարողացել է գոյատևել 
                    հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ` մնալով էապես անփոփոխ: Այն հայտնի է դարձել 
                    960-ականներին Lorem Ipsum բովանդակող Letraset էջերի թողարկման արդյունքում, իսկ ավելի ուշ համակարգչային 
                    տպագրության այնպիսի ծրագրերի թողարկման հետևանքով, ինչպիսին է Aldus PageMaker-ը, որը ներառում 
                    է Lorem Ipsum-ի տարատեսակներ:</p>
            </div>

            <div className="container-fluid flex-calc">
                <Link className="btn calc-btn all-calc" to='/calcpage'>Տեսնել բոլոր հաշվիչները</Link>
            </div>

            {/* <SalaryPage />
            <hr />
            <CarsPage />
            <hr />
            <AppaPage />
            <hr />
            <RealEstatePage /> */}

        </>
    )
}




export default HomePage