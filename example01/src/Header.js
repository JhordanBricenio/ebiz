const Header = () => {
  return (
    <div className="w-[1440px] bg-gray-light-color shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)] max-w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 bg-white-color shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-between pt-[19px] pb-[17px] pr-[73px] pl-[68px] box-border relative max-w-full gap-[20px] text-center text-[14px] text-black-color font-raleway mq750:flex-wrap mq750:pl-[34px] mq750:pr-9 mq750:box-border">
        <div className="h-[119.2px] w-[535.8px] absolute !m-[0] bottom-[-15px] left-[147px]" />
        <div className="w-[411.1px] flex flex-row items-end justify-start gap-[7px] max-w-full mq450:flex-wrap">
          <div className="h-[55.9px] w-[60.9px] rounded-lg bg-lavender overflow-hidden shrink-0 flex flex-row items-end justify-start">
            <div className="ml-[-7.5px] mb-[-11px] w-[76px] flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738]">
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
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border relative min-w-[223px] min-h-[103px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-end">
                <b className="w-[287.3px] relative inline-block shrink-0 text-red-400">
                  RAZÓN SOCIAL - RUC 098837733
                </b>
              </div>
              <h2 className="m-0 w-[95px] relative text-[20px] font-bold font-inherit inline-block min-w-[95px] z-[1] mq450:text-[16px]">
                MI PERFIL
              </h2>
            </div>
            <b className="w-[466.9px] h-[74.2px] absolute !m-[0] right-[-123.8px] bottom-[-35.2px] text-xs inline-block text-justify z-[1]">{`Lorem ipsum dolor sit amet consectetur. Venenatis feugiat dignissim nullam ac Commodo et parturient at sed eget hendrerit faucibus. Arcu vitae suspendisse lobortis `}</b>
          </div>
        </div>
        <div className="h-[50.9px] w-[191.4px] relative text-justify text-xs font-mulish">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lavender overflow-hidden flex flex-row items-start justify-start py-[4.2px] px-[3.9px]">
            <div className="flex flex-row items-center justify-center">
              <img
                className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/personfilled.svg"
              />
            </div>
          </div>
          <div className="absolute top-[0px] left-[41.8px] leading-[150%] font-light inline-block w-[149.6px] h-[50.9px]">
            <p className="m-0">Sesión iniciada como</p>
            <p className="m-0">Proveedor 2</p>
          </div>
          <img
            className="absolute top-[5px] left-[161px] w-[30px] h-[27.7px] overflow-hidden"
            loading="lazy"
            alt=""
            src="/settingssharp.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
