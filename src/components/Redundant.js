import { useState } from 'react';

const RedundantStates = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [fullName, setFullName] = useState('')

  function handleFirstNameChanged(e) {
    setFirstname(e.target.value);
    setFullName(`${e.target.value} ${lastname}`);
  }

  function handleFirstNameChanged(e) {
    setLastname(e.target.value);
    setFullName(`${e.target.value} ${lastname}`);
  }

  return (
    <>
      <h1>Bonjour {firstname}</h1>
    </>
  )
};

export default RedundantStates;
