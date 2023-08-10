import { useState } from 'react';

const NotRedundantStates = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const fullName = `${firstname} ${lastname}`;

  function handleFirstNameChanged(e) {
    setFirstname(e.target.value);
  }

  function handleFirstNameChanged(e) {
    setLastname(e.target.value);
  }

  return (
    <>
      <h1>Bonjour {firstname}</h1>
    </>
  )
};

export default NotRedundantStates;
