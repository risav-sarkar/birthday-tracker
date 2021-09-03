import React, { useState } from "react";
import av1 from "./img/boy.png";
import av2 from "./img/girl.png";
import av3 from "./img/father.png";
import av4 from "./img/mother.png";
import av5 from "./img/grandmother.png";
import av6 from "./img/grandfather.png";

const Delete = () => {
  let data = [];
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));
  // eslint-disable-next-line
  const [render, setRender] = useState([]);

  if (dataFromLocalStorage) {
    data = dataFromLocalStorage;
  }

  return (
    <>
      {data.map((person) => {
        const { id, name, image } = person;
        return (
          <article key={id} className="person">
            {image === 1 ? (
              <img className="avatar" src={av1} alt={av1} />
            ) : image === 2 ? (
              <img className="avatar" src={av2} alt={av2} />
            ) : image === 3 ? (
              <img className="avatar" src={av3} alt={av3} />
            ) : image === 4 ? (
              <img className="avatar" src={av4} alt={av4} />
            ) : image === 5 ? (
              <img className="avatar" src={av5} alt={av5} />
            ) : (
              <img className="avatar" src={av6} alt={av6} />
            )}
            <div>
              <h4>{name}</h4>
            </div>
            <button
              onClick={() => {
                data.splice(id, 1);
                let f = 0;
                // eslint-disable-next-line
                data.map((n) => {
                  n.id = f++;
                });
                localStorage.setItem("data", JSON.stringify(data));
                setRender([]);
              }}
            >
              Delete
            </button>
          </article>
        );
      })}
      {!data.length ? (
        <article className="person">
          <h4>No Persons Added!</h4>
        </article>
      ) : null}
    </>
  );
};

export default Delete;
