import {
  faEnvelope,
  faInbox,
  faMagic,
  faMedal,
  faPager,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.svg";

function App() {
  const links = [
    {
      title: "Iqtest",
      links: [
        {
          title: "Quiz",
          url: "/quiz",
        },
        {
          title: "Results",
          url: "/results",
        },
        {
          title: "Pricing",
          url: "/pricing",
        },
      ],
    },
    {
      title: "support",
      links: [
        {
          title: "help",
          url: "/help",
        },
        {
          title: "FAQ",
          url: "/FAQ",
        },
        {
          title: "Contact",
          url: "/Contact",
        },
      ],
    },
    {
      title: "legal",
      links: [
        {
          title: "Privacy Policy",
          url: "/privacy-policy",
        },
        {
          title: "Terms of Use",
          url: "/terms-of-use",
        },
        {
          title: "Cookie Policy",
          url: "/cookie-policy",
        },
      ],
    },
  ];

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="rounded-3xl border p-10 bg-black text-white">
          <div className="flex items-center justify-between flex-col md:flex-row gap-10 w-full">
            <div className="flex flex-col gap-5 flex-auto w-full md:items-start items-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="text-white font-"
                />
              </div>
              <h1 className="text-6xl md:text-start text-center">
                Keep up with the latest
              </h1>
              <p className="text-xl font-normal">
                Join our newsletter to stay up to date on features and releases.
              </p>
            </div>
            <div className="flex flex-col gap-5 w-full flex-auto items-center">
              <p className="text-2xl font-bold">Stay up to date</p>
              <div className="flex items-center gap-3 w-full flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="p-2 px-4 rounded-full bg-gray-100 focus:bg-white focus:border-blue-500 transition duration-200 border-2 outline-none flex-1 w-full"
                />
                <button className="p-2 px-4 rounded-full hover:bg-gray-100 text-white bg-blue-500 transition duration-200 border-2 outline-none border-blue-500 hover:border-white text-xl font-normal">
                  Subscribe
                </button>
              </div>
              <p className="text-xl font-normal text-center">
                By subscribing you agree to our Privacy Policy
              </p>
            </div>
          </div>

          <hr className="bg-gray-100 w-full my-20" />

          <div className="flex items-start justify-between flex-col md:flex-row gap-20">
            <div className="md:w-1/3 w-full">
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-10" />
                <p className="font-normal text-3xl">IQTEST.ai</p>
              </div>
              <p className="text-xl text-gray-500 mt-6">
                Test your IQ in a very easy and simple step not complex.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="grid sm:grid-cols-3 grid-cols-2 place-content-between">
                {links.map((link, index) => (
                  <div key={index}>
                    <h1 className="text-lg font-medium mb-3 uppercase">
                      {link.title}
                    </h1>
                    <div className="flex flex-col gap-3">
                      {link.links.map((sublink, index) => (
                        <a
                          key={index}
                          href={sublink.url}
                          className="text-base font-normal text-gray-500"
                        >
                          {sublink.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="gap-5 my-14 flex justify-between items-center sm:flex-row flex-col">
          <div className="text-base font-semibold text-gray-800">
            © 2023 IQTEST.AI
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faMedal} className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInbox} className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPager} className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faMagic} className="text-white" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
