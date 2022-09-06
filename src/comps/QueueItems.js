import React,{useState,useEffect} from 'react';
import './../css/Stylesheet_main.css';

export default function QueueItems(props) {

    const [toShow, settoShow] = useState(props.play);
    let t=props.tNo;  
        
    const chgCurrSongStyle = ()=>{
        
        if(props.currSong+props.currarr+1===props.tNo){
            settoShow(true)
        }else{settoShow(false)}
    } 
    // useEffect(() => {
    //     if(props.play){
    //         chgCurrSongStyle()
    //     }
    // }, [props.currSong]);
    useEffect(() => {
        if(props.play){
            chgCurrSongStyle()
        }else{
            settoShow(false)
        }
    }, [props.play]);
    if(t<10&&t>0){
        t = '0' + props.tNo;
    }
    else{t= props.tNo - props.currarr;if(t<10&&t>0){
        t = '0' + t;
    }}
    function plyQue(){
        props.loadMusic(props.tNo-1);
          
    }
  return (
      <>
    <div onClick={plyQue} className={`playlist-item ${toShow?'curr':'not'}playing`}>
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
                        {props.tsinger}
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
