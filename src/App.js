import { useState } from "react";

function App() {
  const [name, setName] = useState("Memo");
  const [age, setAge] = useState(15);
  const [friends, setFriends] = useState(["Jack", "Lora", "Kayn"]);
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34865 });

  return (
    <div className="App">
      <h1>
        Hi {name} ({age})!!
      </h1>
      <button onClick={() => setName("Musa")}>click to set name</button>
      <button onClick={() => setAge(19)}>click to set age</button>
      <hr />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <hr />
      <br />
      <h2>Address</h2>
      <button onClick={() => setFriends([...friends, "Morgan"])}>
        Add Friend
      </button>
      <hr />
      <br />
      {address.title}, {address.zip}
      <button
        onClick={() => setAddress({ title: "Ankara", zip: 76789})}
      >Change Adress</button>
    </div>
  );
}

export default App;
