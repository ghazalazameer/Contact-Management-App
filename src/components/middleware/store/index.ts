import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface RootState {
  todos: Contact[];
}

interface ContactState {
  items: Contact[];
}

const initialState: ContactState = {
  items: [],
};

const contactSlice: any = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.items.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      //    state.items.filter((item)=>{
      //     if(item.id  === action?.payload?.id){
      //         item.firstName = action?.payload?.firstName
      //         item.lastName = action?.payload?.lastName
      //         item.status = action?.payload?.status
      //     }
      //   })

      console.log(action.payload, "at slice");

      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
        console.log(state.items[index])
      }

    },
  },
});

export const { addContact, removeContact, updateContact } =
  contactSlice.actions;

export default contactSlice.reducers;

const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    contacts: {
      items: [
        {
            id: 1,
            firstName: "Sarah",
            lastName: "Naved",
            status: "Inactive",
          },
          {
            id: 2,
            firstName: "Ayesha",
            lastName: "Arif",
            status: "Inactive",
          },
          {
            id: 3,
            firstName: "Uru",
            lastName: "Jam",
            status: "Active",
          },
          {
            id: 4,
            firstName: "Ilma",
            lastName: "Shah",
            status: "Inactive",
          },
          {
            id: 5,
            firstName: "Ifrah",
            lastName: "Andleeb",
            status: "Active",
          },
      ],
    },
  },
});