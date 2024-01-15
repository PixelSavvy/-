import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="fixed w-full min-h-screen z-[100000] bg-primary  left-0 top-0 flex flex-col justify-center items-center gap-10">
      <span className={classes.loader} />
      <span className={`${classes.text} font-tbc-bld text-5xl`}>იტვირთება</span>
    </div>
  );
};

export default Loader;
