import React from 'react';
import 'animate.css';
import './../css/Stylesheet_main.css';
import QueueItems from './QueueItems';

export default function Queue(props) {
    
//   const [currarr, setcurrarr] = useState(hiSArr[0].arrRef);
  return (
      <div className="col-md-3 col-4  d-none d-sm-block in-progress" style={{height: 'inherit',overflow:'hidden'}}>
                    <aside className="aside section-2">
                        {/* <!-- this is the section heading part. --> */}
                        <div className="heading">
                            <span>{props.data}</span>
                            
                        </div>
                        
                        {/* <!-- this is the content of the playlist. it will be dynamic. --> */}
                        <div className="playlist-content">
                            {/* <!-- first playlist item --> */}
                            
                        {props.songDet.map((ele)=>{
                            return <QueueItems loadMusic={props.loadMusic} currSong={props.currSong} currarr={props.currarr} play={props.play} key={ele.SongId} tNo={ele.SongId} tName={ele.name} tsinger={ele.singer} tImg={ele.img}/>
                            
                        })}
                            
                            
                        </div>
                    </aside>
                </div>
  );
}
