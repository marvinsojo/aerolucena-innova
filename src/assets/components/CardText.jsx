import React from "react";

const CardText = ({icon, title, itemList}) => {
  return (
    <div className="bg-white flex flex-col items-center">
      <span className="w-16 h-16 rounded-full -m-8
      bg-radial-[at_50%_75%] from-carmine via-carmine to-sienna text-white text-3xl flex justify-center items-center">{icon}</span>
      <h3 className="px-10 pt-10 pb-5 text-2xl text-center font-bold font-oswald">{title}</h3>
      <ul className="w-full py-5 ps-10 pe-5  text-xl list-disc font-lato">
        {itemList}
      </ul>
    </div>
  );
};

export default CardText;


