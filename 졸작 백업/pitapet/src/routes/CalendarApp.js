import Test from "components/Test";
import ClaInput from "components/ClaInput";
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "resources/css/calendar2.css";
import moment, { isDate } from 'moment';
import { dbService } from "fbase";
import Ttest from "./CalBackup";


const CalendarApp = ({userObj}) => {
  const [Cla, setCla] = useState({
    weight: '',
    dry: '',
    wet:'',
    snack:'',
    water:'',
    poo:'',
    symptom:'',
    vomit:'',
    heart:'',
    diary:'',
  });
  const [Clas, setClas] = useState([])
  const {weight, dry, wet, snack ,water, poo, symptom, vomit, heart ,diary}  = Cla;
  const [date, setDate] = useState(new Date());
  
  const onSubmit= async (event) => {
    event.preventDefault();
    //뉴윗 추가
    await dbService.collection("Claendar").add({
        weight:weight,
        dry:dry,
        wet:wet,
        snack:snack,
        water:water,
        poo:poo,
        symptom:symptom,
        vomit:vomit,
        diary:diary,
        createDate: moment(date).format("YYYY년 MM월 DD일"),
        creatorId: userObj.uid,
    });
    setCla({
      weight: '',
      dry: '',
      wet:'',
      snack:'',
      water:'',
      poo:'',
      symptom:'',
      vomit:'',
      heart:'',
      diary:'',
    });
  };
  const onChangeCla = (event) => {
    const {name, value} =event.target;
    setCla({
      ...Cla,
      [name]:value
    });
  };
  const onFilechange =(event) => {
      const {
          target : {files},
      } =event;
      const theFile = files[0];
      const reader = new FileReader();
      reader.onloadend = (finishedEvent)=> {
          console.log(finishedEvent);
      };
      reader.readAsDataURL(theFile);
  };
  useEffect(()=> {
    //뉴윗 실시간 변동
    dbService.collection("Claendar").onSnapshot((snapshot) => {
        const claArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setClas(claArray);
      });
  },[]);
  return (
    <div>
      <div style={{float: "left"}}>
        <div className='calendar-container'>
        
        <Calendar onChange={setDate} value={date} formatDay={(locale, date) => moment(date).format("DD")} />
        </div>
        <div className="text-gray-500 mt-4">
          {moment(date).format("YYYY년 MM월 DD일")} 
        </div>
      </div>
      <text fill="#ede9de">상태</text>
            <form onSubmit={onSubmit}>
              <div>
              <ClaInput 
                name='weight'
                value={weight} 
                onChange={onChangeCla} 
                type="text" 
                placeholder="weight" 
                maxLength={120}
                img="icon01"
                
              />

              <ClaInput 
                name='dry'
                value={dry} 
                onChange={onChangeCla} 
                type="text" 
                placeholder="dry" 
                maxLength={120}
                img="icon02"
              />

              <ClaInput 
                name='wet'
                value={wet} 
                onChange={onChangeCla} 
                type="text" 
                placeholder="wet" 
                maxLength={120}
                img="icon03"
              />  
              <ClaInput 
                name='snack'
                value={snack} 
                onChange={onChangeCla} 
                type="text" 
                placeholder="snack" 
                maxLength={120}
                img="icon04"
              />                  
                
                <ClaInput 
                name='water'
                value={water} 
                onChange={onChangeCla} 
                type="text" 
                placeholder="water" 
                maxLength={120}
                img="icon05"
              />                
              </div>
              <div>
              <ClaInput 
                name='poo'
                value={poo} 
                onChange={onChangeCla} 
                type="text" 
                placeholder="poo" 
                maxLength={120}
                img="poo"
              />  
              
              <ClaInput 
                name='symptom'
                value={symptom} 
                onChange={onChangeCla} 
                type="text" 
                placeholder="symptom" 
                maxLength={120}
                img="icon07"
              />                
                
              <ClaInput 
                name='vomit'
                value={vomit} 
                onChange={onChangeCla} 
                type="text" 
                placeholder="vomit" 
                maxLength={120}
                img="icon08"
              />                                
              
              <ClaInput 
                name='diary'
                value={diary} 
                onChange={onChangeCla} 
                type="text" 
                placeholder="diary" 
                maxLength={120}
                img="icon09"
              />
              </div>
              <div>                            
              <input type="submit" value="쓰기"/>
              </div>
            </form>
            
            <div>
              {Clas.map((cla) => {
                if(cla.creatorId === userObj.uid && cla.createDate === moment(date).format("YYYY년 MM월 DD일")) {
                  console.log(true);
                  return <Test key={cla.id} ClaObj={cla} />
                }
                
              })}
            </div>
    </div>
  );
}


export default CalendarApp;

{/* <Test key={cla.id} ClaObj={cla} /> */}
// {isOwner && isDate &&(
//   <>
//     안녕
//   </>
// )}