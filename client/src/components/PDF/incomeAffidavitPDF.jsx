
import React from 'react';

import Pdf from "react-to-pdf";
const ref=React.createRef()

const PDF=(props)=>{
    
    return(
        
        <>
            <div  ref={ref}>
                
            <ul><br/>
            <p style={{marginLeft:'300px',
        fontSize:'16px'}}> -प्रतिज्ञापत्र-</p>
           

<br/><h6 style={{marginLeft:'100px',fontSize:'16px'}}>कुटुंबाचे सर्व मानले मिळणारे एकूण वार्षिक उत्पन्न: (दिनांक- 26 ऑक्टोबर 2010 च्या शासन<br/></h6> 
<h6 style={{marginLeft:'200px',fontSize:'16px'}}> निर्णयातील  तरतुदी प्रमाणे वार्षिक उत्पन्नाचे प्रमाणपत्र)<br/></h6>
<h6 style={{marginLeft:'150px',fontSize:'16px'}}>मा. कार्यकारी दंडाधिकारी तहसील कार्यालय अमळनेर यांचे समोर,</h6>

<p style={{
    fontSize:'16px'
}}>R. 18/06/2021.</p>

<p style={{
    fontSize:'12px'
}}>मी {props.s1}{props.fullName} , वय: {props.age}, धंदा:- {props.occupation}, रा. {props.village}, ता. {props.taluka}, जि.{props.district} सत्य प्रतिशेवर लिहून देतो कि मी वरील <br/> 
गावाच्या कायमस्वरूपी रहिवासी असून, सन 2002-2007 दारिद्र्य रेषेतील कुटुंब यादीतील माझे नाव अनुक्रमांक- {props.daridrano} वर असून / नसून मला -गुण 
मिळालेले आहेत नाहीत.<br/> मी स्वतः कुटुंब प्रमुख वरील कुटुंबातील सदस्य आहे. मी सन 2020-2021 या वर्षांचा मा. तहसीलदार 
 यांचेकडील {props.utpan}/- उत्पन्न दाखला जोडलेला आहे.</p>

 <p style={{
    fontSize:'12px'
}}>माझी जन्मतारीख:- 01/03/1948 असून वयाचा पुरावा म्हणून मी {props.ageproof} सोबत जोडलेला आहे{props.lc}. आज रोजी  
माझे वय {props.age} वर्ष आहे.</p>

<p style={{
    fontSize:'12px'
}}>तसेच माझ्या कुटुंबात कोणीही शासकीय, निमशासकीय व खाजगी नोकरीला नाही व पेन्शन नाही आजतागायत मी कुठल्याही प्रकारची आर्थिक मदत येत नाही
 किंवा <br/> घेतलेली नाही  मला या पुढील वृद्ध अवस्थेतील जीवन जगण्यासाठी किंवा माझा उदरनिर्वाह  करण्यासाठी मला उत्पन्नावे  कोणतेही साधन
  जाठी मी अशिक्षित / कमी शिक्षण <br/> असून माझ्या वयाबाबत पुरावा म्हणून आधार कार्ड व शाळा सोडल्याचा दाखला हजर केलेला आहे. तसेच माझे कुटूंबाचे  एकत्रित उत्पन्न {props.utpan} इतके आहे.</p>

 <p style={{
    fontSize:'12px'
}}>सदरचे प्रतिज्ञापत्र हे ।) श्रावण बाळ सेवा राज्य निवृत्तीवेतन योजना, 2) इंदिरा गांधी राष्ट्रीयवृद्धापकाळ निवृत्तीवेतन योजना,3) इंदिरा गांधी राष्ट्रीय विधवा निवृत्तीवेतन योजना,<br/>
 4) इंदिरा गांधी राष्ट्रीय अपंग निवृत्तीवेतन योजना, 5) संजय गांधी विधवा निवृत्तीवेतन योजना,6) संजय गांधी अपंग निवृत्तीवेतन योजनो अंतर्गर्त लाभ मिळणेकमी करून दिले <br/>
 असून ते सत्य व बरोबर आहे व तवाडीचे  निघाल्यास यातील कोणतीही माहिती चुकीची आढळल्यास त्यास मी स्वतः जबाबदार राहीन.</p>

<p style={{
    fontSize:'12px'
}}>मी असे जाहीर करतो/करते की, मी वर दिलेली असून ते सत्य व बिनचूक असून मी शासनाच्या अन्य कोणत्याही योजनेखाली  नियमित आर्थिक लाभ घेत नाही कुटुंबातील <br/>कोणीही 
नोकरीवर नाही. सदस्ती माहिती चुकीची आढळकतयास माझ्या विरुद्ध भा.द.वि. कलम 199 व 200(2) नुसार फौजदारी शिक्षेस व दंडास मी पात्र राहील याची मला <br/>संपूर्ण जाणीव आहे.</p>

<img src={props.img} style={{width:'150px'}}alt="pic"/>


<br/><br/>
    <h5>साक्षीदाराचे नांव व पत्ता :</h5>

<p style={{
    fontSize:'12px'
}}>मी. {props.s3}{props.fullname2}   रा. {props.village1},  ता. {props.taluka1},  जि. {props.district}. माझ्या समक्ष  {props.s1} {props.fullName}  यांनी सही व अंगठ्याचा <br/>ठसा दिलेला आहे व त्यांना मी वैक्तिकरित्या ओळखतो असे मी घोषित करतो.</p>


<br/>
<p style={{
    fontSize:'12px'
}}>
स्थळ :- {props.village}       
<br/>                      
दिनांक :- 20/09/2021.                &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp; &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;    &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;     (Sign)
<h5 style={{
    paddingLeft:'450px'
}}>{props.fullname2}</h5>
</p>


<h5>प्रमाणित करण्यात येते कि :</h5>
<img src={props.img} style={{paddingLeft:'450px',width:'600px'}}alt="pic"/>

<p style={{
    fontSize:'12px'
}}>{props.s1} {props.fullName} यांनी स्वाक्षरी केली आणि माझ्या समक्ष शपथ घेतली. यांना, {props.s3} {props.fullname2} यांनी वैयक्तिकरित्या ओळखले आहे.<br/> ज्यांची स्वाक्षरी प्रतिज्ञापत्रा वर माझ्या समक्ष केली गेली आहे.
<br/><br/>

Register No. MH-01/2021.
<br/>
स्थळ :- {props.village}       
<br/>                      
दिनांक :- 20/09/2021.         &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;     (Seal of office)  &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;         &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;             (Sign. Before Me) <br/>
<p style={{
    marginLeft:'470px',
    fontSize:'12px'
}}>  कार्यकारी दंडाधिकारी अमळनेर</p>


<p style={{
    fontSize:'12px'
}}>Sign:-{props.sign}</p>

स्थळ :- {props.village}</p>
<br/>      

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