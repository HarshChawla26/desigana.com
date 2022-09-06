import {React} from 'react';

import MusicDetail from './../js/SongDetails'

import cr1 from './../media/crousel/carousel1.jpg';
import cr2 from './../media/crousel/carousel2.png';
import cr3 from './../media/crousel/carousel3.jpg';
import lR1 from './../media/latest english/posters/closer.png';
import lR2 from './../media/latest english/posters/at_my_worst.png';
import lR3 from './../media/latest hindi/posters/jugnu.png';
import lR4 from './../media/latest hindi/posters/main_chala.png';
import lR5 from './../media/latest_punjabi/posters/ykwim.png';
import lR6 from './../media/latest_punjabi/posters/excuses.png';
import pA1 from './../media/popular artists/adele.jpg';
import pA2 from './../media/popular artists/billie eilish.jpg';
import pA3 from './../media/popular artists/arijit singh.jpg';
import pA4 from './../media/popular artists/Camila Cabello.jpg';
import pA5 from './../media/popular artists/darshan raval.jpg';
import pA6 from './../media/popular artists/ed sheeran.jpg';
import pA7 from './../media/popular artists/eminem.jpg';
import pA8 from './../media/popular artists/Katy perry.jpg';
import pA9 from './../media/popular artists/rudy mancuso.jpg';
import pA10 from './../media/popular artists/snoop dogg.jpg';
import './../css/Stylesheet_main.css';
import Scard from './Scard';

export default function Main(props) {
    

    const hiSArr = MusicDetail.HindiMusicDetail,
    j = MusicDetail.EnglishMusicDetail,
    k = MusicDetail.PunjabiMusicDetail;
    window.addEventListener("load",()=>{
        // console.log(props.songDet);
    // props.playMus(26)
    })
    
  
      

  return (
    <div className="col-md-7 col-sm-8 col-12 in-progress" style={{height:'inherit',overflow:'scroll'}}>
        <aside className="aside section-1">     
            {/* <!-- this is for the carousel --> */}
            <div className="outer-carousel">
                <div className="carousel">
                    {/* <!-- these are the 3 images in the carousel --> */}
                    <img src={cr1}  alt="not available"/>
                    <img src={cr2} alt="not available"/>
                    <img src={cr3} alt="not available"/>
                </div>
            </div>
            <div className="latest-release">
                <h1 style={{marginBottom: '12px'}}>
                    Latest Release
                </h1>
                {/* <!-- this is the content of the latest release section --> */}
                {/* <!-- it will contain the "cards" --> */}
                <div className="latest-release-content">
                    {/* <!-- first card --> */}
                    <div className="card">
                        <div>
                            {/* <!-- image corresponding to the card --> */}
                            <img src={lR1} alt="not available" />
                            {/* <!-- play button, which will be shown on hover on the card image --> */}
                            <div className="play-button">
                                <i className="fas fa-play" style={{width:'100%', height:'100%', display:'inline-block'}}></i>
                            </div>
                        </div>
                        {/* <!-- it will contain the name and date of release of the song --> */}
                        <div className="">
                            <p>
                                Closer
                            </p>
                            <p>
                                Aug 11, 2017
                            </p>
                        </div>
                        {/* <!-- if someone clicks on the three dots, options will be shown to the user for further action --> */}
                        <div className="options">
                            <label htmlFor="latest-release-checkbox"><i className="fas fa-ellipsis-h"></i></label>
                            <input type="checkbox" id="latest-release-checkbox"/>
                            <div className="latest-release-dropdown">
                                <div className="drop-item">
                                    {/* <!-- if user clicks on play now button, he/she will be taken to the single playlist page --> */}
                                    <p><i className="fas fa-play-circle"></i> <a href="Single Playlist Screen.html">Play
                                            Now</a></p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-list-ul"></i> Add to Queue</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-music"></i> Add to playlist</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-info-circle"></i> Get Info</p>
                                </div>
                            </div>
                            {/* <!-- duration of the song --> */}
                            <p>
                                4:44
                            </p>
                        </div>
                    </div>
                    {/* <!-- second card --> */}
                    <div className="card">
                        <div>
                            <img src={lR2} alt="not available"/>
                            <div className="play-button">
                                <i className="fas fa-play"style={{width:'100%', height:'100%', display:'inline-block'}}></i>
                            </div>
                        </div>
                        <div className="song-description">
                            <p>
                                At My Worst
                            </p>
                            <p>
                                Aug 11, 2017
                            </p>
                        </div>
                        <div className="options">
                            <label htmlFor="latest-release-checkbox2"><i className="fas fa-ellipsis-h"></i></label>
                            <input type="checkbox" id="latest-release-checkbox2"/>
                            <div className="latest-release-dropdown">
                                <div className="drop-item">
                                    <p><i className="fas fa-play-circle"></i> <a href="Single Playlist Screen.html">Play
                                            Now</a></p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-list-ul"></i> Add to Queue</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-music"></i> Add to playlist</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-info-circle"></i> Get Info</p>
                                </div>
                            </div>
                            <p>
                                4:44
                            </p>
                        </div>
                    </div>
                    {/* <!-- third card --> */}
                    <div className="card">
                        <div>
                            <img src={lR3} alt="not available" />
                            <div className="play-button">
                                <i className="fas fa-play" style={{width:'100%', height:'100%', display:'inline-block'}}></i>
                            </div>
                        </div>
                        <div className="song-description">
                            <p>
                                Jugnu
                            </p>
                            <p>
                                Aug 11, 2017
                            </p>
                        </div>
                        <div className="options">
                            <label htmlFor="latest-release-checkbox3"><i className="fas fa-ellipsis-h"></i></label>
                            <input type="checkbox" id="latest-release-checkbox3"/>
                            <div className="latest-release-dropdown">
                                <div className="drop-item">
                                    <p><i className="fas fa-play-circle"></i> <a href="Single Playlist Screen.html">Play
                                            Now</a></p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-list-ul"></i> Add to Queue</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-music"></i> Add to playlist</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-info-circle"></i> Get Info</p>
                                </div>
                            </div>
                            <p>
                                4:44
                            </p>
                        </div>
                    </div>
                    {/* <!-- fourth card --> */}
                    <div className="card">
                        <div>
                            <img src={lR4} alt="not available"/>
                            <div className="play-button">
                                <i className="fas fa-play" style={{width:'100%', height:'100%', display:'inline-block'}}></i>
                            </div>
                        </div>
                        <div className="song-description">
                            <p>
                                Main Chala
                            </p>
                            <p>
                                Aug 11, 2017
                            </p>
                        </div>
                        <div className="options">
                            {/* <!-- NOTE THAT POSITION OF OPTIONS DIV IS RELATIVE --> */}
                            <label htmlFor="latest-release-checkbox4"><i className="fas fa-ellipsis-h"></i></label>
                            <input type="checkbox" id="latest-release-checkbox4"/>
                            <div className="latest-release-dropdown">
                                {/* <!-- POSITION OF LATEST RELEASE DROPDOWN IS ABSOLUTE TO THE RELATIVE OPTIONS. THIS IS VERY IMPORTANT AS THE DROPDOWN BOX SHOULD BE PLACED RELATIVE TO THE PARTICULAR ITEM IN THE LATEST RELEASE SECTION. IT SHOULD NOT BE ABSAOLUTE TO THE WHOLE LATEST RELEASE SECTION. THROUGH THIS PROJECT i UNDERSTOOD THE NEED OF POSITION:ABSOLUTE. ABSOLUTE POSITION AND RELATIVE ARE GENERALLY USED TOGETHER--> */}
                                <div className="drop-item">
                                    <p><i className="fas fa-play-circle"></i> <a href="Single Playlist Screen.html">Play
                                            Now</a></p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-list-ul"></i> Add to Queue</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-music"></i> Add to playlist</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-info-circle"></i> Get Info</p>
                                </div>
                            </div>
                            <p>
                                4:44
                            </p>
                        </div>
                    </div>
                    {/* <!-- fifth card --> */}
                    <div className="card">
                        <div>
                            <img src={lR5} alt="not available"/>
                            <div className="play-button">
                                <i className="fas fa-play" style={{width:'100%', height:'100%', display:'inline-block'}}></i>
                            </div>
                        </div>
                        <div className="song-description">
                            <p>
                                YKWIM
                            </p>
                            <p>
                                Aug 11, 2017
                            </p>
                        </div>
                        <div className="options">
                            <label htmlFor="latest-release-checkbox5"><i className="fas fa-ellipsis-h"></i></label>
                            <input type="checkbox" id="latest-release-checkbox5"/>
                            <div className="latest-release-dropdown">
                                <div className="drop-item">
                                    <p><i className="fas fa-play-circle"></i> <a href="Single Playlist Screen.html">Play
                                            Now</a></p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-list-ul"></i> Add to Queue</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-music"></i> Add to playlist</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-info-circle"></i> Get Info</p>
                                </div>
                            </div>
                            <p>
                                4:44
                            </p>
                        </div>
                    </div>
                    {/* <!-- sixth card --> */}
                    <div className="card">
                        <div>
                            <img src={lR6}  alt="not available"/>
                            <div className="play-button">
                                <i className="fas fa-play" style={{width:'100%', height:'100%', display:'inline-block'}}></i>
                            </div>
                        </div>
                        <div className="song-description">
                            <p>
                                Excuses
                            </p>
                            <p>
                                Aug 11, 2017
                            </p>
                        </div>
                        <div className="options">
                            <label htmlFor="latest-release-checkbox6"><i className="fas fa-ellipsis-h"></i></label>
                            <input type="checkbox" id="latest-release-checkbox6"/>
                            <div className="latest-release-dropdown">
                                <div className="drop-item">
                                    <p><i className="fas fa-play-circle"></i> <a href="Single Playlist Screen.html">Play
                                            Now</a></p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-list-ul"></i> Add to Queue</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-music"></i> Add to playlist</p>
                                </div>
                                <hr/>
                                <div className="drop-item">
                                    <p><i className="fas fa-info-circle"></i> Get Info</p>
                                </div>
                            </div>
                            <p>
                                4:44
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popular-artists">
                {/* <!-- this is the heading of popular artists section --> */}
                <h1 style={{marginBottom: '12px'}}>
                Popular Artists
                </h1>
                {/* <!-- this contains the content of the popular artists section --> */}
                <div className="popular-artist-content">
                    {/* <!-- if user clicks on any one artist, it will redirect the user to the second page --> */}
                    {/* <!-- following is the list of artists --> */}
                    {/* <!-- first artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} src={pA1} alt="not available"/>
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Adele
                            </p>
                        </div>
                    </a>
                    {/* <!-- second artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} src={pA2} alt="not available" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Billie Eilish
                            </p>
                        </div>
                    </a>
                    {/* <!-- third artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} alt="not available"  src={pA3} width="15vw" height="10vw"/>
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Arijit Singh
                            </p>
                        </div>
                    </a>
                    {/* <!-- fourth artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} alt="not available" src={pA4}/>
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Camila Cabello
                            </p>
                        </div>
                    </a>
                    {/* <!-- fifth artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} alt="not available" src={pA5}/>
                            <div><i className="fas fa-play"></i></div>
                            <p>
                            Darshan Raval
                            </p>
                        </div>
                    </a>
                    {/* <!-- 6th artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} alt="not available" src={pA6}/>
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Ed Sheeran
                            </p>
                        </div>
                    </a>
                    {/* <!-- 7th artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} alt="not available" src={pA7}/>
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Eminem
                            </p>
                        </div>
                    </a>
                    {/* <!-- 8th artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} alt="not available"  src={pA8}/>
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Katy Perry
                            </p>
                        </div>
                    </a>
                    {/* <!-- 9th artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} alt="not available" src={pA9}/>
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Rudy Mancuso
                            </p>
                        </div>
                    </a>
                    {/* <!-- 10th artist --> */}
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img style={{boxShadow:'var(--box-shadow-value)'}} alt="not available" src={pA10}  />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Snoop Dogg
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="music-themes-2">
                {/* <!-- 3 divs content --> */}
                <div className="outer-div">
                    <div className="inner-div">
                        <span>party</span>
                    </div>
                </div>
                <div className="outer-div">
                    <div className="inner-div">
                        <span>Electronic</span>
                    </div>
                </div>
                <div className="outer-div">
                    <div className="inner-div">
                        <span>Road</span>
                    </div>
                </div>
            </div>

            <div className="language english">
                {/* <!-- latest english section --> */}
                <h1 className="language-heading">
                    Latest English
                </h1>
                {/* <span><a href="#"><i className="fas fa-chevron-circle-down"></i></a></span><!--<i className="fas fa-caret-down"></i>-->    */}
                {/* <!-- contents of latest english --> */}
                <div className="language-content">
                
                {j.map((e)=>{
                    return <Scard
                            currarr={props.currarr}
                            currSong={props.currSong}
                            play={props.play}
                            setsongDet={props.setsongDet}
                            loadCrdMus={props.loadCrdMus}
                            key={e.SongId}
                            SongId={e.SongId}
                            arrRef={e.arrRef}
                            img={e.img}
                            name={e.name}
                            singer={e.singer}
                            />
                })}
                </div>
            </div>

            <div className="language hindi">
                {/* <!-- hindi section heading --> */}
                <h1 className="language-heading">
                    Latest Hindi
                </h1>
                {/* <span><a href="#"><i className="fas fa-chevron-circle-down"></i></a></span> */}
                {/* <!-- hindi section contents --> */}
                <div className="language-content">
                    {hiSArr.map((e)=>{
                    return <Scard
                                currarr={props.currarr}
                                currSong={props.currSong}
                                play={props.play}
                                setsongDet={props.setsongDet}
                                playMus={props.playMus}
                                key={e.SongId}
                                SongId={e.SongId}
                                arrRef={e.arrRef}
                                img={e.img}
                                name={e.name}
                                singer={e.singer}
                            />
                    })}
                </div>
            </div>
            <div className="language Punjabi">
                {/* <!-- Punjabi section heading --> */}
                <h1 className="language-heading">
                    Latest Punjabi
                </h1>
                {/* <span><a href="#"><i className="fas fa-chevron-circle-down"></i></a></span> */}
                {/* <!-- hindi section contents --> */}
                <div className="language-content">
                    {k.map((e)=>{
                    return <Scard
                                currarr={props.currarr}
                                currSong={props.currSong}
                                play={props.play}
                                setsongDet={props.setsongDet}
                                playMus={props.playMus}
                                key={e.SongId}
                                SongId={e.SongId}
                                arrRef={e.arrRef}
                                img={e.img}
                                name={e.name}
                                singer={e.singer}
                            />
                    })}
                    
                </div>
            </div>
        </aside>
    </div>
  );
}
