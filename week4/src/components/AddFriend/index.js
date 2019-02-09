import React, { useState } from "react";

function AddFriend(props) {
  const { onAddFriend } = props;
  const [friend1, setFriend1] = useState("");
  const [friend2, setFriend2] = useState("");
  return (
    <div>
      <label>Friend1</label>
      <input value={friend1} onChange={e => setFriend1(e.target.value)} />
      <label>Friend2</label>
      <input value={friend2} onChange={e => setFriend2(e.target.value)} />
      <button onClick={() => onAddFriend(friend1, friend2)}>Add Friend</button>
    </div>
  );
}
