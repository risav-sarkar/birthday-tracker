import React from "react";
import av1 from "./img/boy.png";
import av2 from "./img/girl.png";
import av3 from "./img/father.png";
import av4 from "./img/mother.png";
import av5 from "./img/grandmother.png";
import av6 from "./img/grandfather.png";

const List = ({ people, inputMonth }) => {
  let f = 0;
  const currYear = new Date().getFullYear();
  return (
    <>
      {people.map((person) => {
        const { id, name, date, month, year, image } = person;
        if (month === inputMonth) {
          f = 1;
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
                {year ? (
                  <h4>
                    {date}
                    {date === 1
                      ? "st "
                      : date === 2
                      ? "nd "
                      : date === 3
                      ? "rd "
                      : "th "}
                    {currYear - year} years old
                  </h4>
                ) : (
                  <h4>{date}th</h4>
                )}
              </div>
            </article>
          );
        } else return null;
      })}
      {f === 0 ? (
        <article className="person">
          <h4>No birthdays</h4>
        </article>
      ) : null}
    </>
  );
};

export default List;
