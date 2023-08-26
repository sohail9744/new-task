function Buttons({ button }) {
  return (
    <>
      <div className="text-center  py-2 rounded-lg hover:bg-dashHover cursor-pointer border-white duration-500">
        <label className="text-lg text-white font-bold cursor-pointer ">
          {button}
        </label>
      </div>
    </>
  );
}

export default Buttons;
