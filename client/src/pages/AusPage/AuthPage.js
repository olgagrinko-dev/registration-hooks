import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './style.module.css'
import { useState } from 'react';

function AuthPage() {
    const [obj, setObj] = useState({ email: '', password: '', comfirmPassword: '' })

    function chengeInp(event) {
        setObj({ ...obj, [event.target.name]: event.target.value })
    }

    function isObj() {
        console.log(obj);
    }

    return (
        <div className={style.wrapper}>
            <h1>Registration</h1>
            <div>
                <TextField id="standard-basic" name='email' label="Email" variant="standard" onChange={chengeInp} />
            </div>
            <div>
                <TextField id="standard-basic" name='password' label="Password" variant="standard" onChange={chengeInp} />
            </div>
            <div>
                <TextField id="standard-basic" name='comfirmPassword' label="Comfirm Password" variant="standard" onChange={chengeInp} />
            </div>
            <div>
                <Button variant="outlined" onClick={isObj}>SIGN UP</Button>
            </div>
            <div className={style.account}>
                <p>Already have an account?</p>
                <div>
                    <Button variant="text">SIGN IN</Button>
                </div>
            </div>

        </div>
    )
}

export default AuthPage;