// import GetApiFetch from "./GetApiFetch";
import { useState, useEffect } from "react";
import axios from 'axios';
function Table(){


 //GET API
 const [news, setNews] = useState([]);
 const addToTable = () => {
     fetch("http://localhost:8087/api/Employees")
         .then(response => response.json())
         .then(data => setNews(data))
         .catch(error => console.error("Error fetching data:", error));
     }
 useEffect(() => {
    addToTable();
 }, []);



    //POST API
    const [add, setAdd] = useState({FirstName : '', LastName :'', Email :'', Phone :'', Salary :''});
    const addData = (e)=>{
        setAdd({...add, [e.target.name]: e.target.value});
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8087/api/Employees', {
            firstName : add.FirstName,
            lastName : add.LastName,
            email : add.Email,
            phone : add.Phone,
            salary : add.Salary
        })
        .then((res) => {
            addToTable();
            alert ('Data Has been Added')
        })
    }

    //DeleteAPI

    const [deleteEmployee, setDeleteEmployee] = useState([])
    const handleDelete = async (id)=>{
        const del = await fetch(`http://localhost:8087/api/Employees/${id}`,{
            method: 'Delete'
        });
        const deldata = await del.json();
        setDeleteEmployee(deldata)
    }

    return(
        <>
        <form action="">
            <h4 className="form-heading">Employee Details</h4>
            <div className="fileds">
                <label>FirstName :</label>
                <input type="text" placeholder="Enter Your FirstName" onChange={addData} className="inputs" name="FirstName"/>
            </div>
            <div  className="fileds">
                <label>LastName :</label>
                <input type="text" name="LastName" placeholder="Enter Your LastName" onChange={addData} className="inputs" />
            </div>
            <div  className="fileds">
                <label>Email :</label>
                <input type="text" name="Email" placeholder="example@gmail.com" onChange={addData} className="inputs3" />
            </div>
            <div  className="fileds">
                <label>Phone :</label>
                <input type="text" name="Phone" placeholder="Enter Your Contact No" onChange={addData}  className="inputs4" />
            </div>
            <div  className="fileds">
                <label>Salary :</label>
                <input type="text" name="Salary" placeholder="Enter Your Salary" onChange={addData}  className="inputs5"/>
            </div>
            <div>
                
                <input type="button" onClick={handleSubmit} value="Submit" className="inputs6" />
            </div>
        </form>

        <table className="Employee-table">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item) => (
                        <tr key={item.id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.salary}</td>
                            <td>
                                <button className="edit-button"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button onClick={()=>{handleDelete(item.id)}} className="delete-button"><i class="fa-solid fa-trash" ></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;