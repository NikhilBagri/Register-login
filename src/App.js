import "./App.css";
import Register from "./Components/Register.jsx";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/UpdateProduct";
import { useEffect, useState } from "react";
import { auth } from "./Components/Firebase";

function App() {
  const [userName,setUserName]= useState("");
useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  console.log(user);
  if (user){
    setUserName(user.displayName);
  }else setUserName("");
});
},[]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        MAIN
      
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Addproduct" element={<AddProduct />} />
        <Route path="/Updateproduct" element={<UpdateProduct />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
