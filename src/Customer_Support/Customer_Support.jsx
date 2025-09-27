import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import greenImg from "../assets/Ellipse.png";
import orangeImg from "../assets/Ellipse2.png";
import vector4 from "../assets/vector4.png";

const Customer_Support = ({ support_Card, setCount }) => {

  const handleClick = () => {
    toast.success(`In Progress!`);
  };


  return (
    <div>
      <div
        onClick={() => {
          handleClick();
          setCount((prev) => prev + 1);
          console.log("hi");
        }}
        className="bg-white shadow-2xl rounded-[10px] py-3 px-2 "
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] font-bold text-black">
            {support_Card.title}
          </h2>
          <div
            className={`py-1.5 px-5 rounded-full text-[18px] font-semibold flex gap-2 justify-between items-center ${
              support_Card.status === "Open" ? "bg-green-400" : "bg-amber-100"
            }`}
          >
            <img
              src={support_Card.status === "Open" ? greenImg : orangeImg}
              alt={support_Card.status}
              className="w-5 h-5"
            />
            <p className="text-black">{support_Card.status}</p>
          </div>
        </div>
        <p className="mt-[15px] text-black">{support_Card.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex justify-between items-center gap-2">
            <p className="text-[14px] text-black">{support_Card.id}</p>

            <p
              className={`text-black ${
                support_Card.priority === "High"
                  ? "text-red-400"
                  : support_Card.priority === "Medium"
                  ? "text-yellow-400"
                  : support_Card.priority === "Low"
                  ? "text-green-400"
                  : "text-gray-400"
              }`}
            >
              {support_Card.priority}
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p className="text-[14px] text-black ">{support_Card.customer}</p>
            <div className="flex justify-center items-center gap-2">
              <img src={vector4} alt="" />
              <p className="text-black">{support_Card.createdAt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <ToastContainer></ToastContainer> */}
    </div>
  );
};

export default Customer_Support;
