import React from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const EachContact = (props) => {
  const { each, deleted } = props;
  const { name, phone, email } = each;
  const navigate = useNavigate();
  const payload = {
    method: "Delete",
  };
  const handleDelete = async () => {
    await fetch(`https://contact-manager-backend-2-gv9i.onrender.com/delete/${each._id}`, payload);
    deleted();
  };
  const handeleUpdate = () => {
    navigate(`/update/${each._id}`);
  };
  return (
    <li className="border-2 border-red-500 p-5 m-1 flex justify-between w-full">
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
      <div className="gap-5">
        <MdDelete className="w-5 h-5 m-2" onClick={handleDelete} />
        <MdOutlineSystemUpdateAlt
          className="w-5 h-5 m-2"
          onClick={handeleUpdate}
        />
      </div>
    </li>
  );
};

export default EachContact;
