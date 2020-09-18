import React from 'react'


const  ContactPage = () => {

    return (
        <>
             <div className="top margin-header">
                <div className="top-text"><h3 className="site-color">Կապ մեր հետ</h3></div>
                <div className="top-input">
                         <div className="parent flex-wrap">
                         <iframe 
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97584.0728574022!2d44.418527614346615!3d40.1533693011677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1600435827724!5m2!1sen!2s" 
                         width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            <div>
                                <form>
                                    <input type="text" /><br /><br />
                                    <input type="text" /><br /><br />
                                    <input type="text" /><br /><br />
                                    <textarea name="" rows="10" cols="50"></textarea><br/>
                                    <button type="button" className="btn calc-btn">Ուղարկել</button>
                                </form>
                            </div>
                         </div>  
                 </div>
            </div>
        </>
    )
}




export default  ContactPage