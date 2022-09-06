import React,{useState,useEffect,useContext} from 'react';
import './../css/Stylesheet_main.css';
import songContext from '../context/songContext';

export default function QueueItems(props) {
    const song = useContext(songContext);
    const [toShow, settoShow] = useState(song.play);
    let t=props.tNo;  
        
    const chgCurrSongStyle = ()=>{
        
        if(song.currSong+song.currarr+1===props.tNo){
            settoShow(true)
        }else{settoShow(false)}
    } 

    useEffect(() => {
        if(song.play){
            chgCurrSongStyle()
        }
    }, [song.currSong]);
    
    useEffect(() => {
        if(song.play){
            chgCurrSongStyle()
        }else{
            settoShow(false)
        }
    }, [song.play]);

    
    if(t<10&&t>0){
        t = '0' + props.tNo;
    }
    else{t= props.tNo - song.currarr;
        if(t<10&&t>0){
        t = '0' + t;
        }
    }

  return (
      <>
    <div onClick={()=>{song.loadMusic(props.tNo-1)}} className={`playlist-item ${toShow?'curr':'not'}playing`}>
            <div className="left-content">
                {/* <!-- index --> */}
                <div style={{marginRight:'4px'}}>
                    {t}
                </div>
                <div className="coverer">
                    <img src={`${props.tImg}`} alt="not available"></img>{/*src={pL1}*/}
                    <i className=" fas fa-play-circle"></i>
                </div>
                {/* <!-- name and author of the song --> */}
                <div className="name_">
                    <div style={{fontWeight:'600'}}>
                        {props.tName}
                    </div>
                    <p style={{fontStyle:"italic",fontSize:'75%'}}>
                        {props.tsinger.length>20?(props.tsinger.slice(0,20) + '....'):props.tsinger}
                    </p>
                </div>
            </div>
        {/* <!-- like button --> */}
        <div className="right-content">
            <i className="far fa-heart"></i>
        </div>
    </div>
    <hr className="separator"/>
    </>
  );
}
