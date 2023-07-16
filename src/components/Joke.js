import React from "react";

import styles from "./Joke.module.css";

const Joke = (props) => {
  return (
    <li className={styles.joke}>
      <h2>{props.type}</h2>
      <h3>{props.setup}</h3>
      <h3>{props.punchline}</h3>
    </li>
  );
};

export default Joke;
