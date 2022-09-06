import React, { useContext, useEffect,useState } from 'react';
import 'animate.css';
import songContext from '../context/songContext';
import './../css/Stylesheet_main.css';
import QueueItems from './QueueItems';

export default function Queue() {
    const songarray = useContext(songContext)
    const [data, setdata] = useState("Nothing to Play");
    
    useEffect(() => {
        if(songarray.songDet[0].name!=="Select Song to Play"){
            setdata("Playing Now")
        }else{
            setdata("Nothing to play")
        }
    }, [data]);

    return (
      <div className="col-md-3 col-4  d-none d-sm-block in-progress" style={{height: 'inherit',overflow:'hidden'}}>
                    <aside className="aside section-2">
                        {/* <!-- this is the section heading part. --> */}
                        <div className="heading">
                            <span>{data}</span>
                            
                        </div>
                        
                        {/* <!-- this is the content of the playlist. it will be dynamic. --> */}
                        <div className="playlist-content">
                            {/* <!-- first playlist item --> */}
                            
                        {songarray.songDet.map((ele)=>{
                            return <QueueItems  
                                key={ele.SongId} 
                                tNo={ele.SongId} 
                                tName={ele.name} 
                                tsinger={ele.singer} 
                                tImg={ele.img}
                            />
                            
                        })}
                            
                            
                        </div>
                    </aside>
                </div>
  );
}
