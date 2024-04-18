import FrameComponent from "../components/FrameComponent";

const Header = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }} className="w-full relative bg-link-color overflow-hidden flex flex-row items-start justify-between pt-[23px] pb-[4.8px] pr-[93.6px] pl-24 box-border leading-[normal] tracking-[normal] gap-[20px] text-center text-[14px] text-black-color font-raleway mq450:pl-5 mq450:pr-5 mq450:box-border mq950:pl-12 mq950:pr-[47px] mq950:box-border mq975:flex-wrap">
      <div className="h-[146px] w-[1440px] relative bg-link-color hidden max-w-full" />
      <div className="w-[559px] flex flex-row items-start justify-start gap-[31.2px] max-w-full mq700:flex-wrap mq700:gap-[16px]">
        <div className="w-[60.9px] flex flex-col items-start justify-start pt-[27.1px] px-0 pb-0 box-border">
          <div className="self-stretch h-[55.9px] rounded-lg bg-lavender overflow-hidden shrink-0 flex flex-row items-end justify-start z-[1]">
            <div className="ml-[-7.5px] mb-[-11px] w-[76px] bg-white-color flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738]">
              <div className="h-[78px] flex-1 relative overflow-hidden">
                <img
                  className="absolute h-[66.67%] w-[calc(100%_-_25.3px)] top-[16.67%] right-[12.6px] bottom-[16.67%] left-[12.7px] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[28px] min-w-[304px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
            <b style={{ fontFamily: 'Roboto, sans-serif' }} className="w-[287.3px] relative inline-block shrink-0 z-[1]">
              RAZÓN SOCIAL - RUC 098837733
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-justify text-xs">
            <b className="h-[74.2px] flex-1 relative inline-block max-w-full z-[1]">{`Lorem ipsum dolor sit amet consectetur. Venenatis feugiat dignissim nullam ac Commodo et parturient at sed eget hendrerit faucibus. Arcu vitae suspendisse lobortis `}</b>
            <div className="w-full !m-[0] absolute top-[-28px] left-[-24.2px] flex flex-row items-start justify-start pt-0 px-[24.1px] pb-[55px] box-border h-full z-[2] text-center text-[20px]">
              <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[95px] z-[1] mq450:text-[16px]">
                MI PERFIL
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[191.4px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
        <FrameComponent />
      </div>
    </div>
  );
};

export default Header;