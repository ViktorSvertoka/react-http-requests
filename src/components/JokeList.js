import React from "react";

import Joke from "./Joke";
import styles from "./JokeList.module.css";

const JokeList = (props) => {
  return (
    <ul className={styles["joke-list"]}>
      {props.jokes.map((joke) => (
        <Joke
          key={joke.id}
          type={joke.type}
          setup={joke.setup}
          punchline={joke.punchline}
        />
      ))}
    </ul>
  );
};

export default JokeList;
