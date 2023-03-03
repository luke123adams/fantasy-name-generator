import Auth from './Auth';
import { useCookies } from 'react-cookie'

export function Login ( authToken ) {
    
    return (
        <div className="login">
        <Auth/>
        </div>
      );
}