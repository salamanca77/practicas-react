import {Navigate} from 'react-router-dom'
import { useAuth } from '../hook/useAuth'
import { useLocation } from 'react-router-dom'

export function ProtejerRuta({children}){
    
    const{isAuth} = useAuth()  
    const location = useLocation()
    if(!isAuth){
      return  <Navigate to='/login'state={{location}}/>
    }
}