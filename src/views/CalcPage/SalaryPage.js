import React, { useState } from 'react'
import { toast } from 'react-toastify';

const SalaryPage = () => {

    const [ready, setReady] = useState(false)

    const [startSalary, setStartSalary] = useState()
    const [finalSalary, setFinalSalary] = useState()
    const [kutakayin, setKutakayin] = useState()
    const [kutakayinTokos, setKutakayinTokos] = useState('3.5')
    const [ekamtayin, setEkamtayin] = useState()
    const [ekamtayinTokos, setEkamtayinTokos] = useState('22')
    const [droshmanish, setDroshmanish] = useState()
    const [hashvarkType, setHashvarkType] = useState('0')



    const handleSubmit = (e) => {
        e.preventDefault()
        if (!startSalary) {
            toast.warn('Լրացրեք աշխատավարձի չափը')
            return
        }


        let sal = parseInt(startSalary)
        let ekamt
        let kutak
        let droshm
        let x
        if (hashvarkType == 0) {
            console.log('hashvarktype', hashvarkType);
            console.log('kutakayintokos', kutakayinTokos);
            console.log('sal', sal);
            if (kutakayinTokos == 0) {
                kutak = 0
                switch (true) {
                    case (sal <= 76500):
                        droshm = 1500
                        break;
                    case (sal > 76500 && sal <= 153000):
                        droshm = 3000
                        break;
                    case (sal > 153000 && sal <= 384500):
                        droshm = 5500
                        break;
                    case (sal > 384500 && sal <= 771500):
                        droshm = 8500
                        break;
                    case (sal > 771500):
                        droshm = 15000
                }
                x = Math.round((sal + droshm) * 100 / (100 - ekamtayinTokos))
                setKutakayin(0)
                setDroshmanish(droshm)
                setEkamtayin(Math.round(x * ekamtayinTokos / 100))
                setFinalSalary(Math.round(x))
            } else if (kutakayinTokos == 3.5) {
                switch (true) {
                    case (sal <= 73000):
                        droshm = 1500
                        x = Math.round((sal + droshm) * 100 / (100 - ekamtayinTokos - 3.5))
                        console.log(x);
                        setEkamtayin(Math.round(x * ekamtayinTokos / 100))
                        setKutakayin(Math.round(x * 3.5 / 100))
                        setFinalSalary(Math.round(x))
                        setDroshmanish(droshm)
                        break;
                    case (sal > 73000 && sal <= 146000):
                        droshm = 3000
                        x = Math.round((sal + droshm) * 100 / (100 - ekamtayinTokos - 3.5))
                        console.log(x);
                        setEkamtayin(Math.round(x * ekamtayinTokos / 100))
                        setKutakayin(Math.round(x * 3.5 / 100))
                        setFinalSalary(Math.round(x))
                        setDroshmanish(droshm)
                        break;
                    case (sal > 146000 && sal <= 367000):
                        droshm = 5500
                        x = Math.round((sal + droshm) * 100 / (100 - ekamtayinTokos - 3.5))
                        console.log(x);
                        setEkamtayin(Math.round(x * ekamtayinTokos / 100))
                        setKutakayin(Math.round(x * 3.5 / 100))
                        setFinalSalary(Math.round(x))
                        setDroshmanish(droshm)
                        break;
                    case (sal > 367000 && sal <= 704000):
                        droshm = 8500
                        x = Math.round((sal + droshm - 32500) * 100 / (100 - ekamtayinTokos - 10))
                        setEkamtayin(Math.round(x * ekamtayinTokos / 100))
                        setKutakayin(Math.round((x * 10 / 100) - 32500))
                        setFinalSalary(Math.round(x))
                        setDroshmanish(droshm);
                        break;
                    case (sal > 704000 && sal <= 711100):
                        droshm = 15000
                        x = Math.round((sal + droshm - 32500) * 100 / (100 - ekamtayinTokos - 10))
                        setEkamtayin(Math.round(x * ekamtayinTokos / 100))
                        setKutakayin(Math.round((x * 10 / 100) - 32500))
                        setFinalSalary(Math.round(x))
                        setDroshmanish(droshm)
                        break;
                    case (sal > 711100):
                        droshm = 15000
                        setKutakayin(69500)
                        x = Math.round((sal + droshm + 69500) * 100 / (100 - ekamtayinTokos))
                        setEkamtayin(Math.round(x * ekamtayinTokos / 100))
                        setFinalSalary(Math.round(x))
                        setDroshmanish(droshm)
                }

            }
        } else if (hashvarkType == 1) {
            kutak = 0
            switch (true) {
                case (sal <= 100000):
                    droshm = 1500
                    if (kutakayinTokos) {
                        kutak = sal * kutakayinTokos / 100
                    }
                    break;
                case (sal > 100000 && sal <= 200000):
                    droshm = 3000
                    if (kutakayinTokos) {
                        kutak = sal * kutakayinTokos / 100
                    }
                    break;
                case (sal > 200000 && sal <= 500000):
                    droshm = 5500
                    if (kutakayinTokos) {
                        kutak = sal * kutakayinTokos / 100
                    }
                    break;
                case (sal > 500000 && sal <= 1000000):
                    droshm = 8500
                    if (kutakayinTokos) {
                        kutak = (sal * kutakayinTokos / 100) - 32500
                    }

                    break;
                case (sal > 1000000 && sal <= 1020000):
                    droshm = 15000
                    if (kutakayinTokos) {
                        kutak = (sal / kutakayinTokos) - 32500
                    }
                    break;
                case (sal > 1020000):
                    droshm = 15000
                    if (kutakayinTokos) {
                        kutak = 69500
                    }
            }
            setDroshmanish(droshm)
            setKutakayin(kutak)
            ekamt = sal * ekamtayinTokos / 100
            console.log(ekamt);
            setEkamtayin(ekamt)
            setFinalSalary(Math.round(sal - ekamt - kutak - droshm))
        }
        setStartSalary(sal)
        setReady(true)
    }

    const handleChangeSalary = (e) => {
        setStartSalary(e)
        setReady(false)
    }
    const twoCalls = e => {
        setHashvarkType(e.target.value);
        if (finalSalary > 0) {
            // handleSubmit(e);
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="salary">
                    <div className="top-text"><h3>Աշխատավարձի Հաշվիչ</h3></div>
                    <hr className="sep" />
                    <div className="parent-select">
                        <div>
                            <label className="salary-label">Աշխատավարձ</label><br />
                            <select className="salary-select" value={hashvarkType} onChange={twoCalls}>
                                <option value="0">Մաքուր</option>
                                <option value="1">Կեղտոտ</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <label className="salary-tt">Աշխատավարձ Չափը</label><br />
                            <input type='number' className="salary-price" placeholder="Օրինակ ՝ 100000" onChange={(e) => handleChangeSalary(e.target.value)} />
                        </div>
                    </div>
                    <br />
                    <label className="salary-kut">Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային համակարգին: Եթե այո, ապա ի՞նչ հիմունքներով</label><br />
                    <select className="salary-select-kut" value={kutakayinTokos} onChange={(e) => setKutakayinTokos(e.target.value)}  >
                        <option value="3.5">Այո, կամավոր՝ միացած 07/2018-ից հետո</option>
                        <option value="3.5">Այո, պարտադիր կամ մինչ 07/2018 միացած կամավոր</option>
                        <option value="0">Չեմ Մասնակցում</option>
                    </select>
                    <br />
                    <label className="salary-tt">Արդյո՞ք աշխատում եք ՏՏ ոլորտի հարկային արտոնություններից օգտվող ընկերությունում։
            </label>
                    <br />
                    <select className="salary-select-tt" value={ekamtayinTokos} onChange={(e) => setEkamtayinTokos(e.target.value)} >
                        <option value="22">Ոչ</option>
                        <option value="10">Այո</option>
                    </select>
                    <br /><br />
                    <button type="submit" className="btn calc-btn"  >Հաշվել</button>
                    {ready ?
                        <>
                            <div className="salary-result-parent">
                                <h2> <span className="salary-result">Աշխատավարձ</span> {startSalary}</h2>
                                <span className="salary-plus"> {hashvarkType != 0 ? ('-') : ('+')} </span>
                                <h2> <span className="salary-result">Եկամտային հարկ</span> {ekamtayin}</h2>
                                <span className="salary-plus">{hashvarkType != 0 ? ('-') : ('+')}</span>
                                <h2> <span className="salary-result">Կուտակային կենս․</span> {kutakayin}</h2>
                                <span className="salary-plus">{hashvarkType != 0 ? ('-') : ('+')}</span>
                                <h2> <span className="salary-result">Դրոշմանշային վճար</span> {droshmanish}</h2>
                                <h2 className="salary-result-num">______________________</h2>
                                <h2 className="salary-result-num"> <span className="salary-result">Արդյունք</span> {finalSalary}</h2>
                            </div>
                        </>
                        : null}
                </div>
            </form>
        </>
    )
}


export default SalaryPage