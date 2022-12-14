import { useEffect, useRef } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { ServerConfig } from "../../configs/ServerConfig";

const publicFrontendUrl = ServerConfig.getPublicFrontendUrl();

const AiProject = ({ isMobile }: { isMobile: boolean }) => {
  const elAnimate1 = useRef(null);
  const elAnimate2 = useRef(null);
  const elAnimate3 = useRef(null);
  const elAnimate4 = useRef(null);
  const elAnimate5 = useRef(null);
  const elAnimate6 = useRef(null);

  useEffect(() => {
    if (!isMobile) {
      handleAnimate(elAnimate1);
      handleAnimate(elAnimate2);
      handleAnimate(elAnimate3);
      handleAnimate(elAnimate4);
      handleAnimate(elAnimate5);
      handleAnimate(elAnimate6);
    }
  }, [isMobile]);

  const handleAnimate = (el: any) => {
    let to = {
      x: Math.floor(Math.random() * 6),
      y: Math.floor(Math.random() * 7),
      a: Math.floor(Math.random() * 5),
      b: Math.floor(Math.random() * 4),
    };

    el.current.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x / 4}rem, ${to.y / 4}rem)` },
        { transform: `translate(${to.a / 4}rem, ${to.b / 4}rem)` },
        { transform: `translate(-${to.a / 4}rem, -${to.b / 4}rem)` },
        { transform: `translate(-${to.x / 4}rem, -${to.y / 4}rem)` },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: (Math.random() + 1) * 10000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  };

  return (
    <>
      <a
        href="https://opensea.io/collection/ai-bionic-heart"
        target="_blank"
        className="fixed block bottom-10 lg:bottom-32 right-0 px-3 lg:px-5 py-2 lg:py-4 pr-5 lg:pr-20 font-bold text-lg lg:text-2xl bg-white/60 z-50"
        rel="noreferrer"
      >
        MINT{" "}
        <span className="hidden lg:inline">
          YOUR <br /> COMPANION <br />
        </span>{" "}
        <span className="text-mint-purple">NOW</span>
      </a>

      <div className="w-full h-screen">
        <video
          src="/videos/ai/ai-hero-video.mp4"
          loop
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-10 lg:py-14 text-center">
        <h1 className="text-4xl lg:text-8xl font-bold">Making Ai</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full lg:h-128">
          <video
            src="/videos/ai/ai-content-video.mp4"
            loop
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full lg:h-128">
          <img
            src="/images/ai/bg-content.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-1"
          />
          <div className="relative flex items-center justify-center w-full h-full text-center z-2 overflow-hidden">
            <div className="credit-scene px-10">
              <p className="text-xl font-semibold mb-6">
                AI IS 10,000 UNIQUE COLLECTIBLE CHARACTERS WITH PROOF OF OWNERSHIP STORED ON THE
                ETHEREUM BLOCKCHAIN. IT IS A{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Companion_robot"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  COMPANION ROBOT
                </a>{" "}
                LAUNCHED WITH A &quot;NON-FUNGIBLE TOKEN&quot; ON ETHEREUM WITH THE ERC-721
                STANDARD.
              </p>
              <p className="text-xl font-semibold">
                AS COMPANION ROBOTS ARE NEW IN OUR WORLD, AI&rsquo;S TRAITS ARE A FUNCTION OF ROBOTS
                MIMICKING HUMAN BEHAVIOUR. THIS IS INSPIRED BY THE MIMETIC THEORY ORIGINATED BY RENE
                GIRARD. ALL AI TRAITS ARE GENERATED RANDOMLY.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-10 mb-8 lg:mb-0">
        <div className="flex w-full h-full">
          <div className="hidden lg:flex flex-col items-center justify-center pb-6">
            <p className="text-8xl font-bold">BIONIC</p>
          </div>
          <video
            src="/videos/ai/ai-bionic.mp4"
            loop
            autoPlay
            playsInline
            muted
            className="w-full lg:h-128 object-contain object-center"
          />
          <div className="hidden lg:flex flex-col items-center justify-center pb-6">
            <p className="text-8xl font-bold">HEART</p>
          </div>
        </div>
        <div className="text-center lg:hidden">
          <p className="text-4xl font-bold">BIONIC HEART</p>
        </div>
      </div>

      <div className="w-full px-6 lg:px-10">
        <div className="grid grid-cols-6">
          <div className="col-span-5 lg:col-span-2 mb-4 lg:mb-0">
            <p className="text-base lg:text-xl font-bold uppercase">
              To participate in our pre-sale, owners will need to have a Bionic Heart specially made
              for AI.
            </p>
          </div>
          <div className="col-span-5 lg:col-span-4 col-start-2 lg:col-start-auto text-right mb-4 lg:mb-6">
            <p className="text-base lg:text-xl uppercase">
              2,500 Bionic Hearts will be available in total, for the pre-sale. For 1 Bionic Heart,
              the owner is able to reserve and mint 3 Ai(s) - 1 selected Ai and 2 optional Ai by
              raffle. Characters not redeemed in the pre-sale will be deployed into the public sale.
              The price for a Bionic Heart is 0.1Ξ. Get{" "}
              <a
                href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/76734444191450267780193417954356645324752777308617507099458824658431594465732"
                target="_blank"
                className="underline whitespace-nowrap"
                rel="noreferrer"
              >
                one here
              </a>
              .
            </p>
          </div>
          <div className="col-span-5 col-start-2 text-right mb-4 lg:mb-0">
            <p className="text-base lg:text-xl uppercase">
              During our public sale, owners will be able to mint any no. of Ai(s) they like. The
              characters will be revealed after the completion of every sale.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-10 py-10 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-8xl font-bold">Ai DISTRIBUTION</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex items-center justify-between lg:py-10 lg:px-16">
            <div className="space-y-4 lg:space-y-20 text-center lg:text-left">
              <p className="text-base lg:text-2xl font-bold uppercase">
                All 99% of Ai characters will be distributed to our early supporters and collectors
                in mind.
              </p>
              <p className="text-base lg:text-2xl uppercase">
                Ai&rsquo;s project team will receive 1% of total characters (100 characters) as a
                reward to our team&rsquo;s hard work. There is a minimum scenario of 2,500 Ai(s) and
                maximum scenario of 7,500 Ai(s) to be redeemed by the 2,500 Bionic Hearts owners
                participating in the pre-sale. The remaining characters will be released at public
                sale.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:px-6">
            <video
              src="/videos/ai/ai-distribution-chart.mp4"
              loop
              autoPlay
              playsInline
              muted
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-96">
        <video
          src="/videos/ai/ai-carousel.mp4"
          loop
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-6 lg:px-10">
        <div className="py-10 text-center">
          <a
            href="#"
            className="inline-block text-base lg:text-3xl font-bold px-6 lg:px-20 py-2 lg:py-4 bg-white border-4 border-mint-purple rounded-full hover:bg-mint-purple hover:text-white transition-all"
          >
            MINT YOUR COMPANION NOW
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8">
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col justify-center p-6 lg:p-10">
            <div className="text-center lg:text-right space-y-6">
              <p className="text-3xl lg:text-6xl font-black mb-6">WHAT IS Ai?</p>
              <p className="text-base lg:text-xl uppercase">
                AI was originally a research initiative focused on developing a solution for the
                decline of{" "}
                <a
                  href="https://www.researchgate.net/publication/340557309_Declines_in_non-digital_social_interaction_among_Americans_2003-2017"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  non-digital, real-world human interaction
                </a>{" "}
                and the{" "}
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S0140197121000853"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  increase of human loneliness caused by the advent of technology
                </a>
                . This has led to findings that human-robot interaction was capable of improving
                objective and hedonistic aspects of well-being and quality of life, closely related
                to the concept of personal development or{" "}
                <a
                  href="https://www.academia.edu/15038401/The_Questionnaire_for_Eudaimonic_Well_Being_Psychometric_properties_demographic_comparisons_and_evidence_of_validity"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  eudaimonic well-being (EWB)
                </a>
                . the concept of a social robot was then introduced and named as ai, which meant
                love in mandarin. ai is designed to bring positive perceptions into its
                owner&rsquo;s lives from aspects of health, companionship, relationship, growth,
                societal contribution and{" "}
                <a
                  href="https://blog.cryptostars.is/web3-tokenised-communities-vs-tokenised-economies-7f55ae08e101"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  sense of community
                </a>
                .
              </p>
              <p className="text-base lg:text-xl uppercase">
                the first application of ai is a nft project, and the objective is to explore the
                possibilities of augmented reality, community building, NON-FUNGIBLE ITEMS, AND
                BRAND BUILDING.
              </p>
              <p className="text-base lg:text-xl uppercase">
                &quot;It&rsquo;s your fiction that interests me. Your studies of the interplay of
                human motives and emotion.&quot; ― Isaac Asimov,{" "}
                <a
                  href="https://www.goodreads.com/work/quotes/1796026-i-robot"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  I, Robot
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <video
            src="/videos/ai/ai-about.mp4"
            loop
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full">
        <img src="/images/ai/ai-poster.jpg" alt="" className="w-full h-full" />
      </div>

      <div className="w-full py-20">
        <img
          src="/images/ai/why-title.png"
          alt=""
          className="sticky top-10 mb-20 max-w-full z-1 px-6 lg:px-8"
        />

        <div className="relative px-6 lg:px-10 space-y-8 lg:space-y-0 z-2">
          <div ref={elAnimate1} className="grid grid-cols-12 lg:gap-10">
            <div className="col-span-12 lg:col-span-7">
              <video
                src="/videos/ai/ai-fusion.mp4"
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-span-12 lg:col-span-5 flex items-center">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-montserrat-alternates font-extrabold mb-6">
                  FUSION <br className="lg:hidden" />
                  <span className="font-semibold">SUPER COMPANION</span>
                </p>
                <p className="text-base lg:text-xl">
                  BY OWNING MORE THAN ONE COMPANION YOU HAVE THE OPTION TO MERGE YOUR COMPANION INTO
                  ONE ULTIMATE COMPANION CARRYING ALL ITS TRAITS AND IN THE PROCESS REDUCE TOTAL
                  AI&rsquo;S IN THE COLLECTION&quot;. THIS PROCESS WILL ALSO REDUCE THE TOTAL
                  AI&rsquo;S IN THE COLLECTION.
                </p>
              </div>
            </div>
          </div>

          <div ref={elAnimate2} className="grid grid-cols-12 lg:gap-10">
            <div className="order-2 lg:order-1 col-span-12 lg:col-span-5 flex items-center">
              <div className="text-center lg:text-right">
                <p className="text-3xl font-montserrat-alternates font-extrabold mb-6">
                  CUSTOM <br className="lg:hidden" />
                  <span className="font-semibold">BE THE ONLY ONE</span>
                </p>
                <p className="text-base lg:text-xl mb-6">
                  NFI HAS DEVELOPED A 3D CUSTOMISATION TOOLS FOR ITS TIER-1 HOLDERS. THIS TOOL WILL
                  BE FREE TO USE FOR THE FIRST 10 NFI PROJECTS. FIND OUT MORE AT THE NFI{" "}
                  <a
                    href="https://nfi.io/assets/nfi-white-paper.pdf"
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  >
                    WHITE PAPER
                  </a>
                </p>
                <p className="text-base lg:text-xl mb-6">
                  LEVERAGE ON NFI 3D CUSTOMISATION TOOLS AND PERSONALISE YOUR AI TO MAKE IT THE ONE
                  AND ONLY FOR YOU.
                </p>
                <p className="text-base lg:text-xl">
                  TRY OUT THE CUSTOMISATION TOOLS{" "}
                  <a
                    href={`${publicFrontendUrl}/customize`}
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  >
                    HERE
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 col-span-12 lg:col-span-7">
              <video
                src="/videos/ai/ai-custom.mp4"
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div ref={elAnimate3} className="grid grid-cols-12 lg:gap-10">
            <div className="col-span-12 lg:col-span-5">
              <video
                src="/videos/ai/ai-airdrop.mp4"
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-span-12 lg:col-span-7 flex items-center">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-montserrat-alternates font-extrabold mb-6">
                  AIRDROP <br className="lg:hidden" />
                  <span className="font-semibold">GET THE AiPHONE</span>
                </p>
                <p className="text-base lg:text-xl">
                  EVERY AI OWNER WILL RECEIVE AN AI-PHONE SPECIALLY DESIGNED FOR THEM. THE AIRDROP
                  RELEASE DATE WILL REMAIN A SURPRISE FOR NOW.
                </p>
              </div>
            </div>
          </div>

          <div ref={elAnimate4} className="grid grid-cols-12 lg:gap-10">
            <div className="order-2 lg:order-1 col-span-12 lg:col-span-7 flex items-center">
              <div className="text-center lg:text-right">
                <p className="text-3xl font-montserrat-alternates font-extrabold mb-6">
                  INTEROPERABLE <br className="lg:hidden" />
                  <span className="font-semibold">METAVERSE-READY</span>
                </p>
                <p className="text-base lg:text-xl">
                  ALL AI NFT IS DESIGNED TO HAVE COMPLETE CAPABILITIES TO ALL METAVERSES, WHICH
                  INCLUDES BUT IS NOT LIMITED TO OTHERSIDE, SANDBOX, AND MORE.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 col-span-12 lg:col-span-5">
              <video
                src="/videos/ai/ai-metaverse.mp4"
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div ref={elAnimate5} className="grid grid-cols-12 lg:gap-10">
            <div className="col-span-12 lg:col-span-5">
              <video
                src="/videos/ai/ai-brand.mp4"
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-span-12 lg:col-span-7 flex items-center">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-montserrat-alternates font-extrabold mb-6">
                  BRAND-BUILDING <br className="lg:hidden" />
                  <span className="font-semibold">AI IS A BRAND</span>
                </p>
                <p className="text-base lg:text-xl">
                  WE WILL BE COLLABORATING WITH WORLD-CLASS MERCHANDISERS, STORYTELLERS, ANIMATORS,
                  AND MANY MORE. MORE DETAILS WILL BE RELEASED TO OWNERS IN FUTURE.
                </p>
              </div>
            </div>
          </div>

          <div ref={elAnimate6} className="grid grid-cols-12 lg:gap-10">
            <div className="order-2 lg:order-1 col-span-12 lg:col-span-7 flex items-center">
              <div className="text-center lg:text-right">
                <p className="text-3xl font-montserrat-alternates font-extrabold mb-6">
                  TOKEN ECONOMICS <br className="lg:hidden" />
                  <span className="font-semibold">SHARED SUCCESS</span>
                </p>
                <p className="text-base lg:text-xl">
                  ALL AI&rsquo;S OWNERS WILL RECEIVE 100 $NFI. NFI COIN IS THE CRYPTO CURRENCY COIN
                  THAT POWERS THE NFI&rsquo;S NFT ECOSYSTEM. USE IT TO RECEIVE REBATES, RESERVE
                  MINT, VOTE FOR PROJECTS, PARTICIPATE SPECIAL RELEASES, INVITE TO STORE OPENINGS
                  AND MANY MORE.
                  <br />
                  <a
                    href="https://nfi.io/assets/nfi-white-paper.pdf"
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  >
                    VIEW NFI WHITE PAPER
                  </a>
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 col-span-12 lg:col-span-5">
              <video
                src="/videos/ai/ai-token.mp4"
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-0 lg:px-8 py-20">
        <img src="/images/ai/ar-title.png" alt="" className="sticky top-10 mb-20 max-w-full z-1 px-6 lg:px-8" />

        <Swiper
          slidesPerView="auto"
          navigation={true}
          spaceBetween={30}
          pagination={false}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              navigation: false,
            },
          }}
        >
          <SwiperSlide>
            <div className="px-12 lg:px-0">
              <div className="w-full h-160 bg-gray-400"></div>
              <div className="w-32 lg:w-48 h-32 lg:h-48 mx-auto transform -translate-y-1/2">
                <img
                  src="https://app.snapchat.com/web/deeplink/snapcode?data=0421ff8354554229b1b9f3d3427f5921&version=1&type=svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-12 lg:px-0">
              <div className="w-full h-160 bg-gray-400"></div>
              <div className="w-32 lg:w-48 h-32 lg:h-48 mx-auto transform -translate-y-1/2">
                <img
                  src="https://app.snapchat.com/web/deeplink/snapcode?data=0421ff8354554229b1b9f3d3427f5921&version=1&type=svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-12 lg:px-0">
              <div className="w-full h-160 bg-gray-400"></div>
              <div className="w-32 lg:w-48 h-32 lg:h-48 mx-auto transform -translate-y-1/2">
                <img
                  src="https://app.snapchat.com/web/deeplink/snapcode?data=0421ff8354554229b1b9f3d3427f5921&version=1&type=svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="py-4 bg-neutral-100">
        <Marquee gradient={false}>
          <p className="text-2xl lg:text-3xl font-bold mr-4">
            A.I IS A PROJECT BY THE TEAM AT NFI (NON-FUNGIBLE ITEMS). IT IS PART OF A BROADER
            VISION. CLICK{" "}
            <a
              href="https://nfi.io/assets/nfi-white-paper.pdf"
              target="_blank"
              className="underline text-mint-purple"
              rel="noreferrer"
            >
              HERE
            </a>{" "}
            TO READ THE WHITEPAPER.
          </p>
        </Marquee>
      </div>
    </>
  );
};

export default AiProject;
