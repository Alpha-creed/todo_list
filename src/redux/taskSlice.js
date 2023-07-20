import { taskList } from "../assest/data"
import {createSlice} from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name:"tasks",
    initialState:taskList,
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload)
        },
        editTask:(state,action)=>{
            const {id,task} = action.payload;
            const uu = state.find(task=>task.id == id);
            if(uu)
                uu.duty = task;
        },
        deleteTask:(state,action)=>{
            const {id} = action.payload;
            const uu = state.find(task=>task.id == id);
            if(uu){
                return state.filter(f=>f.id != id);
            }
        }
    }

})

export const {addTask,deleteTask,editTask} =taskSlice.actions
export default taskSlice.reducer;