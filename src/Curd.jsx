import React, { useState, useEffect } from 'react';

const Curd = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: 'male',
    hobbies: [],
    course: 'math',
    address: ''
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? 
               (checked ? [...prevState[name], value] : prevState[name].filter(hobby => hobby !== value)) : 
               value
    }));
  };

  const createUser = () => {
    const updatedUsers = [...users, formData];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('User created successfully!');
    setFormData({
      name: '',
      email: '',
      password: '',
      gender: 'male',
      hobbies: [],
      course: 'math',
      address: ''
    });
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div>
    
      <form className='border text-center py-5'>
        <label className='pe-4'>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} /><br /><br />

        <label className='pe-4'>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />

        <label className='pe-3'>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} /><br /><br />

        <label className='pe-3'>Gender:</label>
        <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
        <label className='pe-2'>Male</label>
        <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
        <label>Female</label><br /><br />

        <label className='pe-3'>Hobbies:</label>
        <input type="checkbox" name="hobbies" value="Reading" checked={formData.hobbies.includes('Reading')} onChange={handleChange} />
        <label className='pe-2'>Reading</label>
        <input type="checkbox" name="hobbies" value="Traveling" checked={formData.hobbies.includes('Traveling')} onChange={handleChange} />
        <label>Traveling</label><br /><br />

        <label>Course:</label>
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="math">ui/ux</option>
          <option value="science">web devlopment</option>
          <option value="history">hacking</option>
        </select><br /><br />

        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange}></textarea><br /><br />

        <button type="button" className='button px-4 py-2' onClick={createUser}>Submit</button>
      </form>

      {/* userss */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Password: {user.password}</div>
            <div>Gender: {user.gender}</div>
            <div>Hobbies: {user.hobbies.join(', ')}</div>
            <div>Course: {user.course}</div>
            <div>Address: {user.address}</div>
            <button type="button" className='button px-4 py-2' onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Curd;