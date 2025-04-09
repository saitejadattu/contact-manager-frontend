import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
const Update = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const handleForm = async (e) => {
    e.preventDefault();
    await fetch(
      `https://contact-manager-backend-4.onrender.com/update/${id}`,
      payload
    );
    setMessage("updated");
    fetchData();
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setMessage("");
  };
  useEffect(() => {
    fetchData();
  }, []);
  const payload = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const fetchData = async () => {
    const response = await fetch(
      `https://contact-manager-backend-4.onrender.com/contact/${id}`
    );

    const item = await response.json();
    setData(item);
  };
  return (
    <div className="h-screen w-screen bg-violet-500">
      <Navbar />
      <div className="flex justify-center items-center ">
        <form
          className="bg-slate-700 w-80 p-5 rounded text-white "
          onSubmit={handleForm}
        >
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name........"
            onChange={handleInput}
            className="border-2 bg-slate-600"
            value={data.name}
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email......"
            className="border-2  bg-slate-600"
            onChange={handleInput}
            value={data.email}
            required
          />
          <br />
          <label htmlFor="number">Phone Number</label>
          <br />
          <input
            id="number"
            name="phone"
            type="number"
            placeholder="Enter Your Number.........."
            className="border-2  bg-slate-600"
            value={data.phone}
            onChange={handleInput}
            required
          />
          <br />
          <button
            className="p-3 rounded bg-white text-black mt-5"
            type="submit"
          >
            Update
          </button>
          <p className="text-yellow-500">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Update;
