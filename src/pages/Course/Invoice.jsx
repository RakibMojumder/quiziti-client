import React, { useEffect } from "react";
import AnimatePage from "../../components/Helper/AnimatePage";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { MdDownload } from "react-icons/md";
import { createRef } from "react";
import Pdf from "react-to-pdf";
import { format } from "date-fns";

const Invoice = () => {
  const { state } = useLocation();
  const ref = createRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.studentEmail) {
      return navigate("*");
    }
  }, [state?.studentEmail, navigate]);

  const options = {
    orientation: "landscape",
  };

  return (
    <AnimatePage>
      <div
        ref={ref}
        className="min-h-screen md:w-2/3 mx-auto my-10 md:my-20 px-2 md:p-0 bg-white border rounded-md relative"
      >
        <span className="animate-bounce text-3xl absolute top-5 right-7 cursor-pointer">
          <Pdf
            x={30}
            y={20}
            targetRef={ref}
            filename={`invoice.pdf`}
            options={options}
          >
            {({ toPdf }) => <MdDownload onClick={toPdf} />}
          </Pdf>
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-center uppercase bg-[#45C6B1] py-3">
          invoice
        </h1>
        <div className="py-5 sm:p-5">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center space-y-7 sm:space-y-0">
            <div className="text-sm text-center">
              <img className="h-10 sm:h-14 mx-auto" src={logo} alt="logo" />
              <p>Mirpur 12, Sopno Tower</p>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div>
              <h5>Name: {state?.studentName}</h5>
              <p>Email: {state?.studentEmail}</p>
              <p>Phone: {state?.phone}</p>
            </div>
          </div>
          <p className="sm:text-center sm:mt-10 sm:font-semibold">
            Date:{" "}
            <span className="font-normal">{format(new Date(), "PPP")}</span>
          </p>
          <p className="sm:text-center mb-10 sm:font-semibold">
            Transaction ID:{" "}
            <span className="font-normal">{state?.transactionId}</span>
          </p>

          <div className="overflow-x-auto mb-2 pb-20 border-b border-black">
            <table className="min-w-full divide-y-2 divide-black text-sm">
              <thead>
                <tr className="text-lg">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    S. No
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Course Title
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    1
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold">
                    {state?.courseTitle}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold text-lg">
                    {state?.price}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center">
            <span></span>
            <div>
              <div className="pr-16">
                <p className="font-semibold">
                  Sub Total: <span className="font-normal">{state?.price}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Tax</span>{" "}
                  <span>:{state?.tax}</span>
                </p>
              </div>
              <div className="border-t border-black mt-4 pr-16">
                <p className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span>:{state?.totalPrice}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default Invoice;
