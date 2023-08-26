'use client'
import { useState } from "react";
import SideBar from "../Components/SideBar";
import AddContact from "./addContact.jsx";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function Page() {
  const [isOpen, setOpen] = useState(false);

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };

  return (
    <>
      <SideBar />
      <main className="w-full p-32 bg-stone-200">
        <div className="flex justify-end">
          <Button variant="outlined" onClick={openForm} startIcon={<AddIcon />}>
            Add New Record
          </Button>
        </div>
        <div className="bg-yellow-200">
          {isOpen && <AddContact closeForm={closeForm} />}
        </div>
      </main>
    </>
  );
}

export default Page;
