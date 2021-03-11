import React, { useState } from 'react'
import './realEstate.css'


const RealEstatePage = () => {
    const [htmlFromCadastre, setHtmlFromCadastre] = useState({ __html: null })
    const [code, setCode] = useState()
    const [type, setType] = useState("crtnum")
    const [csrf, setCsrf] = useState()

    let data = {
        csrf: "$2y$10$0F2KixMueFYKf1KNSKNHTu0DKJfY2Di1e985cq2Rfvh2Hz71KjPGe",
        type: "crtnum",
        code: 1240587
    }

    // document.cookie = "PHPSESSID=f4ai599tgpngmke8iongv3ucp0;Expires=Wed, 06 Oct 2021 11:33:44 GMT;"

    const handleSubmit = (e) => {

        // csrf = window.localStorage.getItem('csrf')

        console.log(code);
        console.log(type);
        if (e) e.preventDefault();
        console.log('stex em');
        console.log(data.csrf);

        fetch('cadastre', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                csrf: data.csrf,
                type,
                code
            })
        }).then((res) => {
            return res.json()
        })
            .then(res => {
                console.log(res);
                data.csrf = res.csrf

                if (!res.success && !res.message) {
                    handleSubmit()
                } else if (res.html) {
                    setHtmlFromCadastre({ __html: res.html })
                } else if (res.message) {
                    setHtmlFromCadastre({ __html: res.message })
                }

            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="realestate">
                    <div className="top-text"><h3>Անշարժ Գույքի Գույքահարկ</h3></div>
                    <div className="realestate-radio">
                        <div>
                            <label htmlFor="realestate-vk">Որոնել ըստ վկայականի համարի</label>
                            <input type="radio" name="re" id="realestate-vk" value={"crtnum"} onChange={e => setType(e.target.value)} checked />
                        </div>
                        <div>
                            <label htmlFor="realestate-pin">Որոնել ըստ կադաստրային ծածկագրի</label>
                            <input type="radio" name="re" id="realestate-pin" value={"cadastral_code"} onChange={e => setType(e.target.value)} />
                        </div>
                    </div>
                    <br />
                    <input type="text" value={code} onChange={e => setCode(e.target.value)} name="realestate-number" className="realestate-number" />
                    <br /><br />
                    <button type="submit" className="btn calc-btn">Հաշվել</button>
                </div>
            </form>
            <div id="dataTable" dangerouslySetInnerHTML={htmlFromCadastre} />;
        </>
    )
}




export default RealEstatePage