import { useState } from 'react';

const RedundantStates = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [fullName, setFullName] = useState('')

  function handleFirstNameChanged(e) {
    setFirstname(e.target.value);
    setFullName(`${e.target.value} ${lastname}`);
  }

  function handleLastNameChanged(e) {
    setLastname(e.target.value);
    setFullName(`${firstname} ${lastname}`);
  }

  return (
    <>
      {fullName}
    </>
  )
};

export default RedundantStates;
