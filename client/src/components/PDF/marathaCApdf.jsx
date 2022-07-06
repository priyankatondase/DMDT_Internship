
import React from 'react';

import Pdf from "react-to-pdf";
const ref=React.createRef()

const PDF=(props)=>{
    
    return(
        
        <>
            <div  ref={ref}>
                
            <ul><br/><br/>
<h5 style={{marginLeft:'300px'}}>प्रतिज्ञापत्र</h5>
<br/> 

<h5 style={{marginLeft:'150px'}}>सामाजिक व शैक्षणिकदृष्ट्या मागास (SEBC & Height Chest )</h5>
<h5 style={{marginLeft:'60px'}}>प्रवर्गाकरिता (मराठा) जात प्रमाणपत्र मिळण्यासाठी अर्जदाराने सादर करावयाचे प्रतिज्ञापत्र </h5>
<h5 style={{marginLeft:'150px'}}>मा. कार्यकारी दंडाधिकारी सो, तहसील कार्यालय अमळनेर यांचे समोर,</h5>
दिनांक: 23/07/2021
<br/>
<p>मी. {props.s1}{props.fullName}, श्री {props.fatherName}, यांचा मुलगा वय {props.age}, राहणार : {props.village}, तालुका :- {props.taluka}, जि. {props.district} <br/>
    असे प्रतिज्ञापत्र लिहून देतो की, सन 2018 वा महाराष्ट्र अधिनियम क्रमांक 62 अन्वये सामाजिक व शैक्षणिकदृष्ट्या मागास <br/> (सा. शै.मा.प्र.) (SEBC)
    प्रवर्गाकरिता मराठा जात प्रमाणपत्र मिळणेकरिता अर्ज सादर करायचा / केलेला आहे. </p>

<p>यापुर्वी मी किंवा माझ्या कुटूंबातील इतर कोणत्याही सदस्यांनी "इतर मागास प्रवर्गातील* OBC * *कुणबी या जातीचे <br/>प्रमाणपत्र  घेतलेले नाही व अश्या 
    प्रमाणपत्रावरून कोणत्याही शासकीय सवलतींचा यापुर्वी लाभ घेतलेला नाही व भविष्यातही  <br/>घेणार नाही.मी शपथपूर्वक असेही जाहिर करतो की, 
    मी वरीलप्रमाणे दिलेली संपुर्ण माहिती खरी व बरोबर आहे.</p>

<p>मी दिलेली वरील माहिती चुकीची किंवा खोटी आढळुन आल्यास भारतीय दंड संहितेची
कलम 193 (2), 199 व 200 यांच्या <br/>तरतुदीनुसार माझ्यावर गुन्हा दाखल होईल व त्यानुसार
होणाऱ्या शिक्षेस मी पात्र असेन याची मला जाणीव आहे.</p>
<img src={props.img} style={{width:'150px'}}alt="pic"/>
<br/>
ठिकाण :- अमळनेर 
<br/>
दिनांक :- 23/07/2021
<br/>
<br/>
<h5>साक्षीदाराचे नांव व पत्ता :</h5>
<br/>
<p>मी. {props.s3}{props.fullname1}   रा. {props.village1},  ता. {props.taluka1},  जि. {props.district1}. माझ्या समक्ष  {props.s3} {props.fullName}

<br/> यांनी सही व अंगठ्याचा ठसा दिलेला आहे व त्यांना मी वैक्तिकरित्या ओळखतो असे मी घोषित करतो.</p>

<br/><h5 style={{
    paddingLeft:'350px'
}}>{props.fullname1}</h5>
            

<h5>प्रमाणित करण्यात येते कि :</h5>
<img src={props.img} style={{paddingLeft:'450px',width:'600px'}}alt="pic"/>

<p>{props.s1}  {props.fullName} यांनी स्वाक्षरी केली आणि माझ्या समक्ष शपथ घेतली. यांना, {props.s3}{props.fullname1}<br/>
  यांनी वैयक्तिकरित्या ओळखले आहे. ज्यांची स्वाक्षरी प्रतिज्ञापत्रा वर माझ्या समक्ष केली गेली आहे.</p>

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

            <div>
            <Pdf targetRef={ref} filename='post.pdf'>
                {({ toPdf })=><button onClick={toPdf} style={{backgroundColor:"#000080",color:"white"}}>Capture as PDF</button>}
                
            </Pdf>

            
            </div>
            
        </>
    )
}
export default PDF;