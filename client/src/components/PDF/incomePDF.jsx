
import React from 'react';

import Pdf from "react-to-pdf";
const ref=React.createRef()




const PDF=(props)=>{
    
    return(
        
        <>
            <div  ref={ref}>
                
            <ul><br/><br/>

            <h5 style={{marginLeft:'300px'}}>Office of Tahsildar</h5>
<br/>
<p style={{
    fontSize:'14px'
}}>Reference- <br/>1) Applicant of {props.s1}.{props.fullYear} , Income Certificate Issued by Tahsildar / Nayab <br/>Tahsildar Amalner,
Dist Jalgaon,Register no. 39691012140.Dated:- 24/07/2021. Place- Amalner ,Dist Jalgaon.</p>
<br/>
<h5 style={{marginLeft:'300px'}}>Income Certificate</h5>
<p>This is to certified that the income of {props.s1}. {props.fullName} Resident of Village {props.village},<br/> Tal {props.taluka} , 
    Dist {props.district} The total income of last 3 years received by the applicant and his family in <br/>all ways and 
    means on the basis of their Talathi report is as follows:</p>
    <p>Applicant Income of {props.ai}/- Not A Greater Than. <br/>
        Proof of this. {props.fullName} is being paid for Education And government Technical Benefit<br/>
         For Son/Daughter /Family Pension Purpose only, as well This is being done on the basis of the documents<br/> 
         submitted to the office. This certificate will be valid till March 31, 2023.</p>
<p>Documents Verified-<br/>
1) Adhar card.<br/>
2) Ration card<br/>
3) Talathi income certificate<br/>
</p>
No/MAG/Sr/ /2021 <br/><br/>
Place:- Amalner.
<br/>
 Date:- 24 /07/2021 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   seal of office  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nayab Tahsildar Amalner
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