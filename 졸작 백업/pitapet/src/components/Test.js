import Nweet from "components/Nweet";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import "resources/css/borad.css";
import { Link } from "react-router-dom";




const Test = ({ClaObj}) => {
  return (
    <div>
      <div>      
        {ClaObj.weight}:{ClaObj.dry}:{ClaObj.wet}:{ClaObj.water}:{ClaObj.poo}:{ClaObj.symptom}:{ClaObj.vomit}:{ClaObj.diary}
        </div>
    </div>
  );
}


export default Test;
