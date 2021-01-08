import React, { useState } from 'react'


const AppaPage = () => {

    const [ZHG, setZHG] = useState('1')
    const [BM, setBM] = useState('1')
    const [transport, setTransport] = useState('1')
    const [busType, setBusType] = useState(false)
    const [goal, setGoal] = useState('1')
    const [engine, setEngine] = useState('0.8')
    const [price, setPrice] = useState()
    const HA = 33122


    console.log('transport ' + transport + ' goal ' + goal + ' engine ' + engine + ' BM ' + BM + ' ZHG ' + ZHG);


    const handleTransportChange = (e) => {

        const vl = e.target.value
        console.log(typeof (vl));

        if (vl == -1) {
            setBusType(true)
            setTransport(1.44)
            return
        } else {
            setBusType(false)
            setTransport(vl)
        }


    }

    const handleSubmit = () => {
        console.log(typeof (transport));
        switch (transport) {

            case "1":
                setPrice(Math.round(HA * transport * goal * engine * BM * ZHG / 1000) * 1000)
                console.log(price);
                break
            case "1.185":
                console.log('ssss');
                setPrice(Math.round(HA * transport * engine * BM * ZHG / 1000) * 1000)
                break
            case "1.44":
                setPrice(Math.round(HA * transport * BM * ZHG / 1000) * 1000)
                break
            case "1.133":
                setPrice(Math.round(HA * transport * BM * ZHG / 1000) * 1000)
                break
            case "1.33":
                setPrice(Math.round(HA * transport * BM * ZHG / 1000) * 1000)
                break
            case "0.59":
                setPrice(Math.round(HA * BM * ZHG / 1000) * 1000)
                break
        }


    }

    return (
        <>
            <div className="top">
                <div className="top-text"><h3>Info About APPA</h3></div>
                <div className="top-input">
                    <div className="appa">
                        <div className="parent-select">
                            <div>
                                <label className="appa-label">Տրանսպորտային միջոցի տեսակ</label>
                                <br />
                                <select className="appa-select" value={transport} onChange={handleTransportChange}>
                                    <option value='1'>Թեթև մարդատար </option>
                                    <option value="1.185">Բեռնատար (ներառյալ ուղևորաբեռնատար)</option>
                                    <option value="-1">Ավտոբուս (ներառյալ միկրոավտոբուս), տրոյլեբուս</option>
                                    <option value="0.59">Մոտոտրանսպորտ (ներառյալ մոտոցիկլ, տրիցիկլ, քվադրիցիկլ)</option>
                                    <option value="0.59">Այլ</option>
                                </select>
                            </div>

                            {busType ?
                                <div>
                                    <label className="appa-label-count">Նստատեղերի քանակ</label>
                                    <br />
                                    <select className="appa-select-count" onChange={e => setTransport(e.target.value)}>
                                        <option value="1.44" >Մինչև 17 (առանց վարորդի)</option>
                                        <option value="1.133">18 և ավել (առանց վարորդի)</option>
                                    </select>
                                </div>
                                : <></>}
                        </div>
                        <br />
                        {transport == 1 ?
                            <div>
                                <label className="appa-label-type">Օգտագործման նպատակ</label>
                                <br />
                                <select className="appa-select-type" onChange={e => setGoal(e.target.value)}>
                                    <option value="1" >Անձնական</option>
                                    <option value="1">Հանրային տրանսպորտ</option>
                                    <option value="1.8">Տաքսի/վարձակալություն</option>
                                    <option value="1.03">Ծառայողական/առևտրային</option>
                                </select>
                            </div>
                            : <></>}
                        <br />
                        <div className="parent-select">
                            <label className="appa-label-power">ՏՄ շարժիչի հզորությունը</label>
                            <br />'
                            {transport == 1 ?
                                <div>
                                    <select className="appa-select-power" onChange={e => setEngine(e.target.value)}>
                                        <option value="0.8" >Մինչև 80 ձիաուժ</option>
                                        <option value="1">81-ից 140 ձիաուժ</option>
                                        <option value="1.38">141-ից 230 ձիաուժ</option>
                                        <option value="1.64">231 և ավելի ձիաուժ</option>
                                    </select>
                                </div>
                                : <></>}
                            {transport == 1.185 ?
                                <div>
                                    <select className="appa-select-power" value={"0.8"} onChange={e => setEngine(e.target.value)}>
                                        <option value="0.8">Մինչև 80 ձիաուժ</option>
                                        <option value="1">81-ից 140 ձիաուժ</option>
                                        <option value="1.09">141-ից 230 ձիաուժ</option>
                                        <option value="1.1">231 և ավելի ձիաուժ</option>
                                    </select>
                                </div>
                                :
                                <></>
                            }
                        </div>
                        <br />
                        <label className="appa-label-date">Ժամկետ</label>
                        <br />
                        <select className="appa-select-date" onChange={e => setZHG(e.target.value)}>
                            <option value="1">1 տարի</option>
                            <option value="0.95">11 ամիս</option>
                            <option value="0.85">10 ամիս</option>
                            <option value="0.77">9 ամիս</option>
                            <option value="0.7">8 ամիս</option>
                            <option value="0.65">7 ամիս</option>
                            <option value="0.6">6 ամիս</option>
                            <option value="0.5">5 ամիս</option>
                            <option value="0.4">4 ամիս</option>
                            <option value="0.33">3 ամիս</option>
                            <option value="0.25">2 ամիս*</option>
                            <option value="0.2">16 օրից մինչև 1 ամիս ներառյալ</option>
                            <option value="0.15">11 օրից մինչև 15 օր ներառյալ</option>
                            <option value="0.1">10 օր</option>
                        </select>
                        <br />
                        <label className="appa-label-date">Բոնուս մալուսի դաս</label>
                        <br />
                        <select className="appa-select-date" value={BM} onChange={e => setBM(e.target.value)}>
                            <option value="0․5">Դաս 1</option>
                            <option value="0․65">Դաս 2</option>
                            <option value="0․75">Դաս 3</option>
                            <option value="0․82">Դաս 4</option>
                            <option value="0․85">Դաս 5</option>
                            <option value="0․88">Դաս 6</option>
                            <option value="0․91">Դաս 7</option>
                            <option value="0․94">Դաս 8</option>
                            <option value="0․97">Դաս 9</option>
                            <option value="1" >Դաս 10</option>
                            <option value="1․04">Դաս 11</option>
                            <option value="1․08">Դաս 12</option>
                            <option value="1.12">Դաս 13</option>
                            <option value="1.16">Դաս 14</option>
                            <option value="1.24">Դաս 15</option>
                            <option value="1.32">Դաս 16</option>
                            <option value="1.4">Դաս 17</option>
                            <option value="1.44">Դաս 18</option>
                            <option value="2">Դաս 19</option>
                            <option value="2.5">Դաս 20</option>
                            <option value="2․5">Դաս 21</option>
                            <option value="2․5">Դաս 22</option>
                        </select>



                        <br />
                        <br />
                        <center><button type="button" onClick={handleSubmit} className="btn calc-btn">Հաշվել</button></center>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-div">
                    <div className="top-text"><h3>Result: {price}</h3></div>
                    {/* <center>
                        <div className="bottom-input">
                            <input type="text" name="" /><br />
                            <input type="text" name="" /><br />
                            <input type="text" name="" /><br />
                        </div>
                    </center> */}
                </div>
            </div>
        </>
    )
}




export default React.memo(AppaPage)