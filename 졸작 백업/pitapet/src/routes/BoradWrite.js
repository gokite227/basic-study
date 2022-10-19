import { dbService, storageService  } from "fbase";
import React, { useEffect, useState } from "react";
import {v4 as uuidv4 } from "uuid";


const BoradWrite = ({userObj}) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState();

  const onSubmit= async (event) => {
    event.preventDefault();
    //뉴윗 추가
    let attachmentUrl = "";
    if (attachment != "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("mweet").add(nweetObj);
    setNweet("");
    setAttachment("");
  };
  const onChange = (event) => {
    const{
        target: {value},
    } = event;
    setNweet(value);
  };
  const onFilechange =(event) => {
      const {
          target : {files},
      } =event;
      const theFile = files[0];
      const reader = new FileReader();
      reader.onloadend = (finishedEvent)=> {
        const {
          currentTarget: { result },
        } = finishedEvent;
        setAttachment(result);
      };
      reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setAttachment(null);
    return (
      <div>
        <text fill="#ede9de">게시글 입력</text>
            <form onSubmit={onSubmit}>
                <input 
                    value={nweet} 
                    onChange={onChange} 
                    type="text" 
                    placeholder="What's on your maid?" 
                    maxLength={120}
                />
                <input type="file" accept="image/*" onChange={onFilechange} / >
                <input type="submit" value="쓰기"/>
                {attachment && (
                  <div>
                    <img src={attachment} width="50px" height="50px" />
                    <button onClick={onClearAttachment}>Clear</button>
                  </div>
                )}
            </form>
      </div>
    );
  }
  
  
  export default BoradWrite;