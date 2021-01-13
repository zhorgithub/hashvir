import React, { useState } from 'react'

const SalaryPage = () => {

    const [ready, setReady] = useState(true)
    const [startSalary, setStartSalary] = useState()
    const [kutakayin, setKutakayin] = useState()
    const [ekamtayin, setEkamtayin] = useState()


    const [finalSalary, setFinalSalary] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.elements);
        const salary = e.target.elements[1].value
        setStartSalary(salary)
        const kut = salary * e.target.elements[2].value / 100
        setKutakayin(kut)
        const ekamt = salary * e.target.elements[3].value / 100
        setEkamtayin(ekamt)
        setFinalSalary(salary - kut - ekamt - 1000)
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
                            <select className="salary-select"  >
                                <option value="1">Մաքուր</option>
                                <option value="2">Կեղտոտ</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <label className="salary-tt">Աշխատավարձ Չափը</label><br />
                            <input type='number' className="salary-price"  placeholder="Օրինակ ՝ 100000" />
                        </div>
                    </div>
                    <br />
                    <label className="salary-kut">Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային համակարգին: Եթե այո, ապա ի՞նչ հիմունքներով</label><br />
                    <select className="salary-select-kut"  >
                        <option value="2.5">Այո, կամավոր՝ միացած 07/2018-ից հետո</option>
                        <option value="2.5">Այո, պարտադիր կամ մինչ 07/2018 միացած կամավոր</option>
                        <option value="0">Չեմ Մասնակցում</option>
                    </select>
                    <br />
                    <label className="salary-tt">Արդյո՞ք աշխատում եք ՏՏ ոլորտի հարկային արտոնություններից օգտվող ընկերությունում։
            </label>
                    <br />
                    <select className="salary-select-tt" >
                        <option value="10">Այո</option>
                        <option value="23">Ոչ</option>
                    </select>
                    <br /><br />
                    <button type="submit" className="btn calc-btn"  >Հաշվել</button>
                    {ready ?
                    <>
                        <h3> {startSalary ? 'Աշխատավարձ - ' + startSalary : '' }</h3>
                        <h2> {ekamtayin ? 'Եկամտային հարկ - ' + ekamtayin : ''}</h2>
                        <h2> {kutakayin ? 'Կուտակային կենս․ - ' + kutakayin : ''}</h2>
                        <h2>Դրոշմանշային վճար 1000</h2>
                        <h2> {finalSalary > 1000 ? 'Արդյունք - ' + finalSalary : ''}</h2>
                    </>
                    : null}
                </div>
                
            </form>
        </>
    )
}


export default SalaryPage