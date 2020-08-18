import React from 'react'


const SalaryPage = () => {

    return (
        <>
            <div className="salary">
                <label className="salary-label">Աշխատավարձ</label><br>
                <select className="salary-select">
                    <option value="">Ընտրել</option>
                    <option value="1">Մաքուր</option>
                    <option value="2">Կեղտոտ</option>
                </select>
                <br>
                <label className="salary-tt">Աշխատավարձ Չափը</label><br>
                <input type="number" name="salary-price" className="salary-price">
                <br>
                <label className="salary-kut">Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային համակարգին: Եթե այո, ապա ի՞նչ հիմունքներով</label><br>
                <select className="salary-select-kut">
                    <option value="">Ընտրել</option>
                    <option value="1">Այո, կամավոր՝ միացած 07/2018-ից հետո</option>
                    <option value="2">Այո, պարտադիր կամ մինչ 07/2018 միացած կամավոր</option>
                    <option value="3">Չեմ Մասնակցում</option>
                </select>
                <br>
                <label className="salary-tt">Արդյո՞ք աշխատում եք ՏՏ ոլորտի հարկային արտոնություններից օգտվող ընկերությունում։
            </label><br>
                <select className="salary-select-tt">
                    <option value="">Ընտրել</option>
                    <option value="1">Այո</option>
                    <option value="2">Ոչ</option>
                </select>
                <br><br>
                <button type="button" className="btn calc-btn">Հաշվել</button>
            </div>
        </>
    )
}




export default HomePage