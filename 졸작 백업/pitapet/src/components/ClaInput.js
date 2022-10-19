import Nweet from "components/Nweet";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import "resources/css/borad.css";
import { Link } from "react-router-dom";




const ClaInput = ({name, value, onChange ,type, placeholder, maxLength, img}) => {
    const src = `resources/imgs/${img}.png`
    console.log(src);
    return (
    <div style={{float: "left"}}>
        <div>
            <img src={require(`resources/imgs/${img}.png`)} style={{width:"50px", height:"50px"}}/>
            <input 
                name={name}
                value={value} 
                onChange={onChange} 
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
            />
        </div>
        {/* require('/images/image-name.png') */}
    </div>
  );
}


export default ClaInput;