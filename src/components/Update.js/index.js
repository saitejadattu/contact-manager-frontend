import React from "react";

const Update = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form className="bg-slate-700 w-80 p-5 rounded text-white ">
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter Your Name........"
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
          placeholder="Enter email......"
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
          className="border-2  bg-slate-600"
          required
        />
        <br />
        <button className="p-3 rounded bg-white text-black mt-5" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Update;
