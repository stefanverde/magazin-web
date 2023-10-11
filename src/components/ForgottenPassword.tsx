import React, { useState } from 'react';
import '../pages/styles/Login.css';
import './styles/ForgottenPassword.css';
import { Link } from 'react-router-dom';

function ForgottenPassword() {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(true);
  const [message, setMessage] = useState('');

  async function responseHandler() {
    try {
      await fetch('http://localhost:3001/v1/mail ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      setResponse(false);
      setMessage(
        'If the e-mail exists, you will receive a message with your password '
      );
    } catch (error: any) {
      console.error('Network error:', error.message);
    }
  }
  return (
    <div>
      <div className='backimage'>
        <div className='forgottenP-modal'>
          {response ? (
            <div className='content'>
              <input
                required
                className='username'
                type='text'
                placeholder='Email@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
              <button
                className='forgottenButton'
                onClick={responseHandler}>
                Retrieve Password
              </button>
              <button className='forgottenToMain'>
                <Link to='/login'>Back &rarr;</Link>
              </button>
            </div>
          ) : (
            <div
              style={{
                color: 'green',
                textAlign: 'center',
                marginTop: '20px',
              }}>
              {message} &#10003;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ForgottenPassword;
