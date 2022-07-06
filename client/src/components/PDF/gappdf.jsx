import React from 'react';
import Pdf from "react-to-pdf";
const ref=React.createRef()
const PDF=(props)=>{
    return(
        <>
            <div  ref={ref}>
            <ul>
<br/>

            <h5 style={{marginLeft:'300px'}}>-प्रतिज्ञापत्र-</h5>
            <h5 style={{marginLeft:'240px'}}>(खंडपडल्याचा बाबतचा प्रतिज्ञा लेख )</h5>
<h5 style={{marginLeft:'180px'}}>मा. कार्यकारी दंडाधिकारी तहसील कार्यालय अमळनेर यांच्या समोर.</h5>
दिनांक :- 15/02/2022.



<p>मी {props.s1} . {props.fullName} वय:- {props.age}, धंदा:- {props.occupation}, रा: {props.village}, ता:- {props.taluka},

जि:- {props.district}, <br/> कारणे मी सत्य प्रतिज्ञावर लिहून देतो की,</p>

<p>मी  {props.school} ,{props.state}  येथे इ. {props.standard}  वी ची परीक्षा:- December {props.exam} मध्ये दिली होती.
 त्यात मी {props.result} झालो, त्यानंतर <br/> माझी आर्थिक परिस्थिति ही शिक्षणायोग्य  नसल्यामुळे  मी पुढील शिक्षण घेऊ शकलो नाही.</p>

<p>मी सन - {props.gapF} पासून ते सन - {props.gapT} आज पर्यंत मी कोणत्याही महाविद्यालयात अथवा खाजगी संस्थेत  <br/> प्रवेश घेतला नाही. 
अथवा सरकारी/ निमसरकारी संस्थेत नोकरी केलेली नाही. सदरखा प्रतिज्ञलेख भी  <br/> पुढील शिक्षणकामी करून देत आहे. व फी सवलत मिळणे कामी करून देत आहे.</p>

<p>वरील माहिती खोटी निघाल्यास मी आय. पी. सी कलम 199 व 200 या मधील गुन्दास मी पात्र राहिल यावी माला जाणीव आहे.</p>
                
<img src={props.img} style={{width:'150px'}}alt="pic"/>
<br/><br/>
            
<h5>साक्षीदाराचे नांव व पत्ता :</h5>
<p>मी. {props.s3}{props.fullname2}   रा. {props.village1},  ता. {props.taluka1},  जि. {props.district}. माझ्या समक्ष  {props.s1} {props.fullName}

<br/> यांनी सही व अंगठ्याचा ठसा दिलेला आहे व त्यांना मी वैक्तिकरित्या ओळखतो असे मी घोषित करतो.</p>

<br/><h5 style={{
    paddingLeft:'350px'
}}>{props.fullname2}</h5>
            
<br/>
<h5>प्रमाणित करण्यात येते कि :</h5>
<img src={props.img} style={{paddingLeft:'450px',width:'600px'}}alt="pic"/>

<p>{props.s1}  {props.fullName} यांनी स्वाक्षरी केली आणि माझ्या समक्ष शपथ घेतली. यांना, {props.s3}{props.fullname2}<br/>
  यांनी वैयक्तिकरित्या ओळखले आहे. ज्यांची स्वाक्षरी प्रतिज्ञापत्रा वर माझ्या समक्ष केली गेली आहे.</p>
<br/><br/>
Register No. MH-01/2021.
<br/>
स्थळ :- {props.village}       
<br/>                      
दिनांक :- 20/09/2021.         &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;     (Seal of office)          &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;             (Sign. Before Me) <br/>
<p style={{
    marginLeft:'470px'
}}>  कार्यकारी दंडाधिकारी अमळनेर</p>

स्थळ :- {props.village}

</ul>
            </div>


            <Pdf targetRef={ref} filename='post.pdf'>
                {({ toPdf })=><button onClick={toPdf} style={{backgroundColor:"#000080",color:"white"}}>Capture as PDF</button>}

            </Pdf>
        </>
    )
}
export default PDF;