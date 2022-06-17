import React from 'react';

import './../css/Stylesheet_main.css';
export default function Tabs() {
  return (
      <div className="col-2 d-none d-md-block in-progress" style={{padding:'1px', height: 'inherit',overflow:'scroll'}}>
        <div className="Imp-links">
            <a href="/"><div><span><i className="fas fa-home"></i></span> Home</div></a><hr className="separator"/>
            <a href="/"><div><span><i className="fas fa-search"></i></span> Search</div></a><hr className="separator"/>
            <a href="/"><div><span><i className="far fa-heart"></i></span> Favourites</div></a>
        </div>
      </div>
  );
}

