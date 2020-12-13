import React from 'react'


const  AboutPage = () => {

    return (
        <>
            <div className="top margin-header">
                <div className="top-text"><h3 className="site-color">Կայքի մասին</h3></div>
                <div className="top-input">
                    <p>Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է: Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության 
                        ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է: Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան,
                         այլև ներառվել է էլեկտրոնային տպագրության մեջ` մնալով էապես անփոփոխ: Այն հայտնի է դարձել 1960-ականներին Lorem Ipsum բովանդակող Letraset էջերի թողարկման արդյունքում,
                         իսկ ավելի ուշ համակարգչային տպագրության այնպիսի ծրագրերի թողարկման հետևանքով, ինչպիսին է Aldus PageMaker-ը, որը ներառում է Lorem Ipsum-ի տարատեսակներ:</p>
                         <div className="parent flex-wrap">
                            <img src="img/Artboard.png" />
                            <div>
                                <form>
                                    <h3 className="site-color">Ձեր առաջարկները</h3>
                                    <textarea name="" rows="14" cols="70"></textarea><br/>
                                    <button type="button" className="btn calc-btn">Ուղարկել</button>
                                </form>
                            </div>
                         </div>  
                 </div>
            </div>
        </>
    )
}




export default  AboutPage