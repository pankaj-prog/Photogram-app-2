import React from "react";

const Modal = ({selectedimage, setimage}) =>{
    const handleclick = (e) => {
     if(e.target.classList.contains('backdrop'))  {
         setimage(null);
     } 
     
    }
    return(

    <div className="backdrop" onClick={handleclick}>
    <img  src={selectedimage} alt="" className="bigpic" />
    </div>
    )
}
export default Modal;
