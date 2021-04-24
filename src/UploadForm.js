import React, {useState} from 'react';

import Progressbar from './progressbar';

const UploadForm = () => {
    const [file, setfile] = useState(null)
    const types = ['image/png', 'image/jpeg']
    const [error, seterror] = useState(null)
    const changeHandler = (e) => {

        let selected = e.target.files[0];
        console.log(selected);


        if (selected && types.includes(selected.type)) {
            setfile(selected);
            seterror('')
        } else {
            setfile(null);
            seterror('seleect an image file (png or jpeg)')
        }
    }


    return (
    <form>
        <label>
        <input type="file" onChange={changeHandler}/> 
        <span>+</span>
        </label>
        <div className="output" > 
        {error && < div className="error" > {error} </div>} 
        {file && < div  > {file.name} </div>} 
        { file &&  <Progressbar file ={file} setfile={setfile}  /> }
        </div >


    </form>
        )}

        export default UploadForm;