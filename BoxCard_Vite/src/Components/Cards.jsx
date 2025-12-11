import React from "react";

function Cards({ image, username, fullName, btnVisit = "Visit Me" }) {
  const defaultImage =
    "https://cdn.pixabay.com/photo/2016/04/02/09/43/apple-1302430_1280.jpg";

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src={image || defaultImage} alt="card-image" />
      </div>
      <h1 className="text-2xl font-bold text-center my-6">Hello World</h1>
      <div className="p-4">
        <h4 className="mb-2 text-slate-800 text-xl font-semibold">
          Username : {username}
        </h4>
        <h5 className="text-slate-600 leading-normal font-bold">
          Full Name : {fullName}
        </h5>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          {btnVisit}
        </button>
      </div>
    </div>
  );
}

export default Cards;
