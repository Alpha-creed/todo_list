import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTask, editTask } from '../redux/taskSlice';
import Tasks from './Tasks';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [duty,setTask] = useState("");
    const dispatch = useDispatch();
    const tasks =useSelector((state)=>state.task);

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTask({id:tasks[tasks.length-1].id+1,duty}))
    }

  return (
    <HomeStyled>
        <h1>Get Things Done!</h1>
      <form  onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="What is the task today?"
            name="name"
            onChange={e=>setTask(e.target.value)}/>
        <button type="submit">Add Task</button>
      </form>
      <div className='allText'>
        <Tasks/>
      </div>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  width:500px;
  height:500px;
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
    .allText{
        width:420px;
        margin-left:40px
    }
`;
export default Home
