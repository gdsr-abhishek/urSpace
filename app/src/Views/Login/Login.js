
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';
import particleOptions from './particleOptions';
export default function Login() {
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

                navigate('/homepage');
            }}>
                <h1 className='formLabel'>Login</h1>
                <div className='formField'>
                    <label for="name" className='label'>Username</label>
                    <input id="name" className="credInput" type="text" />
                </div>
                <div className='formField'>
                    <label for="password" className='label'>Password</label>
                    <input id="password" className="credInput" type={ishidden ? 'password' : 'text'} />
                </div>
                <div className='formField'>
                    <input type='submit' className='submit' />
                </div>
            </form>
        </div>
    );
}