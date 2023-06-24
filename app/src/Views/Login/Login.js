
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useState } from 'react';
import particleOptions from './particleOptions';
export default function Login() {
    let [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    let ishidden = true;
    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        console.log(formData)
    };
    let navigate = useNavigate();
    let options = particleOptions;
    return (
        <div className='loginField'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
            <div className='Intro'>
                <h1>We</h1>
                <h1 className='rotateWords'>
                    <h3> Collaborate .</h3>
                    <h3> Contribute .</h3>
                    <h3> Excel .</h3>
                </h1>
            </div>
            <form className="form" onSubmit={() => {
                if (formData.username !== 'admin' || formData.password !== 'admin') {
                    alert('Wrong Username or Password');
                    return;
                }
                navigate('/homepage');
            }}>
                <h1 className='formLabel'>Login</h1>
                <div className='formField'>
                    <label htmlfor="username" className='label'>Username</label>
                    <input id="username" onChange={handleChanges} className="credInput" type="text" />
                </div>
                <div className='formField'>
                    <label htmlfor="password" className='label'>Password</label>
                    <input id="password" onChange={handleChanges} className="credInput" type={ishidden ? 'password' : 'text'} />
                </div>
                <div className='formField'>
                    <input type='submit' className='submit' />
                </div>
            </form>
        </div>
    );
}