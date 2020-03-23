import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfile, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            password: '',
            confirmPassword: '',
            email: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password != confirmPassword) {
            alert("Passwords Don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            //this is to empty the sign up form
            this.setState({
                displayName: '',
                password: '',
                confirmPassword: '',
                email: ''
            })
        } catch (err) {
            console.log("error in sign up component, cannot creATE user", err);
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
            <div className="signup">
                <h2>I don't have an account</h2>
                <span>Sign Up with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={this.state.displayName} handleChange={this.handleChange} label="Display Name" required />

                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />

                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />

                    <FormInput type="password" name="confirmPassword" value={this.state.password} handleChange={this.handleChange} label="Confirm Password" required />

                    <div className="button">
                        <CustomButton type="submit" >Sign Up</CustomButton>

                    </div>
                </form>
            </div >
        )
    }


}

export default SignUp;