import React, { useState } from "react";

function Input() {
  const [form, setForm] = useState({ name: "", surname: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Name</h1>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={onChangeInput}
      />
      <br />
      <h1>Surname</h1>
      <input
        name="surname"
        type="text"
        value={form.surname}
        onChange={onChangeInput}
      />
      <br />
      {form.name} {form.surname}
    </div>
  );
}

export default Input;
