import { useState } from "react";
import Customer_Support from "../../../../Customer_Support/Customer_Support";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const completeBtn = () => {
  toast.success("Complete");
};

const Main_part = ({
  customerSupports,
  setCount,
  setComplateCount,
  setCustomerSupport,
}) => {
  const [selectedTitle, setSelectedTitle] = useState([]);
  const [resolved, setResolved] = useState([]);

  return (
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between gap-5 w-full">
      <div className="w-full md:w-3/4">
        <h3 className="text-black font-bold text-[20px] py-2 pl-2">
          Customer Tickets
        </h3>

        <div className="t-2 mb-16 grid grid-cols-1 md:grid-cols-2 w-full gap-10">
          {customerSupports.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedTitle([...selectedTitle, item.title]);
              }}
            >
              <Customer_Support
                support_Card={item}
                setCount={setCount}
                SetSelectedTitle={setSelectedTitle}
                selectedTitle={selectedTitle}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex-1 w-full shadow-2xl">
        <h3 className="text-black font-bold text-[20px] py-2 pl-2">
          Take Status
        </h3>

        {selectedTitle.length === 0 ? (
          <p className="text-black pl-2">
            Select a ticket to add to Task Status
          </p>
        ) : (
          selectedTitle.map((item, index) => (
            <div
              key={index}
              className="py-2 px-2 bg-gray-100 my-4 shadow-2xl rounded-md mx-2"
            >
              <p className="text-black text-[20px] font-semibold pb-1">
                {item}
              </p>

              <button
                onClick={() => {
                  completeBtn();
                  setComplateCount((prev) => prev + 1);
                  setCount((prev) => prev - 1);
                  setSelectedTitle((prev) =>
                    prev.filter((title) => title !== item)
                  );
                  setCustomerSupport((prev) =>
                    prev.filter((support) => support.title !== item)
                  );
                  setResolved((prev) => [...prev, item]);
                }}
                className="w-full bg-green-500 text-white py-1"
              >
                Complete
              </button>
            </div>
          ))
        )}
        <h3 className="text-black font-bold text-[20px] py-2 pl-2">
          Resolved Task
        </h3>

        {resolved.length === 0 ? (
          <p className="text-black pl-2">No resolved tasks yet.</p>
        ) : (
          resolved.map((task, index) => (
            <div
              key={index}
              className="py-2 px-2 bg-green-100 my-4 shadow-2xl rounded-md mx-2"
            >
              <p className="text-black text-[20px] font-semibold pb-1">
                {task}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-black">
                  {" "}
                  <i class="fa-solid fa-check"></i> Complete
                </p>
                <button
                  className="text-red-500"
                  onClick={() =>
                    setResolved(resolved.filter((_, i) => i !== index))
                  }
                >
                  Click the Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Toast container শুধু একবার */}
      <ToastContainer />
    </div>
  );
};

export default Main_part;
