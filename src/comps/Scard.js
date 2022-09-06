import React,{useRef,useState,useEffect,useContext} from 'react';
import './../css/Stylesheet_main.css';
import songContext from '../context/songContext';
import MusicDetail from './../js/SongDetails'
export default function Scard(props) {
    const card  = useRef();
    const song_context = useContext(songContext)
    
    const [toShow, settoShow] = useState(song_context.play);
        
    function chgCurrSongStyle(){
        
        if(song_context.currSong+song_context.currarr+1===props.SongId){
            settoShow(true)
        }else{settoShow(false)}
    }
    useEffect(() => {
      if(song_context.play){
        chgCurrSongStyle()
      }
    }, [song_context.currSong]);
    
    useEffect(() => {
        if(song_context.play){
          chgCurrSongStyle()
        }else{
          settoShow(false)
        }
    }, [song_context.play]);

    
  function setting(){
    if(card.current.accessKey==='0'){
      song_context.setsongDet(MusicDetail.HindiMusicDetail)
    }
    if(card.current.accessKey==='10'){
      song_context.setsongDet(MusicDetail.EnglishMusicDetail)
    }
    if(card.current.accessKey==='20'){
      song_context.setsongDet(MusicDetail.PunjabiMusicDetail)
    }
  }
  function plycard(){
    setting();
    song_context.loadCrdMus(parseInt(card.current.attributes.song.value)-1,parseInt(card.current.accessKey));    
  }
    
  return (
    <div ref={card} onClick={plycard} className={`${toShow?'curr':'not'}playing`} id="h1" accessKey={props.arrRef} song={props.SongId} >
        <div  ><img src = {props.img} alt="img not found" />
        <i className=" fas fa-play-circle"></i></div>
        <p data-bs-toggle="tooltip" data-bs-placement="top" title={`${props.name}`}>{props.name}</p>
        <span data-bs-toggle="tooltip" data-bs-placement="top" title={`${props.singer}`}>{props.singer.length>20?(props.singer.slice(0,20) + '....'):props.singer}</span> 
    </div>
  );
}
