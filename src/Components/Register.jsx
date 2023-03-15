import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate} from "react-router-dom";
import { auth } from "./Firebase";

export default function Register() {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const[error,setError]=useState("");
  const[submitButtonDisabled,setSubmitButtonDisabled]= useState("false");

  function signUp() {
    let item = { name, password, email };
    // if(!name || email || password){
    //   setError("Fill all fields")
    //   return;
    // }
    // setError("")
    // console.warn(item);
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, email, password).then(async(res) => {
      setSubmitButtonDisabled(false);
      const user=res.user;
      await updateProfile(user,{
        displayName: name,
      });
      navigate('/AddProduct');
    })
    .catch((err)=> {
    setSubmitButtonDisabled(false)});
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="Name"
      />
      <br />
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
      <button onClick={signUp} className="btn btn-primary">
        Signup
      </button>
    </div>
  );
}
