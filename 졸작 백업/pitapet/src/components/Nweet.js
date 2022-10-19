import { dbService } from "fbase";
import React, { useState } from "react";
import "resources/css/borad.css";

const Nweet = ({nweetObj, isOwner}) =>{
    const[editing, setEditing] = useState(false);
    const[newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
       
        if (ok) {
            await dbService.doc(`mweet/${nweetObj.id}`).delete();
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(nweetObj, newNweet);
        await dbService.doc(`mweet/${nweetObj.id}`).update({
            text: newNweet,
        });
        setEditing(false);
    };
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewNweet(value);
    };

    return(
        <div>
            {editing ? (
                <>
                    <form onSubmit = {onSubmit}>
                        <input
                            type="text"
                            placeholder="Edit your nweet"
                            value={newNweet}
                            required
                            onChange={onChange}
                        />
                        <input type ="submit" value="Update Nweet" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ):(
                <>
                <div class="CardContainer">
                    <div class="CardBox">
                        <svg width="100%" height="100%">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#6b5645"/>
                            <rect y="20%" width="100%" height="80%" fill="#dcd9d4"/>
                            <text fontSize="20px"font-weight="900" x="20%" y="50%" fill="#6b5645" dy=".3em">{nweetObj.text}</text>
                            
                        </svg>
                        {nweetObj.attachmentUrl && (
                            <img src={nweetObj.attachmentUrl} width="50px" height="50px" />
                        )}
                    </div>
                    
                    
                </div>
                    {isOwner && (
                        <>
                        <button onClick={onDeleteClick}>Delete</button>
                        <button onClick={toggleEditing}>Edit</button>
                        </>
                    )}
                </>
            )}
            
        </div>
    );
};

export default Nweet;