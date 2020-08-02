import React from 'react'
import Slider from '../../components/Slider/Slider'


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
                                <div className="calc-icon"><i className="fa fa-tree" aria-hidden="true"></i></div>
                                <p className="calc-icon-text">Աշխատավարձի հաշվիչ</p>
                            </div>
                        </div>
                        <div className="col col2">
                            <div className="icon-part-parent">
                                <div className="calc-icon"><i className="fa fa-tree" aria-hidden="true"></i></div>
                                <p className="calc-icon-text">Գույքահարկի հաշվիչ</p>
                            </div>
                        </div>
                        <div className="col col3">
                            <div className="icon-part-parent">
                                <div className="calc-icon"><i className="fa fa-tree" aria-hidden="true"></i></div>
                                <p className="calc-icon-text">ԱՊՊԱ</p>
                            </div>
                        </div>
                        <div className="col col4">
                            <div className="icon-part-parent">
                                <div className="calc-icon"><i className="fa fa-tree" aria-hidden="true"></i></div>
                                <p className="calc-icon-text">Ավանդային հաշվիչ</p>
                            </div>
                        </div>
                        <div className="col col5">
                            <div className="icon-part-parent">
                                <div className="calc-icon"><i className="fa fa-tree" aria-hidden="true"></i></div>
                                <p className="calc-icon-text">Վարկային</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid flex-calc">
                <button type="button" className="btn calc-btn all-calc">Տեսնել բոլոր հաշվիչները</button>
            </div>
        </>
    )
}




export default HomePage