import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState([{
    fullname: '',
    emailaddress: '',
    salary: '',
  }])

  const add = () => {
    let newfield = { fullname: '', emailaddress: '', salary: '' };
    let add = [...input, newfield];
    setInput(add);
  }

  const remove = (index) => {
    let old = [...input];
    old.splice(index, 1);
    setInput(old);
  }

  return (
    <>
      <center>
        <br></br>
        <h2 className='bg-light d-inline px-3'>React-Add & Delete Table Rows Dyanmically</h2>
        <br></br><br></br>
        <table>
          <thead>
            <tr className='border-bottom border-dark'>
              <th className='text-center fw-bold fs-5'>Full Name</th>
              <th className='text-center fw-bold fs-5'>Email Address</th>
              <th className='text-center fw-bold fs-5'>Salary</th>
              <button class="btn btn-outline-success" onClick={() => add()}>+</button>
            </tr>
            <br></br>
            {
              input.map((val, index) => {
                  return (
                    <tr>
                      <td><input type='text' style={{ padding: "10px" }} /></td>
                      <td><input type='email' style={{ padding: "10px" }} /></td>
                      <td><input type='text' style={{ padding: "10px" }} /></td>
                      <td className='px-3'>
                        <button type="button" class="btn btn-outline-danger" onClick={() => (remove(index))}>X</button>
                      </td>
                    </tr>
                  )
                })
              }

          </thead>
        </table>
      </center>
    </>
  );
}

export default App;
