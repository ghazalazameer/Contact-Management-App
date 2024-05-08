import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../middleware/store";
import { showToastMessage } from "../utils/helpers";
import { nanoid } from "nanoid";

const radioItems = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

const CreateContact = ({ edit }: any) => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setParams({
      firstName: state?.firstName,
      lastName: state?.lastName,
      status: state?.status,
    });
  }, [state]);

  const initialStates = {
    firstName: "",
    lastName: "",
    status: "",
  };

  const [params, setParams] = useState(initialStates);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  const handleRadio = (e: any) => {
    setParams({ ...params, status: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(addContact({ ...params, id: nanoid() }));
    navigate("/contacts");
  };

  const handleUpdate = () => {
    dispatch(updateContact({ ...params, id: state.id }));
    navigate("/contacts");
  };

  return (
    <div className="flex lg:flex-row flex-col">
      <Sidebar />
      <div className="lg:w-[1190px] w-full mt-20">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            {edit ? "Edit Contact" : "Create Contact"}
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Alix"
              value={params.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Coe"
              value={params.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Status</label>
            <div className="flex items-center">
              {radioItems.map((item, index) => (
                <div key={index} className="flex items-center mr-4">
                  <input
                    id={`radio-${item.value}`}
                    type="radio"
                    name="status"
                    value={item.value}
                    checked={params.status === item.value}
                    onChange={handleRadio}
                    className="form-radio h-5 w-5 text-indigo-500"
                  />
                  <label
                    htmlFor={`radio-${item.value}`}
                    className="ml-2 text-gray-700"
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={edit ? handleUpdate : handleSubmit}
            >
              {edit ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;