import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";



const API_URL = "https://6317c06df6b281877c5cbecf.mockapi.io/todos";

export type Todo = {
    id: number;
    content: string;
    isCompleted: boolean
}

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const updateTodo = createAsyncThunk("todo/updateTodo", async (todo: Todo) => {
     await axios.put(`${API_URL}/${todo.id}`, todo);
})

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id: string | number) => {
     await axios.delete(`${API_URL}/${id}`);
})

export const addTodo = createAsyncThunk("todo/addTodo", async (data: Todo) => {
    const response = await axios.post(API_URL, data);
    return response.data
})

export interface TodoState {
    todos: Todo[];
    status: "idle" | "loading" | "failed";
}

const initialState: TodoState = {
    todos: [],
    status: "idle"
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if(todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
    },
   extraReducers: (builder) => {
         builder.addCase(fetchTodos.pending, (state) => {
              state.status = "loading";
         })
         builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<any>) => {
              state.status = "idle";
              state.todos = action.payload;
         })
         builder.addCase(deleteTodo.fulfilled, (state, action: PayloadAction<any>) => {
              state.todos = state.todos.filter(todo => todo.id !== action.payload);
         })
    
            builder.addCase(addTodo.fulfilled, (state, action: PayloadAction<any>) => {
                state.todos.push(action.payload);
             })
    }
})

export const { toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
