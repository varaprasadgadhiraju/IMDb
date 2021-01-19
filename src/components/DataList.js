import React from 'react';
import {connect} from 'react-redux';
import {getPopularMovies, getTopMovies} from '../Redux/actions';
import {
    StarTwoTone,
  } from '@ant-design/icons';
import "./DataList.css";
import ls from "local-storage"
import {Redirect} from "react-router-dom"
  

class DataList extends React.Component{
    state={
        RedirectToSignin:false
    }
    //updates the state value with the new props value!
    componentWillReceiveProps(nextProps){
        this.init(nextProps)
    }
    UNSAFE_componentWillMount(){
        // console.log(this.props.match.params.type)
        this.init()
    }
    init=(nextProps=null)=>{
         let type=nextProps?nextProps.match.params.type:this.props.match.params.type
        switch(type){
            case 'topmovies':{
                this.props.onFetchTopMovies();
                break;
            }
            case 'popularmovies':{
                this.props.onFetchPopularMovies();
                break
            }
            default:{/*do nothing*/}
        }
    }
    AddToWatchList=(value)=>{
        if(!this.props.user){
            this.setState({
                RedirectToSignin:true
            })
            return
        }
        //if there is no data we will set the data
        if(!ls.get("WatchListData")){
            ls.set("WatchListData",JSON.stringify([value]))
        }else{
            //pushing data to local storage!
            let data=ls.get("WatchListData")
            data=JSON.parse(data)
            data.push(value)
            ls.set("WatchListData",JSON.stringify(data))
        }
        alert("Added To Watch List")
    }
    render(){
        if(this.state.RedirectToSignin){
            return <Redirect to="/Auth"></Redirect>
        }
        if(this.props.movies){
    var data=this.props.movies.results.map((value,index)=>{
            return(
                
                <div className="data-container" key={index}>
                    <div className="img-container">
                    <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}></img>
                    </div>
                    <div className="title-container">
                    <p>{value.original_title}</p>
                    </div>
                    <div className="vote-container">
                    <p><StarTwoTone /> {value.vote_average}</p>
                    </div>
                    <div onClick={()=>{this.AddToWatchList(value)}} className="bookmarks">
                    <i className="far fa-bookmark"></i>
                    </div>
                </div>
            )
        })
    }
        // console.log(this.props.movies)
        return(
            <div className="display">
            <h3 className="Imdb-charts">IMDb Charts</h3>
            <h1 className="TopRated">Top Rated Movies</h1>
            <div className="titleAndRating">
            <p style={{marginLeft:"600px"}}>TITLE</p>
            <p style={{marginLeft:"400px"}}>IMDb Rating</p>
            </div>
           {data}
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return { movies:state.movies,error:state.error,user:state.user}
}
  
const mapDispatchprops = (dispatch) => {
    return { 
        onFetchTopMovies: () => dispatch(getTopMovies()),
        onFetchPopularMovies: ()=> dispatch(getPopularMovies())
    }
}
  
export default connect(mapStatetoProps, mapDispatchprops)(DataList);