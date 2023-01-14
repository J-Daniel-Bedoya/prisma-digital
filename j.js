import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  if (count === 0) {
    const [name, setName] = useState("SmartRanks");
  }

  useEffect(() => {
    setCount(1);
  }, []);
  const j = [2,2]
  j.forEach 

  return (
    <div>
      {count}
      {name}
    </div>
  );
}

export default App;