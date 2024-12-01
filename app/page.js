export default function Home() {
  return (
    <div className="w-[311px] h-[724px] lg:w-[635px] lg:h-[475px] rounded-t-[5px] lg:rounded-[5px] bg-white shadow-lg">
      <div className="h-[264px] lg:h-[216px] p-[25px] lg:p-[40px]">
        <div className="text-cyan font-bold text-[20px] lg:text-[24px] leading-[23.38px] lg:leading-[28.06px] tracking-[-0.25px] lg:tracking-[-0.3px] mb-[25px]">
          Join our community
        </div>
        <div className="text-bright-yellow font-bold text-[15px] lg:text-[18px] leading-[20px] lg:leading-[21.04px] tracking-[-0.19px] lg:tracking-[-0.22px] mb-[20px]">
          30-day, hassle-free money back guarantee
        </div>
        <div className="text-grayish-blue font-normal text-[14px] lg:text-[16px] leading-[26px] tracking-[-0.17px] lg:tracking-[-0.2px]">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </div>
      </div>
      <div className="lg:flex">
        <div className="bg-cyan h-[230px] lg:w-[317px] lg:h-[259px] text-white p-[25px] lg:p-[40px] lg:rounded-bl-[5px]">
          <div className="font-bold text-[18px] leading-[21.04px] tracking-[-0.22px] mb-[20px]">
            Monthly Subscription
          </div>
          <div className="mb-[4px] ">
            <span className="font-bold text-[32px] leading-[37.41px] tracking-[-0.4px] ">
              $29
            </span>
            <span className="font-normal text-[16px] leading-[26px] tracking-[-0.2px] align-text-bottom">
              &nbsp;&nbsp;&nbsp;per month
            </span>
          </div>
          <div className="font-normal text-[16px] leading-[26px] tracking-[-0.2px] mb-[24px]">
            Full access for less than $1 a day
          </div>
          <div className="bg-bright-yellow shadow-lg w-[263px] lg:w-[237px] h-[48px] rounded-[5px] text-center content-center m-auto font-bold text-[16px] leading-[18px] lg:leading-[18.7px] tracking-[0.2px] lg:tracking-[-0.2px]">
            Sign Up
          </div>
        </div>
        <div className="bg-cyan-light h-[230px] lg:w-[318px] lg:h-[259px] text-white p-[25px] lg:p-[40px] lg:rounded-br-[5px]">
          <div className="font-bold text-[18px] leading-[21.04px] tracking-[-0.22px] mb-[20px]">
            Why Us
          </div>
          <div className="font-normal text-[14px] leading-[20px] tracking-[-0.17px]">
            Tutorials by industry experts <br />
            Peer & expert code review <br />
            Coding exercises <br />
            Access to our GitHub repos <br />
            Community forum <br />
            Flashcard decks <br />
            New videos every week
          </div>
        </div>
      </div>
    </div>
  );
}
