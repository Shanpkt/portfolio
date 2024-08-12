import React from "react";
import linkdin from "../assets/linkdine.png"
import github from "../assets/github.png"
import './contact.css'
//function for form reset
function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}
    name="contact"
    class="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
  >
    <div>
    <h4 class='list'>Contact</h4>
    </div>
    <div  class="w-full max-w-xs mx-auto p-4">
      
      <div class="flex flex-wrap justify-center gap-4">
        <div class="text-white p-2">
          <img src={linkdin} alt="LinkedIn" class="w-16 h-16"/>
        </div>
        <div class="text-white p-2">
          <img src={github} alt="GitHub" class="w-16 h-16"/>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};

export default Contact;
