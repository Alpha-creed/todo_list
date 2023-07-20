import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { deleteIcon, editIcon } from '../assest/icon';
import { Link } from 'react-router-dom';
import { deleteTask } from '../redux/taskSlice';

const Tasks = () => {
    const tasks = useSelector((state)=>state.task);
    const dispatch = useDispatch();

    const handleDelete = (id)=>{
        dispatch(deleteTask({id}))
    }
    
  return (
    <TaskStyled >
      {
        tasks.map((task,index)=>(
            
                <ul key={index} >
                    <li>
                        <div>{task.duty}</div>
                        <div className='icons'>
                        <Link to={`/edit/${task.id}`}><span>{editIcon}</span></Link>
                        <span onClick={()=>handleDelete(task.id)}>{deleteIcon}</span>
                        </div>
                    </li>
                </ul>
        ))
      }
    </TaskStyled>
  )
}

const TaskStyled=styled.div`

color:white;

 li{
     list-style:none;
    display:flex;
    justify-content:space-between;
    background:rgb(109, 109, 193);
    padding:20px 10px;
    margin:20px 0;
    border-radius:22px;
 }
 .icons{
    
 }
 span{ 
    margin:0 15px;
 }
`;

export default Tasks

