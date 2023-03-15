import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate} from "react-router-dom";
import { auth } from "./Firebase";


export default function Login() {
  const navigate=useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const[error,setError]=useState("");
  const[submitButtonDisabled,setSubmitButtonDisabled]= useState("false");

  function login() {
    let item = {password, email };
    // if(!name || email || password){
    //   setError("Fill all fields")
    //   return;
    // }
    // setError("")
    // console.warn(item);
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password).then(async(res) => {
      setSubmitButtonDisabled(false);
      navigate('/AddProduct');
    })
    .catch((err)=> {
    setSubmitButtonDisabled(false)});
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="Password"
      />
      <br />
      {/* <b className="error">{error}</b> */}
      <br />
      <br />
      <button onClick={login} className="btn btn-primary">
        Login
      </button>
    </div>
  );
}
