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
        axios.post("http://localhost:3000/newuser", { name:name,address:address,mobile:mobile,city:city,district:district,code:code,state:state,patient:patient,disease:disease,needs:needs,email:email,aemail:aemail})
        .then(res => {
            console.log(res);
            alert("All details are submitted successfully");
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
                        <select name="state" id="state" value={state} onChange={(e)=>setState(e.target.value)} class="form-control" style={{width:"500px",height:"40px",borderRadius:"10px"}}>
<option value="Select">Select</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
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
