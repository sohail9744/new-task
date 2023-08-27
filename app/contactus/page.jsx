"use client";
import { useState } from "react";
import SideBar from "../Components/SideBar";
import AddContact from "./addContact.jsx";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import "../globals.css";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../Components/Redux/counterSlice";
import UpdateContact from "./updateContact";

function Home() {
  const [isOpen, setOpen] = useState(false);
  const [isUpdateVisible, setUpdateVisible] = useState(false);
  const [isUpdateItem, setUpdateItem] = useState(null);
  const dispatch = useDispatch();

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };
  const handleDelete = (id) => {
    dispatch(removeUser(id));
  };
  const data = useSelector((state) => state.users);
  const onUpdate = (id) => {
    const updateItem = data.filter((item) =>
      item.id === id ? item : "Not record"
    );
    setUpdateItem(updateItem);
    setUpdateVisible(true);
  };
  return (
    <>
      <SideBar />
      <main className="w-full p-32  bg-stone-200">
        <div className="flex justify-between items-center">
          <label className="text-2xl mb-3 font-bold">Contact Details</label>
          <Button variant="outlined" onClick={openForm} startIcon={<AddIcon />}>
            Add New Record
          </Button>
        </div>
        <div>
          {isOpen && <AddContact closeForm={closeForm} />}
          {isUpdateVisible && (
            <UpdateContact
              openForm={(ev) => true}
              isUpdateItem={isUpdateItem}
            />
          )}
        </div>
        {data.length !== 0 &&
          data.map((item, key) => (
            <div
              key={item.id}
              className="flex gap-2 justify-between my-2 items-center"
            >
              <label htmlFor="">
                {item.name} {item.lastName}
              </label>
              <label htmlFor="">{item.active ? "Active" : "Not Active"}</label>
              <div className="flex gap-3">
                <Button
                  variant="outlined"
                  onClick={(ev) => onUpdate(item.id)}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={(ev) => handleDelete(item.id)}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        {data.length == 0 && (
          <div className="flex justify-center items-center pt-36">
            <label className="text-xl">No Record :(</label>
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
