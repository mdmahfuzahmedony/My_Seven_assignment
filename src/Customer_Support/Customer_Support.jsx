import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
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
            className={` py-1.5 px-5 rounded-full text-[18px] font-semibold flex gap-2 justify-between items-center ${
              support_Card.status === "Open"
                ? "bg-green-400 /B12A7-Customer-Support-Zone/Ellipse.png"
                : "bg-orange-200 /B12A7-Customer-Support-Zone/Ellipse2.png"
            }`}
          >
            <img
              src={
                support_Card.status === "Open"
                  ? "/B12A7-Customer-Support-Zone/Ellipse.png"
                  : "/B12A7-Customer-Support-Zone/Ellipse2.png"
              }
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
              <img src="/B12A7-Customer-Support-Zone/Vector4.png" alt="" />
              <p className="text-black">{support_Card.createdAt}</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Customer_Support;
