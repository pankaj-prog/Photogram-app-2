import  React, { useEffect }  from 'react';
import useStorage from './hooks/useStorage';


const Progressbar = ({file,setfile}) => {
  const {url,progress} = useStorage(file);
  console.log(progress,url);
  useEffect(() => {
      if(url){
          setfile(null);
      }
  }, [url,setfile])
    return(
        <div className="progressbar" style={{width: progress +"%"}}  ></div>

    )
}

export default Progressbar;