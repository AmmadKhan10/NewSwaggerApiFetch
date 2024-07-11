
//This is backup file of the correct code

// // import GetApiFetch from "./GetApiFetch";
// import { useState, useEffect } from "react";
// import axios from 'axios';
// function Table(){


//  //GET API
//  const [news, setNews] = useState([]);
//  const addToTable = () => {
//      fetch("http://localhost:8087/api/Employees")
//          .then(response => response.json())
//          .then(data => setNews(data))
//          .catch(error => console.error("Error fetching data:", error));
//      }
//  useEffect(() => {
//     addToTable();
//  }, []);



//     // //POST API
//     // const [add, setAdd] = useState({FirstName : '', LastName :'', Email :'', Phone :'', Salary :''});
//     // const [errors, setErrors] = useState({});
//     // const addData = (e)=>{
//     //     setAdd({...add, [e.target.name]: e.target.value});
        
//     // }

//     //     // <--------------------- Added this section for a validation --------------------->
//     // const validate = () => {
//     //         let errors = {};
//     //         if (!add.FirstName) errors.FirstName = "First Name is required";
//     //         if (!add.LastName) errors.LastName = "Last Name is required";
//     //         if (!add.Email) {
//     //             errors.Email = "Email is required";
//     //         } else if (!/\S+@\S+\.\S+/.test(add.Email)) {
//     //             errors.Email = "Email address is invalid";
//     //         }
//     //         if (!add.Phone) {
//     //             errors.Phone = "Phone is required";
//     //         } else if (!/^\d+$/.test(add.Phone)) {
//     //             errors.Phone = "Phone number is invalid";
//     //         }
//     //         if (!add.Salary) {
//     //             errors.Salary = "Salary is required";
//     //         } else if (!/^\d+$/.test(add.Salary)) {
//     //             errors.Salary = "Salary must be a number";
//     //         }
//     //         return errors;
        
//     //     }

//     //     const handleSubmit = (e) => {
//     //         e.preventDefault();
//     //         const validationErrors = validate();
//     //         setErrors(validationErrors);
    
//     //         if (Object.keys(validationErrors).length === 0) {
//     //             axios.post('http://localhost:8087/api/Employees', {
//     //                 firstName: add.FirstName,
//     //                 lastName: add.LastName,
//     //                 email: add.Email,
//     //                 phone: add.Phone,
//     //                 salary: add.Salary
//     //             })
//     //                 .then((res) => {
//     //                     addToTable();
//     //                     alert('Data Has been Added');
//     //                     setAdd({ FirstName: '', LastName: '', Email: '', Phone: '', Salary: '' }); // Clear form
//     //                 })
//     //                 .catch(error => console.error("Error adding data:", error));
//     //         }
//     //     }

//     //POST AND PUT Api
//     const [add, setAdd] = useState({ FirstName: '', LastName: '', Email: '', Phone: '', Salary: '' });
//     const [errors, setErrors] = useState({});
//     const [editingId, setEditingId] = useState(null);

//     const addData = (e) => {
//         setAdd({ ...add, [e.target.name]: e.target.value });
//     }

//     const validate = () => {
//         let errors = {};
//         if (!add.FirstName) errors.FirstName = "First Name is required";
//         if (!add.LastName) errors.LastName = "Last Name is required";
//         if (!add.Email) {
//             errors.Email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(add.Email)) {
//             errors.Email = "Email address is invalid";
//         }
//         if (!add.Phone) {
//             errors.Phone = "Phone is required";
//         } else if (!/^\d+$/.test(add.Phone)) {
//             errors.Phone = "Phone number is invalid";
//         }
//         if (!add.Salary) {
//             errors.Salary = "Salary is required";
//         } else if (!/^\d+$/.test(add.Salary)) {
//             errors.Salary = "Salary must be a number";
//         }
//         return errors;
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = validate();
//         setErrors(validationErrors);

//         if (Object.keys(validationErrors).length === 0) {
//             if (editingId) {
//                 // Update existing item
//                 axios.put(`http://localhost:8087/api/Employees/${editingId}`, {
//                     firstName: add.FirstName,
//                     lastName: add.LastName,
//                     email: add.Email,
//                     phone: add.Phone,
//                     salary: add.Salary
//                 })
//                 .then((res) => {
//                     addToTable();
//                     alert('Data Has been Updated');
//                     setAdd({ FirstName: '', LastName: '', Email: '', Phone: '', Salary: '' }); // Clear form
//                     setEditingId(null);
//                 })
//                 .catch(error => console.error("Error updating data:", error));
//             } else {
//                 // Add new item
//                 axios.post('http://localhost:8087/api/Employees', {
//                     firstName: add.FirstName,
//                     lastName: add.LastName,
//                     email: add.Email,
//                     phone: add.Phone,
//                     salary: add.Salary
//                 })
//                 .then((res) => {
//                     addToTable();
//                     alert('Data Has been Added');
//                     setAdd({ FirstName: '', LastName: '', Email: '', Phone: '', Salary: '' }); // Clear form
//                 })
//                 .catch(error => console.error("Error adding data:", error));
//             }
//         }
//     }

//     const handleEdit = (item) => {
//         setAdd({
//             FirstName: item.firstName,
//             LastName: item.lastName,
//             Email: item.email,
//             Phone: item.phone,
//             Salary: item.salary
//         });
//         setEditingId(item.id);
//     }

//         // <--------------------- Added this section for a validation --------------------->
//     // const handleSubmit = (e)=>{
//     //     e.preventDefault();
//     //     axios.post('http://localhost:8087/api/Employees', {
//     //         firstName : add.FirstName,
//     //         lastName : add.LastName,
//     //         email : add.Email,
//     //         phone : add.Phone,
//     //         salary : add.Salary
//     //     })
//     //     .then((res) => {
//     //         addToTable();
//     //         alert ('Data Has been Added')
//     //     })
//     // }

//     //DeleteAPI

//     // const [deleteEmployee, setDeleteEmployee] = useState([]);
//     // const handleDelete = async (id)=>{
//     //     const del = await fetch(`http://localhost:8087/api/Employees/${id}`,{
//     //         method: 'Delete'
//     //     });
//     //     const deldata = await del.json();
//     //     setDeleteEmployee(deldata)
//     // }
//   const handleDelete=(id)=>{
//     fetch(`http://localhost:8087/api/Employees/${id}`,{method: 'DELETE'})
//     .then(()=>{
//         setNews(news.filter(item=> item.id !==id));
//         alert('Confirm Delete')
//     })
//     .catch(error => {
//         console.error("Error deleting the data: ", error);
//     });
//   };

//     return(
//         <>
//         <form action="">
//             <h4 className="form-heading">Employee Details</h4>
//             <div className="fileds">
//                 <label>FirstName :</label>
//                 <input type="text" placeholder="Enter Your FirstName" onChange={addData} className="inputs" name="FirstName" value={add.FirstName} />
//                 {errors.FirstName && <p className="error">{errors.FirstName}</p>}
//             </div>
//             <div  className="fileds">
//                 <label>LastName :</label>
//                 <input type="text" name="LastName" placeholder="Enter Your LastName" onChange={addData} className="inputs"  value={add.LastName} />
//                 {errors.LastName && <p className="error">{errors.LastName}</p>}
//             </div>
//             <div  className="fileds">
//                 <label>Email :</label>
//                 <input type="text" name="Email"  placeholder="example@gmail.com" onChange={addData} className="inputs3" value={add.Email} />
//                 {errors.Email && <p className="error">{errors.Email}</p>}
//             </div>
//             <div  className="fileds">
//                 <label>Phone :</label>
//                 <input type="number" name="Phone" placeholder="Enter Your Contact No" onChange={addData}  className="inputs4"  value={add.Phone} />
//                 {errors.Phone && <p className="error">{errors.Phone}</p>}
//             </div>
//             <div  className="fileds">
//                 <label>Salary :</label>
//                 <input type="number" name="Salary" placeholder="Enter Your Salary" onChange={addData}  className="inputs5" value={add.Salary} />
//                 {errors.Salary && <p className="error">{errors.Salary}</p>}
                
//             </div>
//             <div>
                
//                 <input type="button" onClick={handleSubmit} value="Submit" className="inputs6" />
//             </div>
//         </form>

//         <table className="Employee-table">
//                 <thead>
//                     <tr>
//                         <th>FirstName</th>
//                         <th>LastName</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Salary</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {news.map((item) => (
//                         <tr key={item.id}>
//                             <td>{item.firstName}</td>
//                             <td>{item.lastName}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td>{item.salary}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(item)} className="edit-button"><i class="fa-solid fa-pen-to-square"></i></button>
//                                 <button onClick={()=>{handleDelete(item.id)}} className="delete-button"><i class="fa-solid fa-trash" ></i></button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     )
// }

// export default Table;