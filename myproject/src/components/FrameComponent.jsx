const FrameComponent = () => {
  return (
    <div className="self-stretch h-[50.9px] relative text-justify text-xs text-black-color font-mulish">
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-white-color overflow-hidden flex flex-row items-start justify-start py-[4.2px] px-[3.9px] z-[1]">
        <div className="flex flex-row items-center justify-center">
          <img
            className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/personfilled.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[41.8px] leading-[150%] font-light inline-block w-[149.6px] h-[50.9px] z-[1]">
        <p className="m-0">Sesión iniciada como</p>
        <p className="m-0">Proveedor 2</p>
      </div>
      <img
        className="absolute top-[5px] left-[161px] w-[30px] h-[27.7px] overflow-hidden z-[1]"
        loading="lazy"
        alt=""
        src="/settingssharp.svg"
      />
    </div>
  );
};

export default FrameComponent;
  