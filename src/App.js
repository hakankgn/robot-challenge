import React, { useState } from "react";

const RobotList = () => {
  const [input, setInput] = useState("");
  const [robots, setRobots] = useState([]);
  const [warning, setWarning] = useState(null);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddRobot = () => {
    if (robots.includes(input)) {
      setWarning("Robot listede bulunmakta!");
    } else {
      setRobots([...robots, input]);
      setWarning(null);
    }
    setInput("");
  };

  const handleClickOnRobot = (robot) => {
    setRobots(robots.filter((r) => r !== robot));
  };

  return (
    <div>
      <input value={input} onChange={handleInputChange} />
      <button onClick={handleAddRobot}>Robot Ekle</button>
      {warning && <p>{warning}</p>}
      <ul>
        {robots.map((robot) => (
          <li key={robot} onClick={() => handleClickOnRobot(robot)}>
            <img src={`https://robohash.org/${robot}`} alt={robot} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RobotList;
