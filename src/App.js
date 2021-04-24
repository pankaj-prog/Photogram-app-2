
import { useState } from 'react';
import './App.css';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

import UploadForm from './UploadForm';
import Nav from './Nav'

function App() {
  const[selectedimage , setimage] =useState(null)

  return (
    <div className="App">
      <Nav/>
      <h2>Save your pictures here to view later.</h2>
    <UploadForm/>
    <ImageGrid  setimage={setimage}></ImageGrid>
   {selectedimage && <Modal selectedimage={selectedimage} setimage={setimage} />
}
    </div>
  );
}

export default App;
