import { Button, Form, Input, P, Status } from "./Form";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Auth() {
    let history = useHistory();

  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');

  const submitData = async () => {
    if (phone === '' || code === '') {
      setStatus('Enter credentials first');
    }
    else {
      setStatus('authenticating...');
      const response = await fetch(`https://saranshapi.herokuapp.com/auth/?user=${phone}&pass=${code}`);
      const data = await response.json();
      setStatus(data['message']);
      if (data['status'] === 'success') {
          setTimeout(function(){
            history.push({pathname:'/todo', uid: data['uid']});
          }, 2000);
      }
    }
  }

  return (

      <Form>
        <P>Authenticator</P>
        <Input placeholder='Phone' maxLength='10' value={phone} onChange={(e) => setPhone(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && submitData()} />
        <Input placeholder='4-digit code' maxLength='4' value={code} onChange={(e) => setCode(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && submitData()} />
        <Button type='button' onClick={submitData}>Verify Credentials</Button>
        <Status>{status}</Status>
      </Form>

  );
}

export default Auth;
