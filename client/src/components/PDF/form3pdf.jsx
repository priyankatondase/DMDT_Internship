
import React from 'react';

import Pdf from "react-to-pdf";
const ref=React.createRef()

const PDF=(props)=>{
    
    return(
        
        <>
            <div  ref={ref}>
                
            <ul><br/><br/>
            FORM - 3 [rule 4 (1)]<br/><br/>
AFFIDAVIT OF CLAIMANT/ PARENT(S)<br/><br/>
(Rule 4, Order 18 of the Code of Civil Procedure, 1908)<br/><br/>
<br/>
<p>I, .. {props.fullName} son / daughter of Shri{props.fatherName}aged {props.age} years,
Occupation {props.occupation} residing at {props.village} village,<br/> Taluka {props.taluka},{props.district} Disrict
{props.state} State here by Solemnly affirm as under</p>
<p>2. I hereby give the genealogy tree of my family and relatives, which is as under: - </p>
<br/>

<p>3. Other relevant submissions to be made or any essential explanation to be made, in support of
Caste/Tribe <br/>claim, including the sociology, anthropological and ethnological (anthropological
moorings and <br/> ethnology kinship),genetical traits, of the Caste/Tribes, if any;<br/>
To the best of my knowledge and be lief the information given in application FORM -1 and <br/>in
this affidavit is based on facts and is correct. </p>
                


Identifier Details-
<br/>
<p>I {props.s1}{props.fullname2}, Resident at {props.village}, Tal. {props.taluka}, Dist. {props.district}. Before me, Shri. {props.fullName} has
given his/her signature <br/> and thumbprint and I declare that I know him personally.</p>
{props.fullname2}
<br/>VERIFICATION<br/>
<p>It is certified that {props.s1} . {props.fullName} signed and took oath before me.<br/>
{props.fullname2}, Personally identified, whose signed affidavit has been affixed to
me.</p>
<p>Verified on 05/10/2017 at Amalner that the contents of the above mentioned
affidavit is true and correct <br/>  and nothing material has been concealed.</p>
<br/><br/><br/>
Place : Amalner. &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; (Sign. Before Me)
<br/>Date : 05.10.2017. &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Executive Magistrate Amalner



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