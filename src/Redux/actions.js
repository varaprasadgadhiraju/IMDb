//Action for Login!
const Login = loginData => ({
    type: 'LOGIN',
    payload:loginData
  });
//Action for Logout!
const Logout = logoutData=>({
  type:'LOGOUT',
  payload: logoutData
})
//fetching Top Movies from API
const getTopMovies = ()=>{
  return (dispatch)=>{
    return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7ecd0b11bc4cd387a22b43cb37086584')
    .then(res=>res.json())
    .then(res=>dispatch({type:'GET_TOP_MOVIES',payload:res}))
    .catch(err=>dispatch({type:'ERROR',payload:'Some error occured while fetching movies!'}))
  }
}
//fetching Popular movies from API
const getPopularMovies = ()=>{
  return (dispatch)=>{
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=7ecd0b11bc4cd387a22b43cb37086584')
    .then(res=>res.json())
    .then(res=>dispatch({type:'GET_POPULAR_MOVIES',payload:res}))
    .catch(err=>dispatch({type:'ERROR',payload:'Some error occured while fetching movies!'}))
  }
}

export {Login,Logout,getTopMovies,getPopularMovies};