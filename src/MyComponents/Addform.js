import React, {useState} from 'react';
import axios from 'axios'

export const Addform = () => {
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [mobile,setMobile]=useState("");
    const [city,setCity]=useState("");
    const [district,setDistrict]=useState("");
    const [code,setCode]=useState("");
    const [state,setState]=useState("");
    const [patient,setPatient]=useState("");
    const [disease,setDisease]=useState("");
    const [needs,setNeeds]=useState("");
    const [email,setEmail]=useState("");
    const [aemail,setAemail]=useState("");
    const submit= (e)=>{
    e.preventDefault();
    if(!patient || !mobile || !address || !needs ||!name){
    alert("These fields are required");
    }
    else{
        axios.post("https://tracking-server-react.herokuapp.com/newuser", { name:name,address:address,mobile:mobile,city:city,district:district,code:code,state:state,patient:patient,disease:disease,needs:needs,email:email,aemail:aemail})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    setName("");
    setAddress("");
    setMobile("");
    setCity("");
    setDistrict("");
    setCode("");
    setState("");
    setPatient("");
    setDisease("");
    setNeeds("");
    setEmail("");
    setAemail("");
}
}
    return (
        <div className="form">
              <form onSubmit={submit} id="dfrm"style={{padding:"50px"}}>
              <table>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                            <label htmlfor="name"><b>Name:</b><span class="red">*</span></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                        </tr>
                        <br/>
                        <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                            <label htmlfor="address1"><b>Address:</b><span class="red">*</span></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="address" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} style={{width:"500px",height:"80px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                         <label htmlfor="mobile"><b>Mobile No:</b><span class="red">*</span></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="mobile" id="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                          <label htmlfor="city"><b>City:</b></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="text" id="city" value={city} onChange={(e)=>setCity(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                         <label htmlfor="district"><b>District:</b></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="text" id="district" value={district} onChange={(e)=>setDistrict(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                         <label htmlfor="code"><b>Pincode:</b></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="text" id="code" value={code} onChange={(e)=>setCode(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                         <label htmlfor="state"><b>State:</b></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="text" id="state" value={state} onChange={(e)=>setState(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                        <label htmlfor="patient"><b>Patient Name:</b><span class="red">*</span></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="text" id="patient" value={patient} onChange={(e)=>setPatient(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                         <label htmlfor="disease"><b>Disease:</b></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="text" id="disease" value={disease} onChange={(e)=>setDisease(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                         <label htmlfor="needs"><b>Needs:</b><span class="red">*</span></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="text" id="needs" value={needs} onChange={(e)=>setNeeds(e.target.value)} style={{width:"500px",height:"100px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                         <label htmlfor="email"><b>Email:</b></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontFamily:"Serif",fontSize:"30px"}}>
                         <label htmlfor="aemail"><b>Alternate Email:</b></label>
                        </td>
                        <td style={{paddingLeft:"100px"}}>
                        <input type="email" id="aemail" value={aemail} onChange={(e)=>setAemail(e.target.value)} style={{width:"500px",height:"40px",borderRadius:"10px"}}/>
                        </td>
                    </tr>

                </table>
                <br/>
                <button type="submit" className="button">Submit</button>
                 </form>
        </div>
    )
}
