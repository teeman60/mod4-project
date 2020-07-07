import React, {Component} from 'react'

class Login extends Component{
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    logIn = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                username: this.state.username,
                password: this.state.password
                }
            })
        })
        .then(res =>  res.json())
        .then(userInfo => {
            // console.log(userInfo)
            localStorage.token = userInfo.jwt
        })
    }
   
    render(){
        return(
        <div >
            
            <h2>LogIn</h2>
            <form onSubmit={(e) => this.logIn(e)}>
            <label>UserName</label>
            <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
            <label>Password</label>
            <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
            <input type="submit"/>
            </form>
        </div>
        )
    }
}


export default Login