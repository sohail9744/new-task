"use client";
import { useDispatch } from "react-redux";
import { updateUser } from "../Components/Redux/counterSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export default function UpdateContact({ openForm, isUpdateItem }) {
  const [updateData, setUpdateData] = useState(isUpdateItem[0]);
  const [closeForm, setCloseForm] = useState(true);
  const handleFormClose = () => {
    setCloseForm(false);
  };
  const dispatch = useDispatch();

  console.log("bhai updateuseState mai value agyi", updateData);
  const handleUpdateItem = (event) => {
    event.preventDefault();
    dispatch(updateUser(updateData));
    toast("updated Successfully");
    setCloseForm(false)
  };
  const handleInputChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setUpdateData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };
  return (
    closeForm && (
      <div className="h-screen absolute top-10  right-36 w-3/4">
        <ToastContainer />
        <div className="w-1/3 p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          <h1 className="text-xl font-semibold text-center text-indigo-700 underline uppercase decoration-clone">
            Add Contact
          </h1>
          <form
            onSubmit={handleUpdateItem}
            className="mt-3 flex flex-col gap-4"
          >
            <div className="mb-2">
              <label>
                <span className="text-gray-700">First name</span>
                <input
                  type="text"
                  name="name"
                  value={updateData.name}
                  onChange={handleInputChange}
                  className="
            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Ex: Sohail"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Last Name</span>
                <input
                  name="lastName"
                  type="text"
                  value={updateData.lastName}
                  onChange={handleInputChange}
                  className="
            block
            w-full
            mt-2 px-2 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Ex: Khan"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <label htmlFor="Status">Status</label>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  <input
                    id="active"
                    name="active"
                    type="checkbox"
                    checked={updateData.active}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                  />
                  <label
                    htmlFor="active"
                    className="r-2 block text-sm text-gray-900"
                  >
                    Active
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    id="inactive"
                    name="inactive"
                    type="checkbox"
                    checked={updateData.inactive}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                  />
                  <label
                    htmlFor="in-active"
                    className="r-2 block text-sm text-gray-900"
                  >
                    In-Active
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="update"
                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              >
                update
              </button>
              <button
                type="button"
                className="
            h-10
            px-5
            text-indigo-100
            bg-red-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-red-800
          "
                onClick={(ev) => handleFormClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
        <ToastContainer closeOnClick />
      </div>
    )
  );
}
