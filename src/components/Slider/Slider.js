import React from 'react'


const Slider = () => {


    return (
        <div className="herder-img">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="header-img-text">
                            Բոլոր ֆինանսական հաշվիչները մեկ հարթակում
		        </h1>
                        <p className="header-img-p">Մեր հարթակում գտնվող բազմաթիվ հաշվիչների օգնությամբ կարող էք հաշվել Ձեր նախընտրած բանկացած հաշիվը առանց բանկ կամ հաշվապահական ծառայության դիմելու։</p>
                        <div className="header-img-button">
                            <button type="button" className="btn calc-btn">Հաշվել</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="img-back">
                        </div>
                        <img src="img/Artboard.png" className="calc-img" />
                    </div>
                </div>
            </div>
        </div>

    )


}

export default Slider