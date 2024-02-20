import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Pr_6 = () => {
    const [formData, setFormData] = useState({
      id: null,
      name: '',
      email: '',
      password: '',
      gender: '',
      hobbies: [],
      course: '',
      address: ''
    });
    const [users, setUsers] = useState([]);
    const [editing, setEditing] = useState(false);
  
    useEffect(() => {
      const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(savedUsers);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users));
    }, [users]);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        if (checked) {
          setFormData({ ...formData, hobbies: [...formData.hobbies, value] });
        } else {
          setFormData({
            ...formData,
            hobbies: formData.hobbies.filter((hobby) => hobby !== value)
          });
        }
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (editing) {
        const updatedUsers = users.map((user) =>
          user.id === formData.id ? formData : user
        );
        setUsers(updatedUsers);
        setEditing(false);
      } else {
        setUsers([...users, { ...formData, id: Date.now() }]);
      }
      setFormData({
        id: null,
        name: '',
        email: '',
        password: '',
        gender: '',
        hobbies: [],
        course: '',
        address: ''
      });
    };
  
    const handleEdit = (id) => {
      const userToEdit = users.find((user) => user.id === id);
      setFormData(userToEdit);
      setEditing(true);
    };
  
    const handleDelete = (id) => {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

  return (
    <Container>
      <h1 className="text-center">CRUD App</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Gender:</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                inline
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                inline
              />
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Hobbies:</Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                label="Reading"
                name="hobbies"
                value="reading"
                checked={formData.hobbies.includes('reading')}
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                label="Gaming"
                name="hobbies"
                value="gaming"
                checked={formData.hobbies.includes('gaming')}
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                label="Traveling"
                name="hobbies"
                value="traveling"
                checked={formData.hobbies.includes('traveling')}
                onChange={handleChange}
              />
               <Form.Check
                type="checkbox"
                label="Coding"
                name="hobbies"
                value="coding"
                checked={formData.hobbies.includes('coding')}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
          <Form.Group as={Col} controlId="formCourse">
            <Form.Label>Course:</Form.Label>
            <Form.Select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React.js</option>
              <option value="next">Next.js</option>
              <option value="vue">Vue.js</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formAddress">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>
        <Button type="submit" className="mb-3">{editing ? 'Update' : 'Add'}</Button>
      </Form>
      <hr />
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>Password:</strong> {user.password}
            </div>
            <div>
              <strong>Gender:</strong> {user.gender}
            </div>
            <div>
              <strong>Hobbies:</strong> {user.hobbies.join(', ')}
            </div>
            <div>
              <strong>Course:</strong> {user.course}
            </div>
            <div>
              <strong>Address:</strong> {user.address}
            </div>
            <Button variant="primary" onClick={() => handleEdit(user.id)}>Edit</Button>{' '}
            <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Pr_6;
