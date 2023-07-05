import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    destination: '',
    lactoseFree: false,
    nutsFree: false,
    veganMeal: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  
    const urlParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      destination: formData.destination,
      lactoseFree: formData.lactoseFree ? 'on' : '',
      nutsFree: formData.nutsFree ? 'on' : '',
      veganMeal: formData.veganMeal ? 'on' : '',
    }).toString();
    
    const url = `http://localhost:3000/?${urlParams}`;
    
    window.location.href = url;
  };

  return (
    <div>
      <h2>Entered information:</h2>
      <p>Online Learning</p>
      <p>Your name: {formData.firstName} {formData.lastName}</p>
      <p>Your age: {formData.age}</p>
      <p>Your gender: {formData.gender}</p>
      <p>Your destination: {formData.destination}</p>
      <p>Your dietary restrictions:</p>
      <ul>
        <li>Nuts free: {formData.nutsFree ? 'Yes' : 'No'}</li>
        <li>Lactose free: {formData.lactoseFree ? 'Yes' : 'No'}</li>
        <li>Vegan meal: {formData.veganMeal ? 'Yes' : 'No'}</li>
      </ul>

      <h2>Enter information:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Your First Name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Your Last Name"
        />
        <br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Your Age"
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="">Select your destination</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
          />
          Lactose free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={formData.nutsFree}
            onChange={handleChange}
          />
          Nuts free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="veganMeal"
            checked={formData.veganMeal}
            onChange={handleChange}
          />
          Vegan meal
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;