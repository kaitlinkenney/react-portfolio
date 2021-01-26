import React from 'react';


function Card (props) {
    return (
        <div>
            <div className="card" style={{ width: "800px", background: "#215", height: "200px"}}>
  <div className="card-body">
    <h5 className="card-title font-style: bold size: 25px pb-12" style={{color: "white"}}>Hi, I'm Kaitlin!</h5>
    <h6 className="card-subtitle" style={{color: "white"}}>I'm a full stack developer from Cape May, New Jersey.</h6>
    <p className="card-text"></p>
  </div>
</div>
        </div>
    )
}

export default Card;