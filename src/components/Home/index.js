import React, { useEffect, useState } from "react";
import EachContact from "../EachContact";
import Navbar from "../Navbar";

const Home = () => {
  const [contacts, setContacts] = useState();
  const [data, setData] = useState({});
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    const payload = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch("https://contact-manager-backend-2-gv9i.onrender.com/add", payload);
    fetchContacts();
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  const fetchContacts = async () => {
    const response = await fetch("https://contact-manager-backend-2-gv9i.onrender.com/");
    const data = await response.json();
    setContacts(data);
  };
  const deleted = () => {
    fetchContacts();
  };
  return (
    <div className="h-screen w-screen ">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <ul className="list-none w-2/3">
          {contacts?.map((each) => (
            <EachContact key={each._id} each={each} deleted={deleted} />
          ))}
        </ul>
        <form
          onSubmit={handleForm}
          className="bg-slate-700 w-80 p-5 rounded text-white "
        >
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleInput}
            placeholder="Enter Your Name........"
            value={data.name}
            className="border-2 bg-slate-600"
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleInput}
            placeholder="Enter email......"
            value={data.email}
            className="border-2  bg-slate-600"
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
            value={data.phone}
            className="border-2  bg-slate-600"
            onChange={handleInput}
            required
          />
          <br />
          <button
            className="p-3 rounded bg-white text-black mt-5"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
