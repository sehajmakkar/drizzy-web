import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-16">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-4">
          The Website & App Owner, including subsidiaries and affiliates
          (“Website” or “Website Owner” or “App” or “App Owner” or “we” or “us”
          or “our”) provides the information contained on the website or any of
          the pages comprising the website (“website”) & app (“app”) to
          visitors (“visitors”) (cumulatively referred to as “you” or “your”
          hereinafter) subject to the terms and conditions set out in these
          website & app terms and conditions, the privacy policy, and any other
          relevant terms and conditions, policies, and notices which may be
          applicable to a specific section or module of the website & app.
        </p>

        <p className="text-gray-600 mb-4">
          Welcome to our website & app. If you continue to browse and use this
          website or app you are agreeing to comply with and be bound by the
          following terms and conditions of use, which together with our privacy
          policy govern Drizzy GoSafe's relationship with you in relation to
          this website or app.
        </p>

        <p className="text-gray-600 mb-4">
        The term 'Drizzy GoSafe' or 'us' or 'we' refers to the owner of the website & app whose registered/operational office is 57 A Pocket A - 11 Kalkaji Extension South Delhi DELHI 110019. The term 'you' refers to the user or viewer of our website & app.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          Terms of Use:
        </h2>

        <ul className="list-decimal list-inside text-gray-600 space-y-3">
          <li>
            The content of the pages of this website & app is for your general
            information and use only. It is subject to change without notice.
          </li>
          <li>
          Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          </li>
          <li>
           Your use of any information or materials on this website & app is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website & app meet your specific requirements.
          </li>
          <li>
          This website & app contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
          </li>
          <li>
          All trademarks reproduced in this website or app which are not the property of, or licensed to, the operator are acknowledged on the website.
          </li>
          <li>
            Unauthorized use of this website or app may give rise to a claim for
            damages and/or be a criminal offense.
          </li>
          <li>
          From time to time this website & app may also include links to other websites or applications. These links are provided for your convenience to provide further information.
          </li>
          <li>
            You may not create a link to this website & app from another website
            or document without Drizzy GoSafe’s prior written consent.
          </li>
          <li>
          Your use of this website or app and any dispute arising out of such use of the website or app is subject to the laws of India or other regulatory authority
          </li>
          <li>
          We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;
