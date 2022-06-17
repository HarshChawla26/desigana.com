import React,{useState} from 'react';
import logo from './../media/logo/music_logo.png';
import notbel from './../media/not_bell/bell_icon.svg';
import pr from './../media/profile/generalProfile.png';
import LogDetails from './../js/LoginDetails.json'
import './../css/Stylesheet_main.css';
// import signPage from './signUpForm.js'
import Musicarray from './../js/SongDetails';
export default function Navbar(props) {
    var current = new Date();
    const [greet, setgreet] = useState('');
    var obj;
    var i= 0;
    while(i<LogDetails.Details.length){
        if(LogDetails.Details[i].username==localStorage.getItem('username')){
            obj = LogDetails.Details[i];
        }
        i++;
    }
    window.addEventListener('load',()=>{
        if(current.getHours()<12){
            setgreet('Good Morning')
        }else if(current.getHours()==12){
            setgreet('Good Noon')
        }else if(current.getHours()>12&&current.getHours()<16){
            setgreet('Good Afternoon')
        }
        if(current.getHours()>16){
            setgreet('Good Evening')
        }
    })
    
    const signout = ()=>{
        sessionStorage.removeItem('isLogged')
        localStorage.removeItem('username')
        localStorage.removeItem('password')
    }
    window.addEventListener('load',()=>{
        const searchText = document.getElementById("searchText");
        // const searchBtn = document.getElementById("srch-btn");
        searchText.addEventListener('keyup',(e)=>{
            const searchString = e.target.value.toLowerCase();
            // console.log( e.target.value);
            const filSongsH = Musicarray.HindiMusicDetail.filter((song)=>{
                return song.name.toLowerCase().includes(searchString);
            })
            const filSongsE = Musicarray.EnglishMusicDetail.filter((song)=>{
                return song.name.toLowerCase().includes(searchString);
            })
            const filSongsP = Musicarray.PunjabiMusicDetail.filter((song)=>{
                return song.name.toLowerCase().includes(searchString);
            })
            
        })

    })
    const [isshowProf, setisshowProf] = useState(false);
    const [isshowres, setisshowres] = useState(false);
    function togOpt(){
        if(isshowProf){
            setisshowProf(false)
        }else{
            setisshowProf(true);
        }
    }
    function togRes(){
        if(isshowres){
            setisshowres(false)
        }else{
            setisshowres(true);
        }
    }
    
  return (
    <nav className="navigation-bar in-progress">
        {/* this div contains the logo and title os the page */}
        <div className="title-combo in-progress">
            <div className="website-logo">  
                <img alt="" src={logo}/>
            </div>
            <div className="website-name">
                <p style={{fontSize:'1.8rem',fontFamily:'Century Schoolbook'}}>
                        Musify.com
                </p>
                <p>
                    Music Streamer
                </p>
            </div>
        </div>
        {/*  this is for search bar*/}
        <div className="search-bar in-progress">
            <p style={{'position':'absolute','left':'-4%','color':'white','fontWeight':'700'}}>{greet} {obj.name}</p>
            <input  onClick={togRes} type="text" name="search" id="searchText" placeholder="Search....." />
            <div className="search-ico">
                {/* <!-- magnifying glass- search icon --> */}
                <button className="btn srch-btn" type="button"><i className="fas fa-search "></i></button>
            </div>
            <div className={`search-results d-${isshowres?'flex':'none'} in-progress`}>
                    <div className="in-progress">
                        <img alt='No Image' id='search-img' src='#' ></img>
                        <span id="search-name">Name</span>
                        <a style={{textDecoration: "none",color: "inherit"}} href="/">Profile</a>
                        <span id='dur'>0:00</span>
                    </div>
                    
                    <div className="in-progress">
                    <img alt='No Image' id='search-img' src='#' ></img>
                        <span id="search-name">Name</span>
                        <a style={{textDecoration: "none",color: "inherit"}} href="/">Favs</a>
                        <span id='dur'>0:00</span>
                    </div>
                    
                    <div className="in-progress">
                    <img alt='No Image' id='search-img' src='#' ></img>
                        <span id="search-name">Name</span>
                        <a style={{textDecoration: "none",color: "inherit"}} href="/">Something</a>
                        <span id='dur'>0:00</span>
                    </div>
                    
                    <div className="in-progress">
                    <img alt='No Image' id='search-img' src='#' ></img>
                        <span id="search-name">Name</span>
                        <a style={{textDecoration: "none",color: "inherit"}} href="/">Sign in</a>
                        <span id='dur'>0:00</span>
                    </div>
                    
                    <button className='btn btn-primary position-absolute' onClick={togRes}>close</button>
                </div>
        </div>
        <div className="profile-area in-progress">
            {/* <!-- this is for notification bell --> */}
            <div className="notification-bell in-progress">
                <img src={notbel}/>
                
            </div>
            {/* <!-- this is for profile picture --> */}
            <div className="profile-picture in-progress">
                <span><img className="in-progrxess" onClick={togOpt} src={pr}/>
                <span onClick={togOpt}><i className="fas  in-progxress fa-caret-down"></i></span>
                </span>
                <div className={`details d-${isshowProf?'flex':'none'} in-progredss`}>
                    <div className="in-progredss"><a style={{textDecoration: "none",color: "inherit"}} href="/">Profile</a></div>
                    <div className="in-progredss"><a style={{textDecoration: "none",color: "inherit"}} href="/">Favs</a></div>
                    <div className="in-progredss"><a style={{textDecoration: "none",color: "inherit"}} href="/">Something</a></div>
                    <div className="in-progredss"><a style={{textDecoration: "none",color: "inherit"}} onClick={signout} href='join.html'>sign out</a></div>
                </div>
            </div>
            
        </div>
    </nav>
  );
}
