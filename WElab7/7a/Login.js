const { useState } = React;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const validUsername = 'sam';
    const validPassword = 'pass123';

    if (username === validUsername && password === validPassword) {
      setMessage('Login Successful');
      setTimeout(() => {
        setIsLoggedIn(true);
        setMessage('');
      }, 1000);
    } else {
      setMessage('Invalid Credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setMessage('');
  };

  if (isLoggedIn) {
    return React.createElement('div', { className: 'login-container' },
      React.createElement('h2', null, 'Welcome, Admin!'),
      React.createElement('button', { onClick: handleLogout, className: 'login-button' }, 'Logout')
    );
  }

  return React.createElement('div', { className: 'login-container' },
    React.createElement('form', { onSubmit: handleSubmit, className: 'login-form' },
      React.createElement('h2', null, 'Login'),
      React.createElement('div', { className: 'input-group' },
        React.createElement('label', { htmlFor: 'username' }, 'Username:'),
        React.createElement('input', {
          type: 'text',
          id: 'username',
          value: username,
          onChange: (e) => setUsername(e.target.value),
          required: true
        })
      ),
      React.createElement('div', { className: 'input-group' },
        React.createElement('label', { htmlFor: 'password' }, 'Password:'),
        React.createElement('input', {
          type: 'password',
          id: 'password',
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true
        })
      ),
      React.createElement('button', { type: 'submit', className: 'login-button' }, 'Login'),
      message && React.createElement('p', { className: 'message' }, message)
    )
  );
}

ReactDOM.render(React.createElement(Login), document.getElementById('root'));
