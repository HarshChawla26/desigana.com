import React,{useRef,useState,useEffect} from 'react';
import './../css/Stylesheet_main.css';
import MusicDetail from './../js/SongDetails'
export default function Scard(props) {
    const crd  = useRef();
    
    const [toShow, settoShow] = useState(props.play);
    let t=props.SongId;  
        
    function yes(){
        
        if(props.currSong+props.currarr+1==props.SongId){
            settoShow(true)
        }else{settoShow(false)}
    }
    useEffect(() => {
      if(props.play){
      yes()}
    }, [props.currSong]);
    useEffect(() => {
        if(props.play){
          yes()
        }else{
          settoShow(false)
        }
    }, [props.play]);

    
    function as(){
      if(crd.current.accessKey==='0'){
      console.log('Hindi');props.setsongDet(MusicDetail.HindiMusicDetail)
      }
      if(crd.current.accessKey==='10'){
        console.log('English');props.setsongDet(MusicDetail.EnglishMusicDetail)
      }
      if(crd.current.accessKey==='20'){
        console.log('Punjabi');props.setsongDet(MusicDetail.PunjabiMusicDetail)
      }
    }
    const Punjabi = 'Punjabi'
    function plyCrd(){
      as();
      props.playMus(parseInt(crd.current.attributes.song.value)-1,parseInt(crd.current.accessKey));
        
  }
  return (
    <div  ref={crd} className={`${toShow?'curr':'not'}playing`} id="h1" onClick={plyCrd} accessKey={props.arrRef} song={props.SongId} >
        <div  ><img src = {props.img} />
        <i className=" fas fa-play-circle"></i></div>
        <p data-bs-toggle="tooltip" data-bs-placement="top" title={`${props.name}`}>{props.name}</p>
        <span data-bs-toggle="tooltip" data-bs-placement="top" title={`${props.singer}`}>{props.singer.length>20?(props.singer.slice(0,20) + '....'):props.singer}</span> 
    </div>
  );
}
