import { useEffect, useRef, useState } from "react";
import { subscribeNewsletter } from "../../services/Newsletter";

import { SubscribeNewsletterPayload } from "../../types/SubscribeNewsletterPayload";

import { ServerConfig } from "../../configs/ServerConfig";

const publicFrontendUrl = ServerConfig.getPublicFrontendUrl();

const ProjectLayout = ({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(true);
  const [alertType, setAlertType] = useState("success");
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("false");

  const emailInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isMobile) setIsMobileMenuShow(false);
  }, []);

  const handleSubscribeNewsletterSubmit = async (event: any) => {
    event.preventDefault();

    const subscribeNewsletterPaylaod: SubscribeNewsletterPayload = {
      email: emailInput.current?.value as string,
    };

    try {
      await subscribeNewsletter(subscribeNewsletterPaylaod);
      setAlertType("success");
      setAlertShow(true);
      setAlertMessage("Thank you for subscribe!");
    } catch (error: any) {
      setAlertType("error");
      setAlertShow(true);
      setAlertMessage(error.data.message);
    }
  };

  return (
    <div className="font-montserrat">
      <div className="absolute top-0 left-0 w-full z-30">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="flex items-center lg:items-start justify-between w-full py-6 lg:py-8">
            <img
              src="/images/ai/ai-logo.png"
              className="w-26 lg:w-44 flex-shrink-0"
              alt="NFI Logo"
            />
            <button
              className="lg:hidden z-2"
              onClick={() => setIsMobileMenuShow(!isMobileMenuShow)}
            >
              <i className="uil uil-bars text-4xl"></i>
            </button>
            <div
              className={`absolute lg:relative flex flex-col lg:flex-row items-center lg:space-x-8 px-6 lg:px-0 pt-4 lg:pt-0 bg-white lg:bg-transparent w-full lg:w-auto left-0 z-1 transition-all ${
                isMobileMenuShow ? "top-0" : "-top-64"
              }`}
            >
              <a
                href={`${publicFrontendUrl}/about-us`}
                className="w-full lg:w-auto py-6 lg:py-0 border-b-2 lg:border-b-0 border-black text-center lg:text-left text-xl font-bold uppercase hover:text-mint-purple transition-all"
              >
                TEAM
              </a>
              {/* <a
                href="#"
                className="text-xl font-bold uppercase hover:text-mint-purple transition-all"
              >
                PROVENANCE
              </a> */}
              <div className="flex items-center space-x-6 py-6">
                <a href="https://www.instagram.com/ai.nfi.io/" target="_blank" rel="noreferrer">
                  <img
                    src="/images/social-instagram.png"
                    className="w-10 lg:w-6 h-10 lg:h-6"
                    alt="Social instagram"
                  />
                </a>
                <a href="https://twitter.com/ai_nfi" target="_blank" rel="noreferrer">
                  <img
                    src="/images/social-twitter.png"
                    className="w-10 lg:w-6 h-10 lg:h-6"
                    alt="Social twitter"
                  />
                </a>
                <a href="https://discord.gg/QsqznGrPzJ" target="_blank" rel="noreferrer">
                  <img
                    src="/images/social-discord.png"
                    className="w-10 lg:w-6 h-10 lg:h-6"
                    alt="Social discord"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-10">
          <div className="order-2 lg:order-1">
            <p className="mb-2 text-xl">Know whats happening</p>
            <form onSubmit={(event) => handleSubscribeNewsletterSubmit(event)}>
              <div className="flex">
                <input
                  ref={emailInput}
                  type="email"
                  className="px-4 py-2 bg-gray-200 placeholder:text-black"
                  placeholder="Email"
                  required
                />
                <button type="submit">
                  <i className="uil uil-angle-right text-4xl"></i>
                </button>
              </div>
            </form>
            {alertShow && (
              <p
                className={`mt-2 text-sm ${
                  alertType == "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {alertMessage}
              </p>
            )}
          </div>
          <div className="order-1 lg:order-2 flex items-center space-x-6 mb-4 lg:mb-0">
            <a href="https://www.instagram.com/ai.nfi.io/" target="_blank" rel="noreferrer">
              <img
                src="/images/social-instagram.png"
                className="w-10 lg:w-6 h-10 lg:h-6"
                alt="Social instagram"
              />
            </a>
            <a href="https://twitter.com/ai_nfi" target="_blank" rel="noreferrer">
              <img
                src="/images/social-twitter.png"
                className="w-10 lg:w-6 h-10 lg:h-6"
                alt="Social twitter"
              />
            </a>
            <a href="https://discord.gg/QsqznGrPzJ" target="_blank" rel="noreferrer">
              <img
                src="/images/social-discord.png"
                className="w-10 lg:w-6 h-10 lg:h-6"
                alt="Social discord"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
