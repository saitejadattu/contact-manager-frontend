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
    await fetch("https://contact-manager-backend-4.onrender.com/add", payload);
    setData({});
  };
  useEffect(() => {
    fetchContacts();
  }, [data]);
  const fetchContacts = async () => {
    const response = await fetch(
      "https://contact-manager-backend-4.onrender.com/"
    );
    const data = await response.json();
    setContacts(data);
  };
  const deleted = () => {
    fetchContacts();
  };
  return (
    <div className="min-h-screen w-screen bg-violet-500 text-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-1">
        <form
          onSubmit={handleForm}
          className="bg-slate-700 p-5 rounded text-white flex justify-center items-center gap-5 flex-1"
        >
          <div>
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
          </div>
          <br />
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleInput}
              placeholder="Enter email......"
              value={data?.email}
              className="border-2  bg-slate-600"
              required
            />
            <br />
          </div>

          <div>
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
          </div>
          <button
            className="p-3 rounded bg-white text-black mt-5"
            type="submit"
          >
            Add
          </button>
        </form>
        <ul className="list-none w-2/3 flex-">
          {contacts
            ? [...contacts]
                .reverse()
                ?.map((each) => (
                  <EachContact key={each._id} each={each} deleted={deleted} />
                ))
            : [1, 2, 3, 4, 5, 6, 7].map((each) => (
                <li className="border-2 border-white-500 h-50px p-4 m-4 w-full">
                  <div class="animate-pulse space-y-4 max-w-sm w-full">
                    <div class="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div class="h-4 bg-gray-300 rounded w-full"></div>
                    <div class="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
