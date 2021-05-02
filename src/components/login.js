import React from 'react';
import { useHistory } from 'react-router';

const pageStyle = {
  appStyle: {
    height: '250px',
    margin: 40,
    textAlign: 'center'
  },

  formStyle: {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '220px',
  },

  labelStyle: {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
  },

  inputStyle: {
    margin: '5px 0 10px 0',
    padding: '5px',
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
  },

  submitStyle: {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%',
    fontSize: '15px',
    color: 'white',
  },
  dummyStyle: {
    margin: 10,
  }

};
const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={pageStyle.labelStyle} >{label}</label>
      <input ref={ref} type={type} style={pageStyle.inputStyle} />
    </div>
  );
});

const Form = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };
    onSubmit(data);
  };
  return (
    <form style={pageStyle.formStyle} onSubmit={handleSubmit} >
      <Field ref={usernameRef} label="Username:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />
      <div>
        <button style={pageStyle.submitStyle} type="submit">Submit</button>
      </div>
    </form>
  );
};

const Login = () => {
  let history = useHistory();

  const handleSubmit = data => {
    console.log(data);

    if (data.username === "foo" && data.password === "bar") {
      history.push("/home");
    }
  };

  return (
    <div style={pageStyle.appStyle}>
      <div className="row">
        <Form onSubmit={handleSubmit} />
      </div>
      <div className="row" style={pageStyle.dummyStyle}>
        <div> Only this is valid</div>
        <div> Dummy username: foo</div>
        <div> Dummy password: bar</div>
      </div>
    </div>
  );
};

export default Login;