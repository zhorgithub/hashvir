import React, { useState } from 'react'


const CarsPage = () => {

    const [tax, setTax] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        let myTax;
        let percent = 100;

        const type = parseInt(e.target.elements[0].value);
        const year = parseInt(e.target.elements[1].value)
        const hp = parseInt(e.target.elements[2].value);

        const age = new Date().getFullYear() - year


        switch (true) {
            case (type == 1):
                if (hp <= 120) {
                    myTax = hp * 200
                } else if (hp >= 121 && hp <= 250) {
                    myTax = hp * 300
                    if (hp > 150) {
                        myTax += (hp - 150) * 500
                    }
                } else if (hp >= 251) {
                    myTax = hp * 500 + (hp - 150) * 1000
                }
                setTax(myTax)
                break;
            case (type == 2 || type == 3):
                if (hp <= 200) {
                    myTax = hp * 100
                } else {
                    myTax = hp * 200
                }
                break;
            case (type == 4):
                myTax = hp * 40
                break;
            case (type == 5):
                myTax = hp * 150
                break;
            default:

                break;
        }
        if (type == 1 || type == 2 || type == 3) {
            if (age > 3 && age < 9) {
                percent -= (age - 2) * 10

            } else if (age >= 9) {
                percent = 50
            }
        }
        if (type == 3 && age >= 20) {
            percent = 0
        }
        myTax = myTax * percent / 100
        setTax(myTax)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="cars">
                    <div className="top-text"><h3>Տրանսպորտային Միջոցների Գույքահարկ</h3></div>
                    <hr className="sep" />
                    <label className="cars-label">Տրանսպորտի տեսակը</label><br />
                    <select className="cars-select">
                        <option value="1">Մինչև 10 նստատեղ ունեցող մարդատար ավտոմեքենա</option>
                        <option value="2">10 և ավելի նստատեղ ունեցող մարդատար ավտոմեքենա</option>
                        <option value="3">Բեռնատար (բեռնաուղևորատար) ավտոմեքենաս</option>
                        <option value="4">Մոտոցիկլետ</option>
                        <option value="5">Ջրային փոխադրամիջոցների, ձյունագնացների և մոտոամենագնաց</option>
                    </select>
                    <br />
                    <div className="parent-select">
                    <div>
                        <label className="cars-tt">Շարժիչի հզորություն</label><br />
                        <input  placeholder="Օրինակ ՝ 117" type="number" name="cars-power" className="cars-power" />
                    </div>
                    <div>
                        <label className="cars-year">Տարեթիվ</label><br />
                        <select className="cars-select-year">
                           <option value='2021'>2021</option><option value='2020'>2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option>
                        </select>
                     </div>
                    </div>
                    <br /><br />
                    <button type="submit" className="btn calc-btn">Հաշվել</button>
                    <h3> {tax ? 'Գույքահարկ -' + tax : ''}</h3>
                </div>
                
            </form>
        </>
    )
}




export default CarsPage