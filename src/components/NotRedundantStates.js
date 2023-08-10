import { useState } from 'react';

const NotRedundantStates = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const fullName = `${firstname} ${lastname}`;

  function handleFirstNameChanged(e) {
    setFirstname(e.target.value);
  }

  function handleLastNameChanged(e) {
    setLastname(e.target.value);
  }

  return (
    <>
      {fullName}
    </>
  )
};

export default NotRedundantStates;
