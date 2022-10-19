import React, { useEffect } from 'react'


const { kakao } = window;

const Mapp = () => {
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };
    
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
        var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);
    
        }, [])
    
    
        return (
            <div style={{width: "100vw",
            height: "100vh",
            backgroundColor:"#EDE9DE"}}>
            <div id="map" style={{width:"45%", height:"95%"}}></div>
           
            </div>
        )
};

export default Mapp;