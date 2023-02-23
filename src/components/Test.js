import { useState } from "react";

const Test = () => {
  const [array, setArray] = useState([]);
  console.log("array", array);

  const changeOrder = () => {
    setArray([array.length, ...array]);
  };
  console.log(array);
  return (
    <div>
      <ul>
        {array.map((el, index) => {
          return (
            <li key={index}>
              <Gg bb={el} key={index} />
            </li>
          );
        })}
      </ul>
      <button onClick={changeOrder}> click me</button>
    </div>
  );
};

const Gg = ({ bb }) => {
  const [sBB, setsbb] = useState(bb);
  console.log("sBB", sBB);

  const changeOrder = () => {
    setsbb((prev) => prev + 1);
  };
  return (
    <>
      <button onClick={changeOrder}> click me</button>
      <span>{sBB}</span>
    </>
  );
};

export default Test;
