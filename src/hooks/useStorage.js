import {useState,useEffect} from 'react';
import {projectStorage , projectFirestore,timestamp} from '../firebase/Config';



const useStorage = (file) =>{
    
    const [progress, setprogress] = useState(0);
    const [error,seterror] = useState(null);
    const [url,seturl] = useState(null);
    
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        
        storageRef.put(file).on('state.changed' , (snap) => {
            let percenatge = (snap.bytesTransferred/snap.totalBytes ) * 100;
            setprogress(percenatge);
            
        },(err) => {
            seterror(err);
        } ,async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url,createdAt});
            seturl(url);
            
        })
        
    },[file])
    
    return{progress,url,error}
}
export default useStorage;