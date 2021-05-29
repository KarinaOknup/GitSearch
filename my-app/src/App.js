import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";

function App(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [login, setLogin] = useState("");
  const [user, setUser] = useState([]);
  const [start, setStart] = useState(true);

  let fetchAPI = () => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setStart(false);
          setIsLoaded(true);
          setUser(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  let handleSubmit = (e) => {
    setLogin(login.replace(/\s/g, ""));
    let rus = /[а-яё]/i.test(login);
    if (!rus && !login == "") {
      fetchAPI();
    } else if (rus) {
      let alert = document.createElement("div");
      alert.className = "alert-rus";
      alert.innerText = "You should use the Latin Alphabet";
      document.body.append(alert);
      setTimeout(() => {
        document.body.removeChild(alert);
      }, 2000);
    }
    e.preventDefault();
  };

  return (
    <div className="app-wrapper">
      <Header handleSubmit={handleSubmit} setLogin={setLogin} />
      <Main error={error} isLoaded={isLoaded} user={user} start={start} />
    </div>
  );
}

export default App;
