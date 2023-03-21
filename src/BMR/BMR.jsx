import { useState } from "react";
function BMR() {
  const [inputs, setInputs] = useState({
    gender: "male",
    weight: 70,
    height: 70,
    age: 40,
  });

  const onChange = (e) => {
    console.log(e.target.name);
    setInputs((prevInputs) => {
      return { ...prevInputs, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs);

  return (
    <div>
      <h2>
        your BMR:
        {(inputs.gender === "male"
          ? 88.362 +
            13.397 * inputs.weight +
            4.799 * inputs.height -
            5.677 * inputs.age
          : 447.593 +
            9.247 * inputs.weight +
            3.098 * inputs.height -
            4.33 * inputs.age
        ).toFixed(2)}
      </h2>
      <form>
        <label htmlFor="male">Male</label>
        <input id="male" type="radio" name="gender" onChange={onChange} />
        <label htmlFor="male">Male</label>
        <input id="male" type="radio" name="gender" onChange={onChange} />

        <label htmlFor="height">height</label>

        <input
          id="height"
          onChange={onChange}
          min="0"
          type="number"
          placeholder="in Cm"
          name="height"
          value={inputs.height}
        />

        <label htmlFor="weight">weight</label>

        <input
          onChange={onChange}
          min="1"
          type="number"
          name="weight"
          placeholder="in kg"
          value={inputs.weight}
        />

        <label htmlFor="age">age</label>

        <input
          min="1"
          onChange={onChange}
          type="number"
          name="age"
          value={inputs.age}
        />
      </form>
    </div>
  );
}

export default BMR;
