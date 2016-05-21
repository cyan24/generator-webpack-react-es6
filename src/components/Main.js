require('normalize.css/normalize.css');
require('styles/Login.css');

import React from 'react';
class AppComponent extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	username : '',
		pwd : '',
    };
  }
  render() {
    return (
    <form className='form' onSubmit={this.submitHandler.bind(this)}>
  		<div className='ipt'>
  			<input  name='username' type='text' placeholder='用户名' onChange={this.handleChange.bind(this, 'username')} />
  		</div>
  		<div className='ipt' >
  			<input name='pwd' type='password'  placeholder='密码' onChange={this.handleChange.bind(this, 'pwd')} />
  		</div>
  		<div className='btn'>
  			<input className='bt' value="login" type="submit"/>
  		</div>
  		<div className='tips'>这是一个recat登录demo</div>
	 </form>
    );
  }
	submitHandler(event) {
		event.preventDefault();
		console.log(this.state);
	}
	handleChange (name,event) {
		let newState = {};
		newState[name] = event.target.value;
		this.setState(newState);
	}
}


// AppComponent.defaultProps = {
// };
export default AppComponent;
