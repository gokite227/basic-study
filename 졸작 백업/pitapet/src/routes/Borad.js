import Nweet from "components/Nweet";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import "resources/css/borad.css";
import { Link } from "react-router-dom";


const Borad= ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    
    useEffect(()=> {
        //뉴윗 실시간 변동
        dbService.collection("mweet").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                
            }));
            setNweets(nweetArray);
        });
    },[]);
    return(
        <div style={{backgroundColor:"#ede9de", width: "100vw",
        height: "100vh"}}>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <button><Link class="nav-link me-lg-3" to="/Boradwrite">글 쓰기</Link></button>
            <div class="grid">
                {nweets.map((nweet) => (
                    //뉴윗 리스트 반환, 포롭스 전달
                    <Nweet 
                        key={nweet.id} 
                        nweetObj={nweet} 
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};
export default Borad;