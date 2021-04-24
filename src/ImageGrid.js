import React from 'react';
import useFirestore from    '../src/hooks/useFirestore'



const ImageGrid = ({setimage}) => {
 const { docs } = useFirestore('images')
 console.log(docs)


    return(
        <div className="img-grid">
          {docs && docs.map(doc => {
              return(
                  <div className="img-wrap" onClick={() => setimage(doc.url) } key={doc.id}>
                    <img src={doc.url} alt="sorry"/>
                  </div>
              )
          })}  


        </div>
    )

}

export default ImageGrid;