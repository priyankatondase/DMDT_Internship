import React, { useRef } from 'react';
import "../write/Write.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Link,useHistory } from 'react-router-dom';
import PDF from '../../components/PDF/appendixCPDF';
import Webcam from "react-webcam";




export default function Write() {
  let postSubmitted = false;

  const [age, setAge] = useState("");
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [img,setImg]=useState("");
  const [fullName, setfullName] = useState("");
  const [fatherName, setfName] = useState("");
  const [occupation, setOcc] = useState("");
  const [village, setVil] = useState("");
  const [taluka, setTaluka] = useState("");
  const [state, setState] = useState("");
  const [district, setDist] = useState("");
  const [pincode, setPin] = useState("");
  const [caste, setCaste] = useState("");

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      age,
      s1,
      fullName,
      fatherName,
      occupation,
      village,
      taluka,
      state,
      district,
      pincode,
      caste,

    };

    try {
     
      const res = await axios.post("/cert1", newPost);
      console.log(res);
      postSubmitted = true;
     
    
    } catch (err) {
      console.log(err);
    }

  };

  const history = useHistory();
  
  
const webRef=useRef(null);
let im=null;
  const ShowImage=()=>{
    
      im=webRef.current.getScreenshot();
      setImg(im);
};
console.log(img);
  

  return (

    <>
     
         
      {!postSubmitted ?

        (<div>
       
          <form className="writeForm row g-3" onSubmit={handleSubmit} >
         
        
         
            <nav style={{ backgroundColor: "#000080" }} className="navbar navbar-light" >
              <div className="container-fluid">
                <Link className="navbar-brand link">MAHA<span className="ocolor">DIGITAL</span>PORTAL</Link>

                <div className="d-flex">
                  <button className="bclass">View Balance</button>

                  <input className="me-2" type="search" placeholder="Search" aria-label="Search" />
                 
                </div>
              </div>

            </nav>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="heading2">
                  <h3>CERTIFICATE</h3>
                </div>
              </div>
              <div className="col-md-3">
              <button className="button" style={{marginTop:"10px"}}><Link  to="/cert1" className='link' >APENDIX C/D HEIGHT CHEST CERTIFICATE</Link></button>
          
              <button className="button" style={{marginTop:"10px"}}><Link  to="/cert2" className='link' >Income Certificate</Link></button>
          
              
              </div>
              
            </div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#000080", height: "80px" }}>
              <div className="container-fluid">

                <Link style={{ color: "white" }} className="navbar-brand" >

                  APPENDIX C/D HEIGHT CHEST CERTIFICATE</Link>
              </div>
            </nav>

            <div className="col-md-4">
              <label for="inputState" className="form-label" >Salutation</label>
              <select className="input" name="s1" onChange={e => setS1(e.target.value)}>
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">Full Name</label>
              <input type="text" name="fullName" className="input form control" onChange={e => setfullName(e.target.value)} />
            </div>
            
            <div className="col-md-4">
              <label for="inputAddress" className="form-label">Father Name</label>
              <input className="input" type="text" name="father" placeholder="" onChange={e => setfName(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputAddress2" className="form-label">Age</label>
              <input className="input" type="number" name="age" placeholder="" onChange={e => setAge(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Occupation</label>
              <input className="input " type="text" name="occupation" onChange={e => setOcc(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Village</label>
              <input className="input" name="village" onChange={e => setVil(e.target.value)}/ >
               
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Taluka</label>
              <input className="input" name="taluka" onChange={e => setTaluka(e.target.value)}/>
              
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <input className="input" name="state" onChange={e => setState(e.target.value)}/>
               
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">District</label>
              <input className="input" type="text" name="district" onChange={e => setDist(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input" type="number" name="pincode" onChange={e => setPin(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Cast Belong To</label>
              <input className="input" type="text" name="caste" onChange={e => setCaste(e.target.value)}/>
            </div>
            
           
            <Webcam ref={webRef} style={{width:"250px",height:"250px"}}/>
   

            <button className='bclass' style={{width:"70px",height:"30px",marginTop: "250px",
            marginLeft: "-150px"}} onClick={()=>{
            ShowImage()
       }}>Click</button>
            <button style={{backgroundColor:"#000080",color:"white",fontWeight:"40px",height:"40px"}} type="submit">Submit</button>
          </form>

        </div>) :
        <PDF age={age} fullName={fullName} s1={s1} />
      }
      <PDF age={age} fullName={fullName} s1={s1} s2={s2} occupation={occupation} village={village} img={img}
      taluka={taluka} state={state} district={district} pincode={pincode} caste={caste} fatherName={fatherName} />
    </>

  );
}
