import React from 'react';
import ls from "local-storage"
import "./WatchList.css";
import {
    StarTwoTone,
  } from '@ant-design/icons';
  //Watchlist component!
class WatchList extends React.Component{
   
    render(){
        let WatchList_data=JSON.parse(ls.get("WatchListData"))
        let display_data=WatchList_data.map((value,index)=>{
            return(
                <div className="wishlist-container" key={index}>
                    <div className="image-container">
                    <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}></img>
                    </div>
                    <div className="information">
                    <div className="title">
                    <p>{value.original_title}</p>
                    </div>
                    <div className="vote_average">
                    <p><b>Rating:</b> {value.vote_average} <StarTwoTone /></p>
                    <p><b>Release Date:</b>{value.release_date}</p>
                    <p><b>Overview:</b>{value.overview}</p>
                    </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="display">
            <h2 className="your-watchList">Your WatchList</h2>
            {display_data}
            </div>
          
        )
    }
}

export default WatchList;