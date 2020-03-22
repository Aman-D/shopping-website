import React from 'react';

import './sigin.styles.scss';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
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