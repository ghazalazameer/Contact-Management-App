import { nanoid } from "nanoid";

const initialState = [
  [
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
];

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...state,
        {
          id: nanoid(),
          firstName: action?.payload?.firstName,
          lastName: action?.payload?.lastName,
          status: action?.payload?.status,
        },
      ];

    case "DELETE_CONTACT":
      return state.filter((item: any) => item.id !== action.payload?.id);

    case "EDIT_CONTACT":
      return state;

    default:
      return state;
  }
};

export default contactReducer;