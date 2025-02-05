import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8 text-black border-b-4 border-yellow-500 mt-16 pb-2">
            Privacy Policy
          </h1>

          {/* Introduction */}
          <div className="prose max-w-none text-black space-y-6">
            <p>
              This Privacy Policy describes our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects you.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Interpretation and Definitions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-yellow-500 pl-3">
              Interpretation and Definitions
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-black">
                Interpretation
              </h3>
              <p className="text-black">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Definitions
              </h3>
              <p className="mb-4 text-black">
                For the purposes of this Privacy Policy:
              </p>
              <div className="space-y-4">
                {/* Each definition in its own card */}
                <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-black">
                    <span className="text-yellow-600 font-semibold">
                      Account{" "}
                    </span>
                    means a unique account created for You to access our Service
                    or parts of our Service. Affiliate means an entity that
                    controls, is controlled by or is under common control with a
                    party, where "control" means ownership of 50% or more of the
                    shares, equity interest or other securities entitled to vote
                    for election of directors or other managing authority.
                  </p>
                  <p className="text-black">
                    <span className="text-yellow-600 font-semibold">
                      Application
                    </span>{" "}
                    means the software program provided by the Company
                    downloaded by You on any electronic device, named Drizzy or
                    Drizzy Trainer or RRS & Co. or Drizzy GoSafe.
                  </p>
                  <p className="text-black">
                    <span className="text-yellow-600 font-semibold">
                      Company
                    </span>{" "}
                    (referred to as either "the Company", "We", "Us" or "Our" in
                    this Agreement) refers to RRS & Co. (Drizzy GoSafe), 57A,
                    Pocket A11, Kalkaji Extension, Delhi - 110019.
                  </p>
                  <p className="text-black">
                    <span className="text-yellow-600 font-semibold">
                      Cookies
                    </span>{" "}
                    are small files that are placed on Your computer, mobile
                    device or any other device by a website, containing the
                    details of Your browsing history on that website among its
                    many uses. Country refers to: Delhi, India.
                  </p>
                  <p className="text-black">
                    <span className="text-yellow-600 font-semibold">
                      Device
                    </span>{" "}
                    means any device that can access the Service such as a
                    computer, a cellphone or a digital tablet. Personal Data is
                    any information that relates to an identified or
                    identifiable individual. Service refers to the Application
                    or the Website or both.
                  </p>
                  <p className="text-black">
                    <span className="text-yellow-600 font-semibold">
                      Service Provider
                    </span>{" "}
                    means any natural or legal person who processes the data on
                    behalf of the Company. It refers to third-party companies or
                    individuals employed by the Company to facilitate the
                    Service, to provide the Service on behalf of the Company, to
                    perform services related to the Service or to assist the
                    Company in analyzing how the Service is used.
                  </p>
                  <p className="text-black">
                    <span className="text-yellow-600 font-semibold">
                      Usage Data
                    </span>{" "}
                    refers to data collected automatically, either generated by
                    the use of the Service or from the Service infrastructure
                    itself (for example, the duration of a page visit).
                  </p>
                  <p className="text-black">
                    <span className="text-yellow-600 font-semibold">
                      Website
                    </span>{" "}
                    refers to RRS & Co. (Drizzy GoSafe), accessible from
                    https://www.drizzy.in/ <br />
                    You mean the individual accessing or using the Service, or
                    the company, or other legal entity on behalf of which such
                    individual is accessing or using the Service, as applicable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Data Collected */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-yellow-500 pl-3">
              Collecting and Using Your Personal Data
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Types of Data Collected
              </h3>

              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <h4 className="font-semibold text-yellow-600 mb-3">
                  Personal Data
                </h4>
                <p className="mb-3">
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="list-none pl-4 space-y-2">
                  <li>Email Address</li>
                  <li>First Name and Last Name</li>
                  <li>Phone Number</li>
                  <li>Address, State, Province, ZIP/Postal Code, City</li>
                  <li>Usage Data</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <h4 className="font-semibold text-yellow-600 mb-3">
                  Usage Data
                </h4>
                <p className="mb-3">
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="list-none pl-4 space-y-2">
                  <li>
                    Usage Data is collected automatically when using the
                    Service.
                  </li>
                  <li>
                    Usage Data may include information such as Your Device's
                    Internet Protocol address (e.g. IP address), browser type,
                    browser version, the pages of our Service that You visit,
                    the time and date of Your visit, the time spent on those
                    pages, unique device identifiers and other diagnostic data.
                  </li>
                  <li>
                    When You access the Service by or through a mobile device,
                    We may collect certain information automatically, including,
                    but not limited to, the type of mobile device You use, Your
                    mobile device unique ID, the IP address of Your mobile
                    device, Your mobile operating system, the type of mobile
                    Internet browser You use, unique device identifiers and
                    other diagnostic data.
                  </li>
                  <li>
                    We may also collect information that Your browser sends
                    whenever You visit our Service or when You access the
                    Service by or through a mobile device
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <h4 className="font-semibold text-yellow-600 mb-3">
                  Information Collected while Using the Application
                </h4>
                <p className="mb-3">
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="list-none pl-4 space-y-2">
                  <li>
                    While using Our Application, in order to provide features of
                    Our Application, We may collect, with Your prior permission:
                    Information regarding your location Information from your
                    Device's phone book (contacts list) Pictures and other
                    information from your Device's camera and photo library
                  </li>
                  <li>
                    We use this information to provide features of Our Service,
                    to improve and customize Our Service. The information may be
                    uploaded to the Company's servers and/or a Service
                    Provider's server or it may be simply stored on Your device.
                  </li>
                  <li>
                    You can enable or disable access to this information at any
                    time, through Your Device settings
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <h4 className="font-semibold text-yellow-600 mb-3">
                  Tracking Technologies and Cookies
                </h4>
                <p className="mb-3">
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
                </p>
                <ul className="list-none pl-4 space-y-2">
                  <li>
                    Cookies or Browser Cookies. A cookie is a small file placed
                    on Your Device. You can instruct Your browser to refuse all
                    Cookies or to indicate when a Cookie is being sent. However,
                    if You do not accept Cookies, You may not be able to use
                    some parts of our Service. Unless you have adjusted Your
                    browser setting so that it will refuse Cookies, our Service
                    may use Cookies.
                  </li>
                  <li>
                    Flash Cookies. Certain features of our Service may use local
                    stored objects (or Flash Cookies) to collect and store
                    information about Your preferences or Your activity on our
                    Service. Flash Cookies are not managed by the same browser
                    settings as those used for Browser Cookies. For more
                    information on how You can delete Flash Cookies, please read
                    "Where can I change the settings for disabling, or deleting
                    local shared objects?" available at ADOBE
                  </li>
                  <li>
                    Web Beacons. Certain sections of our Service and our emails
                    may contain small electronic files known as web beacons
                    (also referred to as clear gifs, pixel tags, and
                    single-pixel gifs) that permit the Company, for example, to
                    count users who have visited those pages or opened an email
                    and for other related website statistics (for example,
                    recording the popularity of a certain section and verifying
                    system and server integrity).
                  </li>

                  <span>
                    Cookies can be "Persistent" or "Session" Cookies. Persistent
                    Cookies remain on Your personal computer or mobile device
                    when You go offline, while Session Cookies are deleted as
                    soon as You close Your web browser. We use both Session and
                    Persistent Cookies for the purposes set out below: Necessary
                    / Essential Cookies Type: Session Cookies Administered by:
                    Us Purpose: These Cookies are essential to provide You with
                    services available through the Website and to enable You to
                    use some of its features. They help to authenticate users
                    and prevent fraudulent use of user accounts. Without these
                    Cookies, the services that You have asked for cannot be
                    provided, and We only use these Cookies to provide You with
                    those services. Cookies Policy / Notice Acceptance Cookies
                    Type: Persistent Cookies Administered by: Us Purpose: These
                    Cookies identify if users have accepted the use of cookies
                    on the Website. Functionality Cookies Type: Persistent
                    Cookies Administered by: Us Purpose: These Cookies allow us
                    to remember choices You make when You use the Website, such
                    as remembering your login details or language preference.
                    The purpose of these Cookies is to provide You with a more
                    personal experience and to avoid You having to re-enter your
                    preferences every time You use the Website. For more
                    information about the cookies we use and your choices
                    regarding cookies, please visit our Cookies Policy or the
                    Cookies section of our Privacy Policy.
                  </span>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <h4 className="font-semibold text-yellow-600 mb-3">
                Use of Your Personal Data
                </h4>
                <p className="mb-3">
                The Company may use Personal Data for the following purposes:</p>
                <ul className="list-none pl-4 space-y-2">
                  <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                  <li>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                  <li>or the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                  <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                  <li>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                  To manage Your requests: To attend and manage Your requests to Us</li>
                  <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                  <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                </ul>
                <br />
                <span>We may share Your personal information in the following situations:</span>
                <ul>
                  <li>With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                  <li>For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company
                  </li>
                  <li> With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                  <li>With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                  <li>With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                  <li>
                  With Your consent: We may disclose Your personal information for any other purpose with Your consent.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <h4 className="font-semibold text-yellow-600 mb-3">
                Retention of Your Personal Data
                </h4>
                <p className="mb-3">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                </p>
                <p className="mb-3">
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                </p>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <h4 className="font-semibold text-yellow-600 mb-3">
                  Transfer of your Personal Data
                </h4>
                <p className="mb-3">
                Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                <p>
                Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                </p> <br />
                <p>
                The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                </p>
              </div>


              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <h3 className="font-semibold text-yellow-600 mb-3">
                Disclosure of Your Personal Data
                </h3>
                <h4>
                Business Transactions
                </h4>
                <p className="mb-3">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                <h4>
                Law enforcement
                </h4>
                <p className="mb-3">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                <h4>
                Other legal requirements
                </h4>
                <p className="mb-3">
                The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                <ol>
                  <li>Comply with a legal obligation</li>
                  <li>Protect and defend the rights or property of the Company</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                  <li>Protect the personal safety of Users of the Service or the public</li>
                  <li>Protect against legal liability</li>
                </ol>
                

              </div>


              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <h4 className="font-semibold text-yellow-600 mb-3">
                Security of Your Personal Data
                </h4>
                <p className="mb-3">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                
              </div>

            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-yellow-500 pl-3">
            Children's Privacy
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
              </p>
              <p>
              If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-yellow-500 pl-3">
            Links to Other Websites
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
<br/>
We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-yellow-500 pl-3">
            Changes to this Privacy Policy
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
<br/>
We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
<br/>
You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </div>

          <div className="mt-8">
          <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-yellow-500 pl-3">Contact Us</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2">If you have any questions about this Privacy Policy, You can contact us:</p>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="mb-2"><span className="text-yellow-600 font-semibold">By E-Mail:</span> drizzy.gosafe@gmail.com</p>
              <p><span className="text-yellow-600 font-semibold">By Mail:</span> 57A, Pocket A11, Kalkaji Extension, Delhi - 110019</p>
            </div>
          </div>
        </div>

          {/* Grievance Redressal */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black mb-4 border-l-4 border-yellow-500 pl-3">
              Grievance Redressal
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">
                In case, you have any complaints, you can contact:
              </p>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <p className="mb-2">
                  <span className="text-yellow-600 font-semibold">
                    Grievance Officer:
                  </span>{" "}
                  Mr. Rudransh Garg
                </p>
                <p className="mb-2">
                  <span className="text-yellow-600 font-semibold">
                    Contact:
                  </span>{" "}
                  drizzy.gosafe@gmail.com & +917042009908
                </p>
                <p>
                  <span className="text-yellow-600 font-semibold">
                    By Mail:
                  </span>{" "}
                  57A, Pocket A11, Kalkaji Extension, Delhi – 110019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Privacy;
