import React, { useState } from "react";
import List from "./List";
import Delete from "./Delete";

import av1 from "./img/boy.png";
import av2 from "./img/girl.png";
import av3 from "./img/father.png";
import av4 from "./img/mother.png";
import av5 from "./img/grandmother.png";
import av6 from "./img/grandfather.png";

function App() {
  const monthName = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let data = [];
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));

  if (dataFromLocalStorage) {
    data = dataFromLocalStorage;
  }

  const [currMonth, setCurrMonth] = useState(new Date().getMonth() + 1);
  const [addBtn, setAddBtn] = useState(0);
  const [delBtn, setDelBtn] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [avatar, setAvatar] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date >= 1 && date <= 31 && month >= 1 && month <= 12) {
      data.push({
        id: data.length,
        name: name,
        date: parseInt(date),
        month: parseInt(month),
        year: parseInt(year),
        image: parseInt(avatar),
      });
      localStorage.setItem("data", JSON.stringify(data));
      setAddBtn(0);
      setDelBtn(0);
    } else alert("Enter Correct Date and Month!");
  };

  return (
    <main>
      <div className="titleContainer">
        <h2>Birthday Tracker </h2>
        <button
          className="clearBtn"
          onClick={() => {
            if (delBtn === 1) setDelBtn(0);
            else setDelBtn(1);
            setAddBtn(0);
          }}
        >
          Delete
        </button>
        <button
          className="addBtn"
          onClick={() => {
            if (addBtn === 1) setAddBtn(0);
            else setAddBtn(1);
            setDelBtn(0);
          }}
        >
          Add
        </button>
      </div>
      {addBtn === 1 && delBtn === 0 ? (
        <section className="container">
          <form onSubmit={handleSubmit}>
            <div className="inputFields">
              <div className="styled-input">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Sam"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="styled-input">
                <p>Date</p>
                <input
                  type="number"
                  value={date}
                  placeholder="8"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="styled-input">
                <p>Month</p>
                <input
                  type="number"
                  name="month"
                  value={month}
                  placeholder="3"
                  onChange={(e) => setMonth(e.target.value)}
                />
              </div>
              <div className="styled-input">
                <p>Year</p>
                <input
                  type="number"
                  name="year"
                  value={year}
                  placeholder="2001"
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="styled-input">
                <p>Avatars</p>
                <div className="avatarList">
                  <input
                    type="radio"
                    name="avatar"
                    value="1"
                    id="avatar1"
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                  <label htmlFor="avatar1">
                    <img className="avatar" src={av1} alt="av1" />
                  </label>

                  <input
                    type="radio"
                    name="avatar"
                    value="2"
                    id="avatar2"
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                  <label htmlFor="avatar2">
                    <img className="avatar" src={av2} alt="av2" />
                  </label>

                  <input
                    type="radio"
                    name="avatar"
                    value="3"
                    id="avatar3"
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                  <label htmlFor="avatar3">
                    <img className="avatar" src={av3} alt="av3" />
                  </label>

                  <input
                    type="radio"
                    name="avatar"
                    value="4"
                    id="avatar4"
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                  <label htmlFor="avatar4">
                    <img className="avatar" src={av4} alt="av4" />
                  </label>

                  <input
                    type="radio"
                    name="avatar"
                    value="5"
                    id="avatar5"
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                  <label htmlFor="avatar5">
                    <img className="avatar" src={av5} alt="av5" />
                  </label>

                  <input
                    type="radio"
                    name="avatar"
                    value="6"
                    id="avatar6"
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                  <label htmlFor="avatar6">
                    <img className="avatar" src={av6} alt="av6" />
                  </label>
                </div>
              </div>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </section>
      ) : addBtn === 0 && delBtn === 1 ? (
        <section className="container">
          <h3>List Of All Persons</h3>
          <Delete />
          <button
            onClick={() => {
              setDelBtn(0);
            }}
          >
            Done
          </button>
        </section>
      ) : (
        <section className="container">
          <h3>{monthName[currMonth]}</h3>
          <List people={data} inputMonth={currMonth} />
          <div className="btnContainer">
            <button
              onClick={() =>
                currMonth === 1 ? setCurrMonth(12) : setCurrMonth(currMonth - 1)
              }
            >
              Prev Month
            </button>
            <button
              onClick={() =>
                currMonth === 12 ? setCurrMonth(1) : setCurrMonth(currMonth + 1)
              }
            >
              Next Month
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
