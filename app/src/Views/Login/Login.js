
import { useNavigate } from 'react-router-dom';
import './Login.css';
export default function Login() {
    let ishidden = true;
    let navigate = useNavigate();
    return (
        <form className="form" onSubmit={() => {

            navigate('/homepage');
        }}>
            <h1>Login</h1>
            <div className='formField'>
                <label for="name" className='label'>Username</label>
                <input id="name" className="credInput" type="text" />
            </div>
            <div className='formField'>
                <label for="password" className='label'>Password</label>
                <input id="password" className="credInput" type={ishidden ? 'password' : 'text'} />
            </div>

            <input type='submit' />
        </form>
    );
}