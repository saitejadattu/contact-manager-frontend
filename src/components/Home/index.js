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
          className="bg-slate-700 p-6 rounded text-white w-full max-w-xl mx-auto flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label htmlFor="name" className="w-full sm:w-1/3">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleInput}
              placeholder="Enter Your Name"
              value={data.name}
              className="border-2 bg-slate-600 rounded px-3 py-2 w-full sm:w-2/3"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label htmlFor="email" className="w-full sm:w-1/3">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleInput}
              placeholder="Enter Email"
              value={data.email}
              className="border-2 bg-slate-600 rounded px-3 py-2 w-full sm:w-2/3"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label htmlFor="number" className="w-full sm:w-1/3">
              Phone Number
            </label>
            <input
              id="number"
              name="phone"
              type="number"
              placeholder="Enter Your Number"
              value={data.phone}
              onChange={handleInput}
              className="border-2 bg-slate-600 rounded px-3 py-2 w-full sm:w-2/3"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              className="px-6 py-2 rounded bg-white text-black hover:bg-gray-200 transition mt-4"
              type="submit"
            >
              Add
            </button>
          </div>
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
