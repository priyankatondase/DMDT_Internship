
import React from 'react';

import Pdf from "react-to-pdf";
const ref=React.createRef()




const PDF=(props)=>{
    
    return(
        
        <>
            <div  ref={ref}>
                
            <ul><br/><br/>

            <h5 style={{marginLeft:'300px'}}>APPENDIX C/D</h5>
            <br/>
<h5>FORM OF CERTIFICATION TO BE SUBMITTED BY THE CANDIDATES THOSE<br/>
WHO INTEND TO AVAIL RELAXATION IN HEIGHT OR CHEST MEASUREMENT<br/></h5>
<br/><h5 style={{marginLeft:'300px'}}>Certificate</h5>
<br/>
<p>Certified that {props.s1}.{props.fullName} son of {props.s2} {props.fatherName} Whose photo is<br/>
 affixed and attested below is a permanent resident of Village/Town :- {props.village},
 Tahsil / Taluka  <br/> {props.taluka} District {props.district},State of {props.state}.</p>

 <img src={props.img} style={{paddingLeft:'450px',width:'600px'}}alt="pic"/>

<p>2. It is further certified {props.fullName} son of {props.s2}  {props.fatherName}. Belongs to <br/>
 (Garhwali /Kumaouni/Dogra /Maratha /Himachali/Ladhaki/Sikkimies) (Name of the
community) <br/>{props.caste} community and entitled for Relaxation in Height Chest Measurement for <br/>
recruitment in Central Para Military Forces.</p>
<br/>
No./Cast/sr/ /2021    &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;      Sub Divisional Officer


<br/>

Place:- Amalner    &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(Officer Name)<br/>
Date:- / 07/2021 &emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Division Amalner<br/>






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