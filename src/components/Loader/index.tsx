import style from "./index.module.css";

const Loader = () => {
  const generateSquares = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <div key={index} className={style.square}></div>
    ));
  };
  return <div className={style.loader}>{generateSquares(9)}</div>;
};

export default Loader;
