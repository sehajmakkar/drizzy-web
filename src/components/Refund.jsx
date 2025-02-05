import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CancellationRefundPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-10">
          Cancellation & Refund Policy
        </h1>
        <p className="text-gray-600 mb-4">
          Drizzy GoSafe believes in helping its customers as far as possible and has therefore adopted a liberal cancellation policy. Under this policy:
        </p>

        <ul className="list-decimal list-inside text-gray-600 space-y-4">
          <li>
            <span className="font-semibold">Cancellations</span> will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
          </li>
          <li>
            In case of any <span className="font-semibold">Refunds</span> approved by Drizzy GoSafe, the refunded amount will be credited to your bank account within <span className="font-semibold">6-8 working days</span>.
          </li>
          <li>
            In case of receipt of <span className="font-semibold">damaged or defective items</span>, please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within the <span className="font-semibold">same day</span> of receipt of the products.
          </li>
          <li>
            If you feel that the product received is <span className="font-semibold">not as shown</span> on the site or as per your expectations, you must bring it to the notice of our customer service within the <span className="font-semibold">same day</span> of receiving the product. The Customer Service Team, after looking into your complaint, will take an appropriate decision.
          </li>
          <li>
            For complaints regarding products that come with a <span className="font-semibold">warranty</span> from manufacturers, please refer the issue to them.
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CancellationRefundPolicy;
