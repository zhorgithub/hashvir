import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';


const TeInspectionPage = () => {
    const [taretiv, setTaretiv] = useState()
    const [dzi, setDzi] = useState()
    const [dziIndex, setDziIndex] = useState()
    const [transport, setTransport] = useState('1')
    const [znnumFee, setZnnumFee] = useState(5500)
    const [bnapTax, setBnapTax] = useState()
    const [ready, setReady] = useState(false)
    const ktron = 2500

    const todayYear = new Date().getFullYear()
    const arr1 = [
        [2.5, 2.5, 2.5, 3, 3.5, 4, 4.5, 5],
        [5, 5, 5, 6, 7, 8, 9, 10],
        [7.5, 7.5, 7.5, 9, 10.5, 12, 13.5, 15],
        [10, 10, 10, 12, 14, 16, 18, 20],
        [12.5, 12.5, 12.5, 15, 17.5, 20, 22.5, 25],
        [15, 15, 15, 18, 21, 24, 27, 30],
        [17.5, 17.5, 17.5, 21, 24.5, 28, 31.5, 35],
        [25, 25, 25, 30, 35, 40, 45, 50]
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!dzi) {
            toast.warn('Լրացրեք շարժիչի հզորությունը')
            return
        }
        if (transport == (1 || 2 || 3)) {
            setBnapTax(dzi * arr1[dziIndex][taretiv]);
        }
        setReady(true)
    }

    const handleChangeTransport = (e) => {
        const a = e.target.value
        setTransport(a)
        switch (a) {
            case '1':
                setZnnumFee(5500)
                break;
            case '2':
                console.log('ssss');
                setZnnumFee(7500)
                break;
            case '3':
                setZnnumFee(10500)
                break;
            case '4':
                setZnnumFee(7500)
                setBnapTax(5000)
                break;
            case '5':
                setZnnumFee(10500)
                setBnapTax(10000)
                break;
            case '6':
                setZnnumFee(10500)
                setBnapTax(15000)
                break;
            case '7' || 8:
                setZnnumFee(3500)
                setBnapTax(0)
                break;
        }
    }

    const handleChangeDzi = (e) => {
        const a = (e.target.value)
        setDzi(a)
        switch (true) {
            case a > 0 && a <= 50:
                setDziIndex(0)
                break;
            case a >= 51 && a <= 80:
                setDziIndex(1)
                break;
            case a >= 81 && a <= 100:
                setDziIndex(2)
                break;
            case a >= 101 && a <= 150:
                setDziIndex(3)
                break;
            case a >= 151 && a <= 200:
                setDziIndex(4)
                break;
            case a >= 201 && a <= 250:
                setDziIndex(5)
                break;
            case a >= 251 && a <= 300:
                setDziIndex(6)
                break;
            case a >= 301:
                setDziIndex(7)
                break;

        }
    }

    const handleChangeTaretiv = (e) => {
        if (e.target.value >= 8) {
            setTaretiv(7)
        } else {
            setTaretiv(e.target.value)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="salary">
                    <div className="top-text"><h3>Տեխնիկական զննություն</h3></div>
                    <hr className="sep" />
                    <div className="parent-select">
                        <div>
                            <label className="appa-label">Տրանսպորտային միջոցի տեսակ</label><br />
                            <select className="appa-select" value={transport} onChange={handleChangeTransport} >
                                <option value='1'>Թեթև մարդատար </option>
                                <option value='2'>Ավտոբուս (մինչև 17 նստատեղով) </option>
                                <option value='3'>Ավտոբուս (17-ից ավել նստատեղով) </option>
                                <option value="4">Բեռնատար (մինչև 3․5 տոննա զանգվածով)</option>
                                <option value="5">Բեռնատար (3․5 - 12 տոննա  զանգվածով)</option>
                                <option value="6">Բեռնատար (12 տոննա զանգվածը գերազանցող)</option>
                                <option value="7">Կցորդներ կամ կիսակցորդներ</option>
                                <option value="8">Մոտոցիկլետներ կամ մոպեդներ</option>
                            </select><br />
                        </div>
                    </div>
                    {transport == (1 || 2 || 3) ?
                        <div>
                            <div>
                                <label className="salary-label">Տարեթիվ</label><br />
                                <select className="salary-select" onChange={handleChangeTaretiv} >
                                    {Array.from(Array(todayYear - 1949).keys()).map(i => (
                                        <option key={i} value={i}>{todayYear - i}</option>
                                    ))}

                                </select>
                            </div>


                            <div>
                                <label className="salary-tt"  > Ձիաուժը</label><br />
                                <input type='number' className="salary-price" onChange={handleChangeDzi} placeholder="Օրինակ ՝ 120" />
                            </div>
                        </div>
                        : <></>}
                    <button type="submit" className="btn calc-btn"  >Հաշվել</button>
                    {ready ?
                        <>
                         <div className="inspection-result-parent">
                            <h2><span className="salary-result">Տեխնիկական զննության ծառայության վճար</span>{ znnumFee}</h2>
                            <span className="salary-plus"> + </span>
                            <h2><span className="salary-result">Բնապահպանության հարկ</span> {bnapTax}</h2>
                            <span className="salary-plus"> + </span>
                            <h2><span className="salary-result">Տեխնիկական զննության կտրոն</span> {ktron}</h2>
                            <h2 className="salary-result-num">______________________</h2>
                            <h2 className="salary-result-num">Ընդամենը {znnumFee + bnapTax + ktron} </h2>
                        </div>
                        </>
                        : null}
                </div>

            </form>
        </>
    )
}




export default TeInspectionPage