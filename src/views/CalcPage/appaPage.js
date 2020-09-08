import React from 'react'


const AppaPage = () => {

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
                                <select className="appa-select">
                                    <option value="">Ընտրել</option>
                                    <option value="1">Թեթև մարդատար </option>
                                    <option value="2">Բեռնատար (ներառյալ ուղևորաբեռնատար)</option>
                                    <option value="3">Ավտոբուս (ներառյալ միկրոավտոբուս), տրոյլեբուս</option>
                                    <option value="4">Մոտոտրանսպորտ (ներառյալ մոտոցիկլ, տրիցիկլ, քվադրիցիկլ)</option>
                                    <option value="5">Այլ</option>
                                </select>
                            </div>
                            <div>
                                <label className="appa-label-count">Նստատեղերի քանակ</label>
                                <br />
                                <select className="appa-select-count">
                                    <option value="">Ընտրել</option>
                                    <option value="1">Մինչև 17 (առանց վարորդի)</option>
                                    <option value="2">18 և ավել (առանց վարորդի)</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="parent-select">
                            <div>
                                <label className="appa-label-power">ՏՄ շարժիչի հզորությունը</label>
                                <br />
                                <select className="appa-select-power">
                                    <option value="">Ընտրել</option>
                                    <option value="1">Մինչև 80 ձիաուժ</option>
                                    <option value="2">81-ից 140 ձիաուժ</option>
                                    <option value="3">141-ից 230 ձիաուժ</option>
                                    <option value="4">231 և ավելի ձիաուժ</option>
                                </select>
                            </div>
                            <div>
                                <label className="appa-label-type">Օգտագործման նպատակ</label>
                                <br />
                                <select className="appa-select-type">
                                    <option value="">Ընտրել</option>
                                    <option value="1">Անձնական</option>
                                    <option value="2">Հանրային տրանսպորտ</option>
                                    <option value="3">Տաքսի/վարձակալություն</option>
                                    <option value="4">Ծառայողական/առևտրային</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <label className="appa-label-date">Ժամկետ</label>
                        <br />
                        <select className="appa-select-date">
                            <option value="">Ընտրել</option>
                            <option value="1">1 տարի</option>
                            <option value="2">11 ամիս</option>
                            <option value="3">10 ամիս</option>
                            <option value="4">9 ամիս</option>
                            <option value="5">8 ամիս</option>
                            <option value="6">7 ամիս</option>
                            <option value="7">6 ամիս</option>
                            <option value="8">5 ամիս</option>
                            <option value="9">4 ամիս</option>
                            <option value="10">3 ամիս</option>
                            <option value="11">2 ամիս*</option>
                            <option value="12">15 օրից մինչև 1 ամիս ներառյալ*</option>
                            <option value="13">10 օրից մինչև 15 օր ներառյալ*</option>
                            <option value="14">10 օր*</option>
                        </select>
                        <br />
                        <br />
                        <center><button type="button" className="btn calc-btn">Հաշվել</button></center>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-div">
                    <div className="top-text"><h3>Result</h3></div>
                    <center><div className="bottom-input">
                        <input type="text" name="" /><br />
                        <input type="text" name="" /><br />
                        <input type="text" name="" /><br />
                    </div></center>
                </div>
            </div>

        </>
    )
}




export default AppaPage