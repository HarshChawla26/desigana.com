import React from 'react';
import './../css/style.css';
import LogDetails from './../js/LoginDetails.json'
export default function signUpForm(props) {
    function handleSignin(){

    }
    
    const loginSubmit = (e) => {
        e.preventDefault();
        var i = 0;
        const uname = document.getElementById('user-name');
        const passcode = document.getElementById('pwd');
        while(i<LogDetails.Details.length){
            // console.log(LogDetails.Details[i].username + ' ' + LogDetails.Details[i].password);
            if(uname.value === LogDetails.Details[i].username && passcode.value ===LogDetails.Details[i].password){
                localStorage.setItem('username',uname.value);   
                localStorage.setItem('password',passcode.value);
                sessionStorage.setItem('isLogged',true);
                window.location.reload();
                break;
                
            }else{
                document.getElementById("msg").innerText = 'incorrect username or password';
            }
            i++;
        }
    }
  return (
    <center>
    {/* <div id="Signform" className="shad p-3 mb-5 position-absolute bg-body rounded">
      <h4>Fill this form to join</h4>
      <form name="joinform" onsubmit={handleSignin} className="row g-3">
        <div className="form-floating mb-3">
          <input style={{"border":" 2px solid #E6022D"}} type="text" className="form-control" id="user-name" placeholder="xyz" required />
          <label htmlFor="name">username  </label>
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input style={{"border":" 2px solid #E6022D"}} type="number" max="80" min="10" className="form-control" id="age" placeholder="xyz" required />
          <label htmlFor="age">Age</label>
        </div>
        <div className="form-floating col-md-6  mb-3">
          <select style={{"border": "2px solid #E6022D"}} className="form-select" id="gender" aria-label="Floating label select example"  required>
            <option ></option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Others</option>
          </select>
          <label htmlFor="gender">Gender </label>
        </div>
        
        
        <div className="form-floating mb-3">
          <input style={{"border":" 2px solid #E6022D"}} type="email" className="form-control" id="email" placeholder="xyz" required/>
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input style={{"border":" 2px solid #E6022D"}} type="password" className="form-control" id="email" placeholder="xyz" required/>
          <label htmlFor="email">Create Password </label>
        </div>
        <div className="form-floating mb-3">
          <input style={{"border":" 2px solid #E6022D"}} type="password" className="form-control" id="email" placeholder="xyz" required/>
          <label htmlFor="email">Confirm Password </label>
        </div>
        <button type="submit" className="btn" id="btn">Submit</button>
      </form>
      
    </div> */}
    {/*onChange={(e)=>{ props.setpwd(e.target.value);console.log(props.pwd)}}   onChange={(e)=>{ props.setuname(e.target.value);console.log(props.uname)}} */}
    <div id="Loginform" className="shad p-3 position-absolute mb-5 bg-body rounded">
      <h4>Login</h4>
      <form name="joinform" onSubmit={loginSubmit} className="row mt-4 g-3">
      <div className="form-floating mb-3">
          <input style={{"border":" 2px solid #E6022D",'width':'50%'}} type="text" className="form-control" id="user-name"   placeholder="xyz"required />
          <label style={{'marginLeft':'28%'}} htmlFor="user-name" >username  </label>
        </div>
        <div className="form-floating mb-3">
          <input style={{"border":" 2px solid #E6022D",'width':'50%'}}  type="password" className="form-control" id="pwd" placeholder="xyz" required/>
          <label style={{'marginLeft':'28%'}}htmlFor="pwd">Password </label>
        </div>
        <button type="submit" className="btn mt-5" id="btn">Login</button>
        <h5 id='msg'></h5>
      </form>
      
    </div>
  </center>
  );
}
