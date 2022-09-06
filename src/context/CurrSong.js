import React,{useState,useEffect} from "react";
import SongContext from "./songContext";
import MusicDetail from "./../js/SongDetails.json"
const CurrSong = (props)=>{
    // State declarations
    const [songDet, setsongDet] = useState(MusicDetail.HindiMusicDetail);
    const [currarr, setcurrarr] = useState(songDet[0].arrRef);
    const [currSong, setcurrSong] = useState(songDet[0].SongId - currarr - 1);
    const [play, setplay] = useState(false);
    const [songobj, setsongobj] = useState(songDet[currSong]);

    useEffect(() => {
        setsongobj(songDet[currSong])
    }, [currSong]);

    //functions to load the song
    function loadMusic(indexNum) {
        setcurrSong(indexNum - currarr);
      }
    
      function load(ind, cu) {
        setcurrarr(cu);
        setcurrSong(ind - cu);
      }
    
      function loadCrdMus(ind, cu) {
        setcurrarr(cu);
        load(ind, cu);
      }


    return (
        <SongContext.Provider value={{songDet,currarr,currSong,play,loadMusic,load,loadCrdMus,setplay,songobj,setsongDet}}>
            {props.children}
        </SongContext.Provider>
    )
}
export default CurrSong;