import './App.css';
import Header from "./MyComponents/Header";
import {Addform} from "./MyComponents/Addform";
import {Footer} from "./MyComponents/Footer";
import axios from 'axios'
import React, {useEffect} from 'react';

function App() {
  useEffect(()=>{
    axios.get('http://localhost:3000/getalluser')
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  

  return (
    <>
    <Header/>
    <Addform/>
    <Footer/>
    </>
  );
  }

export default App;
