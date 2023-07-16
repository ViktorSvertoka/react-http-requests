import React, { useRef } from "react";

import styles from "./AddJoke.module.css";

function AddJoke(props) {
  const typeRef = useRef("");
  const setupRef = useRef("");
  const punchlineRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const joke = {
      type: typeRef.current.value,
      setup: setupRef.current.value,
      punchline: punchlineRef.current.value,
    };

    props.onAddJoke(joke);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="type">Type</label>
        <input type="text" id="type" ref={typeRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="setup">Setup</label>
        <textarea rows={5} type="text" id="setup" ref={setupRef}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="punchline">Punchline</label>
        <textarea
          rows={5}
          type="text"
          id="punchline"
          ref={punchlineRef}
        ></textarea>
      </div>
      <button>Add Joke</button>
    </form>
  );
}

export default AddJoke;
