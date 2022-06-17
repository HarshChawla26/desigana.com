import MusicDetail from './../js/SongDetails'
import './../comps/Footer'
// const hiSArr = MusicDetail.HindiMusicDetail;
// console.log( hiSArr[1].singer);
/* important selectors declarations *
const playing = document.querySelector("#footer"),
songName = playing.querySelector(".active-song-description .song-desc #song-name"),
singerName = playing.querySelector(".active-song-description .song-desc #singer-name"),
songImg = playing.querySelector(".active-song-description #song-image #song-image1"),
mainSong = document.querySelector(".player audio"),
repSong = document.querySelector(".player #rep"),

profileSec = document.querySelector(".profile-picture"),
profileDisp = document.querySelector(".profile-picture .details"),
expandHindi = document.querySelector(".hindi"),
expandEng = document.querySelector(".english"),
progress = document.querySelector(".progress"),
volume  = document.querySelector(".volume"),
MusicSel1 = document.querySelector(".hindi .language-content #h1"),
MusicSel2 = document.querySelector(".hindi .language-content #h2"),
MusicSel3 = document.querySelector(".hindi .language-content #h3"),
MusicSel4 = document.querySelector(".hindi .language-content #h4"),
MusicSel5 = document.querySelector(".hindi .language-content #h5"),
MusicSel6 = document.querySelector(".hindi .language-content #h6"),
MusicSel7 = document.querySelector(".hindi .language-content #h7"),
MusicSel8 = document.querySelector(".hindi .language-content #h8"),
MusicSel9 = document.querySelector(".hindi .language-content #h9"),
MusicSel10 = document.querySelector(".hindi .language-content #h10"),
HindiArray = [MusicSel1,MusicSel2,MusicSel3,MusicSel4,MusicSel5,MusicSel6,MusicSel7,MusicSel8,MusicSel9,MusicSel10]
;
/*number for default song loading on window loading*/
// let musicNumb = 2;
// var songId = 0;

/*function to show names on card when the window load*
function disp(){
    for(var i = 1;i<hiSArr.length;i++){
        const a =HindiArray[i-1];
        a.querySelector("p").innerHTML = hiSArr[i].name;
        a.querySelector("span").innerHTML = hiSArr[i].singer;
    }
}

function checkVol(){
    var volWid = window.getComputedStyle(volume).width;
    var clickedWid2 = document.querySelector(".dot2");
    var p = window.getComputedStyle(clickedWid2).width;
    console.log(p + " / "+ volWid);
    var totVol = (parseInt(p)/parseInt(volWid));
    console.log(totVol);
    return totVol;
}


/*eventHandler for volume*
volume.addEventListener("click",(eve)=>{
    changeVol(eve);
})
/*function to change vol*
function changeVol(event2){
    var volWid = volume.clientWidth;
    var clickedWid2 = event2.offsetX;
    var totVol = (clickedWid2/volWid);
    mainSong.volume = totVol;
    document.querySelector(".dot2").style.width = (totVol*100) + "%";
    document.querySelector(".dot2 div").style.left = (totVol*100) + "%";
}


/*Toggle replay switch *
const o = repSong.querySelector("a");
o.addEventListener("click",()=>{
    if(mainSong.loop){
        mainSong.loop = false;
        document.querySelector("#rep").setAttribute('title','Replay is off');
        document.querySelector("#rep a").style.color = 'rgba(255, 254, 254, 0.767)';
    }else{
        mainSong.loop = true;
        document.querySelector("#rep").setAttribute('title','Replay is on');
        document.querySelector("#rep a").style.color = 'white';
    }
})

/*Binding some keyboard keys *
document.addEventListener("keydown",(event)=>{
    if(event.keyCode == '32' ){
        toggleMusic();
    }
    if(event.keyCode == '37' ){
        changeMusic(1);
    }
    if(event.keyCode == '39' ){
        changeMusic(2);
    }
})



// var g = document.getElementById("shuf");
// g.classList.add("shufOff");

// g.addEventListener("click",()=>{
//     check = g.classList.contains("shufOff");
    
//     if(check){
//         shuffleMusic();
//         g.style.color = 'red';
//         g.classList.remove("shufOff");
//     }else{
//         g.style.color = 'rgba(255, 254, 254, 0.767)';
//         g.classList.add("shufOff");    
//     }
// })

// function shuffleMusic(){
//     var n = parseInt(Math.floor(Math.random()*6));
//     if(mainSong.ended){
//         console.log(n);
//         loadMusic(n+1);
//         mainSong.play();
//     }
// }

/*function to update song progress user defined *
progress.addEventListener("click",(event)=>{
    var progressWid = progress.clientWidth;
    var clickedWid = event.offsetX;
    mainSong.currentTime = (clickedWid/progressWid)*mainSong.duration;
})

// document.querySelector("#vol").addEventListener("click",()=>{
//     if(checkVol()>0){
//         document.querySelector("#vol .volswitch1").style.display = 'none';
//         document.querySelector("#vol .volswitch2").style.display = 'block';
//         mainSong.volume = 0;
//     }else{
//         document.querySelector("#plpau .volswitch1").style.display = 'block';
//         document.querySelector("#plpau .volswitch2").style.display = 'none';
        
//     }
// })


expandHindi.querySelector("span a").addEventListener("click",()=>{
    
    if(expandHindi.querySelector(".language-content").classList.contains("expanded")){
        expandHindi.querySelector("span a svg").setAttribute("style","transform:rotate(360deg)");
        expandHindi.querySelector(".language-content").classList.remove("expanded");
        expandHindi.querySelector(".language-content").setAttribute("style","height:37vh");

    }else{
        expandHindi.querySelector("span a svg").setAttribute("style","transform:rotate(180deg)");
        expandHindi.querySelector(".language-content").classList.add("expanded");
        expandHindi.querySelector(".language-content").setAttribute("style","height:76vh");
    }
})
expandEng.querySelector("span a").addEventListener("click",()=>{
    if(expandEng.querySelector(".language-content").classList.contains("expanded")){
        expandEng.querySelector("span a svg").setAttribute("style","transform:rotate(360deg)");
        expandEng.querySelector(".language-content").classList.remove("expanded");
        expandEng.querySelector(".language-content").setAttribute("style","height:37vh");
    }else{
        expandEng.querySelector("span a svg").setAttribute("style","transform:rotate(180deg)");
        expandEng.querySelector(".language-content").classList.add("expanded");
        expandEng.querySelector(".language-content").setAttribute("style","height:76vh");
    }
})

profileSec.addEventListener("click",()=>{
    displayProfile();
    })
function displayProfile(){
    console.log('I am here');
    if(profileDisp.classList.contains('d-none')){
        profileDisp.classList.add("d-flex");
        profileDisp.classList.remove("d-none");
    }else{
        profileDisp.classList.add("d-none");
        profileDisp.classList.remove("d-flex");
    }

}


// const cust = require('./profiles.json');
// console.log(cust.name);*/
