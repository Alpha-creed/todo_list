
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components'
import { editTask } from '../redux/taskSlice';

const EditPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const tasks =useSelector((state)=>state.task);
    const {task} = tasks[0];
    const [tduty,setDuty] = useState(task);
    const navigate = useNavigate();

    const handleEdit =(e)=>{
        e.preventDefault();
        dispatch(editTask({
            id,
            task:tduty,
        }))
        navigate('/');
    }

  return (
    <EditStyled>
        <h1>Edit List</h1>
      <form  onSubmit={handleEdit}>
        <input 
            type="text"
            placeholder="What is the task today?"
            name="name"
            value={tduty}
            onChange={e=>setDuty(e.target.value)}/>
        <button type="submit">Edit Task</button>
      </form>
    </EditStyled>
  )
}

const EditStyled = styled.div`
width:500px;
  height:auto;
  background:rgb(6, 6, 39);
  border:1px solid black;
  transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    h1{
        color:white;
        text-align:center;
        margin:10px 0;
    }
    input{
        padding:12px 10px;
        width:250px;
        border:none;
        outline:none;
    }
    button{
        color:white;
        width:150px;
        padding:12px 10px;
        font-size:14px;
        background:rgb(109, 109, 193);
    }
    form{
        display:flex;
        justify-content:center;
        margin:20px 0;
    }
`;

export default EditPage
