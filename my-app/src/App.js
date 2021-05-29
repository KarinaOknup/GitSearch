import React from "react";
import "./App.css";
import "./components/Header/Header.css";
import Main from "./components/Main/Main";
import { useState } from "react";
import { useEffect } from "react";

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
      )
  };

  let handleSubmit = (e) => {
    setLogin(login.replace(/\s/g, ""));
    let rus = /[а-яё]/i.test(login);
    if (!rus && !login=='') {
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
      <header className="header">
        <i className="fab fa-github git-logo"></i>

        <div className="search-box">
          <i className="fas fa-search search-feedback"></i>
        <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Enter GitHub username"
                onChange={(e) => setLogin(e.target.value)}
              />
            <input type="submit" className="submit"/>
        </form>
        </div>
      </header>
      <Main
        error={error}
        isLoaded={isLoaded}
        user={user}
        start={start}
      />
    </div>
  );
}

export default App;
