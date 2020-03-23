import React from 'react';

import './sigin.styles.scss';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (err) {
            console.log("error in sign in component,err");
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        // console.log(value.length);
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <span>SignIn with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required />

                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required />

                    <div className="button">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} google >Google Sign In</CustomButton>
                    </div>
                </form>
            </div >
        )
    }


}

export default SignIn;