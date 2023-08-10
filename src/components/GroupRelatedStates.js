import { useState } from 'react';

const GroupRelatedStates = () => {
  const [PosX, setPosX] = useState(0);
  const [PosY, setPosY] = useState(0);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div onPointerMove={(e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }}>
      {/*...*/}
    </div>

  )
}
