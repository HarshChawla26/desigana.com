import './App.css';

import './js/Hsongscript';
import MusicDetail from './js/SongDetails'
import React,{ useState ,useEffect} from 'react';
import Navbar from './comps/Navbar';
import SignUpForm from './comps/SignUpForm';
import Footer from './comps/Footer';
import Tabs from './comps/Tabs';
import Queue from './comps/Queue';
import Main from './comps/Main';
import './css/Stylesheet_main.css';



function App() {

  // window.addEventListener("")  
  
  const [songDet,setsongDet] = useState(MusicDetail.Default),
  [isLogged, setisLogged] = useState(sessionStorage.getItem('isLogged')),
  [username, setusername] = useState(''),
  [password, setpassword] = useState(''),
  [currarr, setcurrarr] = useState(songDet[0].arrRef),
  [currSong, setcurrSong] = useState(songDet[0].SongId-currarr-1),  
  [data,setData] = useState(''),
  [play, setplay] = useState(false);
  const def = 'Nothing To play';
  window.addEventListener('load',()=>{

  })
  useEffect(() => {
    
    QueueHeading();
  }, [songDet]);
  if(sessionStorage.getItem('isLogged')===false||!isLogged){
    
    return <SignUpForm
        uname = {username}
        pwd = {password}
        setuname = {setusername}
        setpwd = {setpassword}
        setisLogged = {setisLogged}
      ></SignUpForm>
  }
  function QueueHeading(){
    if(songDet===MusicDetail.Default){
      setData(def)
    }else{setData('Playing Now')}
  }
  window.addEventListener("load",()=>{
    if(songDet===MusicDetail.Default){
      QueueHeading()
    }else{setData('Playing Now')}
  })
  
  
  function loadMusic(indexNum){
    setcurrSong(indexNum-currarr);   
  }

  function load(ind,cu){
    setcurrarr(cu)
    setcurrSong(ind-cu)

  }
  
  function loadCrdMus(ind,cu){
    setcurrarr(cu)
    load(ind,cu);
  }

  
  return (
    isLogged&&<><>
      <Navbar 
        isLogged = {isLogged}
      />
      <div className="container" style={{marginLeft:'1px',maxWidth: '99.9vw',height:'40vh' }} >
      <div className="row" style={{height:'80vh'}}>
        <Tabs></Tabs>
        <Main
          play={play}
          setsongDet={setsongDet}
          setcurrarr={setcurrarr}
          playMus={loadCrdMus}
          songDet={songDet} 
          currSong={currSong} 
          setcurrSong={setcurrSong} 
          currarr={currarr}
         />
        <Queue
          loadMusic={loadMusic}
          currarr={currarr}
          currSong={currSong}
          play={play}
          def={def}data={data}
          songDet={songDet}
        />
      </div></div>
    </> 
    <Footer 
      isplay={play}
      setisplay={setplay}
      setsongDet={setsongDet}
      songDet={songDet}
      currarr={currarr} 
      Sid={songDet[currSong].SongId}
      Sname={songDet[currSong].name}
      playMus={loadMusic} 
      Asrc={songDet[currSong].song} 
      singer={songDet[currSong].singer} 
      imgS={songDet[currSong].img} 
      dur={songDet[currSong].duration}
    />
    </>
  );
}

export default App;
