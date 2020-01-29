import {
  setSignedIn,
  setIsLoading,
  setPostSignInError,
  setPostSignUpError,
  setWelcomeMessage,
  setLogoutMessage,
  setGetLogoutError,
} from '../slices/authSlice'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const postSignIn = values => async dispatch => {
  try {
    const res = await axiosWithAuth().post('login', values)
    const { loggedIn, message } = res.data
    dispatch(setSignedIn(loggedIn))
    dispatch(setIsLoading(false))
    dispatch(setWelcomeMessage(message))
    dispatch(setPostSignInError(null))
    dispatch(setLogoutMessage(null))
  } catch (e) {
    const { message, error, loggedIn } = e.response.data
    dispatch(setPostSignInError({ message: message, error: error }))
    dispatch(setSignedIn(loggedIn))
    dispatch(setIsLoading(false))
    dispatch(setWelcomeMessage(null))
    dispatch(setLogoutMessage(null))
  }
}

export const postSignUp = values => async dispatch => {
  try {
    const res = axiosWithAuth().post('register', values)
    const { loggedIn, message } = res.data
    dispatch(setSignedIn(loggedIn))
    dispatch(setIsLoading(false))
    dispatch(setWelcomeMessage(message))
    dispatch(setPostSignUpError(null))
    dispatch(setLogoutMessage(null))
  } catch (e) {
    const { message, error, loggedIn } = e.response.data
    dispatch(setPostSignUpError({ message: message, error: error }))
    dispatch(setSignedIn(loggedIn))
    dispatch(setIsLoading(false))
    dispatch(setWelcomeMessage(null))
    dispatch(setLogoutMessage(null))
  }
}

export const getLogout = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get('/logout')
    const { message, loggedIn } = res.data
    dispatch(setSignedIn(loggedIn))
    dispatch(setLogoutMessage(message))
    dispatch(setWelcomeMessage(null))
  } catch (e) {
    const { message, error, loggedIn } = e.response.data
    dispatch(setGetLogoutError({ message: message, error: error }))
    dispatch(setSignedIn(loggedIn))
    dispatch(setWelcomeMessage(null))
  }
}
