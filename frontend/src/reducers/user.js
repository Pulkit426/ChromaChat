import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'
import userService from '../services/users'

const loggedInUserJSON = JSON.parse(
    window.localStorage.getItem('loggedUser'))
  
const initialState = loggedInUserJSON ? loggedInUserJSON : null

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state,action){
            console.log('INSIDE SETUSERS')
            state = action.payload
            return state
        },

        appendUser(state,action){
            const user= action.payload

            return state.concat(user)
        },

        setToken(state,action){
            console.log('INSIDE SETTOKEN')
            const user = action.payload
            userService.setToken(user.token)
        }
    }
})

export const {setUser, appendUser, setToken} = userSlice.actions

export const initializeUser = () => {
    return async dispatch => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    console.log("LOGGED USER", loggedUser)
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      dispatch(setUser(user))
      dispatch(setToken(user))
    }
    }
}

export const login = (username, password) => {
    return async dispatch => {
        try{
      const userLogged = await loginService.login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(userLogged));
      console.log("INSIDE LOGIN", userLogged)
      dispatch(setUser(userLogged))
      dispatch(setToken(userLogged))
    }catch(error){
        console.log("LOGIN ERROR")
    }
}
}

export const signUp = (name, username, password) => {
    return async dispatch => {
        try{
            const newUser = await userService.signUp({name,username,password})
            console.log("INSIDE SIGNUP", newUser)
        }
        catch(error){
            console.log("Signup error")
        }
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch(setUser(null))
        userService.setToken(null)
    }
}

export default userSlice.reducer