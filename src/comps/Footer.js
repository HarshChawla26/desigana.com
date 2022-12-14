import {React,useState,useRef,useContext,useEffect} from 'react';
import './../js/Hsongscript'
import songContext from '../context/songContext';

import './../css/Stylesheet_main.css';
export default function Footer() {
    const song = useContext(songContext)
    const audioEl =  useRef(),
    durtime = useRef(null),
    currtime=useRef(),
    progress=useRef(),
    volm = useRef(),
    muteBtn = useRef();
    
    const [isPlaying, setisPlaying] = useState(false);
    const [isMuted, setisMuted] = useState(false);

    // function setvol(x){
    //     document.querySelector(".dot2").style.width = (x*100) + "%";
    //     document.querySelector(".dot2 div").style.left = (x*100) + "%";
    //     if(!isMuted){
    //         audioEl.current.volume = x;
    //     }
    // }
    // function changeVol(event){
    //     console.log(event.nativeEvent.offsetX);
    //     var volWid = volm.current.clientWidth;
    //     var clickedWid2 = event.nativeEvent.offsetX;
    //     let totVol = (clickedWid2/volWid);
    //     localStorage.setItem('vol',totVol)
        
    //     console.log(volm.current);
    //     document.querySelector(".dot2").style.width = (totVol*100) + "%";
    //     document.querySelector(".dot2 div").style.left = (totVol*100) + "%";
    //     if(!isMuted){
    //         audioEl.current.volume = totVol;
    //     }
    // }
    
    // function togglevol(){
    //     if(!isMuted){
    //         setisMuted(true)
    //         audioEl.current.volume = 0;
    //     }
    //     if(isMuted){
    //         setisMuted(false)
    //         audioEl.current.volume =  localStorage.getItem('vol');
    //         // localStorage.setItem('vol',audioEl.current.volume)
    //     }
    // }
    window.addEventListener("load",()=>{
        if(localStorage.getItem('vol')!==1){
            var x=localStorage.getItem('vol')
            localStorage.setItem('vol',x)
            // setvol(x);
        }else{
            localStorage.setItem('vol','1')
        }
    

        audioEl.current.addEventListener("timeupdate",()=>{
            Progress();
        })
        

        /*function to update song progress user defined */
        progress.current.addEventListener("click",(event)=>{
            var progressWid = progress.current.clientWidth;
            var clickedWid = event.offsetX;
            audioEl.current.currentTime = (clickedWid/progressWid)*audioEl.current.duration;
        })
        
        muteBtn.current.addEventListener("click",()=>{
            // togglevol()
        })
    })
    function Progress1(){
        audioEl.current.currentTime = (96*audioEl.current.duration)/100;
    }
    function Progress(){
        if(audioEl.current.ended){
            nexMus();
        }
        var curr = audioEl.current.currentTime;
        var total = audioEl.current.duration;  
        var currPer = (curr/total) * 100;
        
        var cmin = parseInt(curr/60);
        var csec = parseInt(curr%60);

        var z
        if(csec<10){
            z ='0';
        }else{
            z = ''
        }
        var time_upd  = "0" + cmin + ':' + z + csec ;
        currtime.current.innerText = time_upd;
        document.querySelector(".currtime").innerText = time_upd;
        document.querySelector(".dot1").style.width = currPer + "%";
        document.querySelector(".dot1 div").style.left = currPer + "%";


    }
    
    

    function toggleMusic(){
        if(!isPlaying){
            song.setplay(true)
            audioEl.current.play();
            setisPlaying(true)
        }else{
            song.setplay(false)
            setisPlaying(false)
            audioEl.current.pause();
        }
        
    }
    function preMus(){
        if((song.currSong - song.currarr - 1)<0){
         song.loadMusic(song.currSong);
        }
        else{
            song.loadMusic(song.currSong - 1);
        }
        document.querySelector(".dot1").style.width = 0 + "%";
        document.querySelector(".dot1 div").style.left = 0 + "%";

    }
    function nexMus(){
        if(((song.currSong - song.currarr)+1)>=song.songDet.length ){
            song.loadMusic(song.currSong);
        }
        else{
            song.loadMusic(song.currSong+1);
        }
        document.querySelector(".dot1").style.width = 0 + "%";
        document.querySelector(".dot1 div").style.left = 0 + "%";
        if(isPlaying){
            audioEl.current.play();}
    }
    
    
    
    
  return (<>
    <footer id="footer" className="fixed-bottom bg-darks bg-gradients">

        <div className="active-song-description">
            {/* <!-- song image --> */}
            <div id="song-image">
                <img id="song-image1"  alt="Not selected" src={song.songobj.img} />
            </div>
            {/* <!-- song name and author --> */}
            <div className="song-desc">
                <div id="song-name">
                    {song.songobj.name}
                </div>
                <p id="singer-name">
                    {song.songobj.singer}
                </p>
                {/* <!-- heart icon and ban icon --> */}
            </div>
            <div className="heart-and-ban-icon">
                <span>
                    <a href="/"><i className="far fa-heart"></i></a>
                </span>
                <span>
                    <a href="/"><i className="fas fa-ban"></i></a>
                </span>
            </div>
        </div>
        {/* <!-- these are the main player controls --> */}
        <div className="player">
    <div className="controls">
        <div data-bs-toggle="tooltip" onClick={Progress1} data-bs-placement="top" title=""><i className="fas fa-random"></i></div>
        <div data-bs-toggle="tooltip" onClick={preMus} data-bs-placement="top" title="Previous song"><i className="fas fa-step-backward"></i></div>
        <div id="pl-btn"  onClick={toggleMusic} data-bs-toggle="tooltip" data-bs-placement="top" title="Play/pause">
            <i className={`fas switch1 fa-${isPlaying?'pause-circle':'play-circle'}`}></i>
        </div>
        <div data-bs-toggle="tooltip" onClick={nexMus} data-bs-placement="top" title="Next song"><i className="fas fa-step-forward"></i></div>
        <div id="rep" data-bs-toggle="tooltip" data-bs-placement="top" title="Replay is off"><i className="fas fa-redo"></i></div>
    </div>
    {/* <!-- this is the slider --> */}
    <div id="slider">
        {/* <!-- current time --> */}
        <div ref={currtime} className="currtime">
            0:00
        </div>
        
        <audio id="audio" ref={audioEl} src={`${song.songobj.song}`} ></audio>
        <div ref={progress} className="slidecontainer progress">
            <div className="slider progress-bar dot1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div></div></div>
        </div> 
        {/* <!-- total time --> */}
        <div ref={durtime} className="tottime">
            {/* {props.dur} */}
            {song.songobj.duration}
        </div>
        </div>
        </div>
        {/* <!-- other icons including the volume slider and all --> */}
        <div className="extras">
            {/* <!-- <p></p> --> */}
            <div>
               <a href="/" id="plist"><i className="fas fa-list-ul"></i></a>
            </div>
            <div>
                <a href="/" id="lap"><i className="fas fa-laptop"></i></a>
            </div>
            <div className="mute-btn">
                <i className={`fas fa-volume-${isMuted?'mute':'up'}`}></i>
                
            </div>
            <div ref={volm} className="slidecontainer volume progress">
                <div className="slider progress-bar dot2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div></div></div>
            </div> 
            {/* <!-- <div>
                <i className="fas fa-expand-alt"></i>
            </div> --> */}
        </div>
    </footer>
    </>
  );
}
// onclick={/*changeMusic(1)*/}
// onclick={/*toggleMusic()*/} 
// onclick={/*changeMusic(2)*/}