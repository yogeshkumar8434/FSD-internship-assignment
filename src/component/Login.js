import React ,{useState} from 'react'
import { useNavigate} from 'react-router-dom'

export default function Login() {

  const [password,setPassword] =useState("")
  const [username,setUsername] =useState("")
  const navigate = useNavigate();

  async function login(){
    console.log(username,password)
    if (username == "foo" && password == "bar") {
      let user = {
        username,
      };
      localStorage.setItem("user-info", JSON.stringify(user));
      navigate("/Dashboard");
    }else {
        navigate("/");
    }

  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Sign In</h1>
      <label>
          <p>Name</p>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="mail@website.com"/>
      </label>
      <br/>
        <label><p>password</p>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" placeholder="Min .8 character"/>
      </label>
      <br/>
      <br/>
      <button onClick={login} className="btn btn-primary"> Sign In</button>
    </div>
  )
}
