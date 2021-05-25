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
  const [repos, setRepos] = useState([]);
  const [enter, setEnter] = useState(false);
  const [start, setStart] = useState(true);

  function search(e) {
    setEnter(false);
    if (e.keyCode === 13) {
      setLogin(login.replace(/\s/g, ""));
      let rus = /[а-яё]/i.test(login);
      if (!rus) {
        setEnter(true);
      } else if (rus) {
        let alert = document.createElement("div");
        alert.className = "alert-rus";
        alert.innerText = "You should use the Latin Alphabet";
        document.body.append(alert);
        setTimeout(() => {
          document.body.removeChild(alert);
        }, 2000);
      }
      console.log(login);
    }
  }

  useEffect(() => {
    if (enter) {
      setStart(false);
      fetch(`https://api.github.com/users/${login}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setUser(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        .then(
          fetch(`https://api.github.com/users/${login}/repos`)
            .then((res) => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setRepos(result);
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        );
    }
  }, [enter]);

  return (
    <div className="app-wrapper">
      <header className="header">
        <i className="fab fa-github git-logo"></i>
        <div className="search-box">
          <i className="fas fa-search search-feedback"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Enter GitHub username"
            onChange={(e) => setLogin(e.target.value)}
            onKeyDown={(e) => search(e)}
          />
        </div>
      </header>
      <Main
        error={error}
        isLoaded={isLoaded}
        user={user}
        repos={repos}
        start={start}
      />
    </div>
  );
}

export default App;
