import React from 'react'


const RealEstatePage = () => {

    return (
        <>
        <div className="realestate">
            <div className="realestate-radio">
                <div>
                    <label for="realestate-vk">Որոնել ըստ վկայականի համարի</label>
                    <input type="radio" name="re" id="realestate-vk">
                </div>
                <div>
                    <label for="realestate-pin">Որոնել ըստ կադաստրային ծածկագրի</label> 
                    <input type="radio" name="re" id="realestate-pin">
                </div>
            </div>
            <br>
            <input type="number" name="realestate-number" className="realestate-number">
                <br><br>
            <button type="button" className="btn calc-btn">Հաշվել</button>
        </div>
        </>
    )
}




export default HomePage