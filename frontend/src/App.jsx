import React  from 'react'
import { useState , useEffect } from 'react'
import './App.css'
import axios, { all } from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function App() {
const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    message: ""
  });

const notify = () => toast("Wow so easy!");


  const handleSubmit=async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://formproject-dcn1.onrender.com/api/user', user);
      console.log('Data submitted successfully:', response.data);
            alert("data saved successfully");
      getUsers();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  } ;

  setUser({
      name: "",
      email: "",
      age: "",
      phone: "",
      message: ""
    });

    setallUsers((prev) => [response.data, ...prev]);

  const [allUsers, setallUsers] = useState([]);

  const getUsers=async()=>{
    try {
      const response = await axios.get('https://formproject-dcn1.onrender.com/api/user');
      setallUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };



  useEffect(() => {
    getUsers();
  }, []);

  
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h2>Fill Complete Form</h2>
        
      <input
  type="text"
  name="name"
  placeholder="Name"
  onChange={(e) => setUser({ ...user, name: e.target.value })}
/>
<br />

  <input
      type="text"
      name="email"
      placeholder="Email"
      onChange={(e) => setUser({ ...user, email: e.target.value })}
    />
    <br/>

    <input
      type="number"
      name="age"
      placeholder="Age"
      onChange={(e) => setUser({ ...user, age: e.target.value })}
    />
    <br/>


    <input
      type="text"
      name="phone"
      placeholder="Phone"
      onChange={(e) => setUser({ ...user, phone: e.target.value })}
    />
    <br/>

    <input
      type="text"
      name="message"
      placeholder="Message"
      onChange={(e) => setUser({ ...user, message: e.target.value })}
    />
        <br/>

        <button type='submit' >Submit</button> 
                


      </form>

      <br/>

      <h2>All Users</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
         {allUsers.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.age}</td>
                <td>{u.phone}</td>
                <td>{u.message}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </>
  )
}

export default App
