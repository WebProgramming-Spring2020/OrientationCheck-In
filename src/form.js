import React from 'react';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class MyForm extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    fullName: null,
    email: null,
    comment: null,
    errors: {
      fullName: '',
      email: '',
      comment: '',
    }
  };
}

handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  let errors = this.state.errors;

  switch (name) {
    case 'fullName': 
      errors.fullName = 
        value.length < 5
          ? 'Full Name must be 5 characters long!'
          : '';
      break;
    case 'email': 
      errors.email = 
        validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
      break;
    case 'comment': 
      errors.comment = 
        value.length < 8
          ? 'comment must be 8 characters long!'
          : '';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value}, ()=> {
      console.log(errors)
  })
}  

handleSubmit = (event) => {
  event.preventDefault();
  if(validateForm(this.state.errors)) {
    console.info('Valid Form')
  }else{
    console.error('Invalid Form')
  }
}


//Create the input spots here 
render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create An Event</h2>
          <form onSubmit={this.handleSubmit} noValidate >

            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
	      {errors.fullName.length > 0 && <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Student Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
	    {errors.email.length > 0 && 
  <span className='error'>{errors.email}</span>}
            </div>

            <div className='comment'>
              <label htmlFor="comment">Comment Area</label>
              <textarea  name='comment' onChange={this.handleChange} noValidate />
            {errors.comment.length > 0 && 
  <span className='error'>{errors.comment}</span>}
            </div>

            <div className='info'>
              <small>comment must be eight characters in length.</small>
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MyForm;