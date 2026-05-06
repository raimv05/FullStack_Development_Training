
import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Manish");

  console.log("Component Rendered");

  // Runs ONLY once (Mounting)
  useEffect(() => {
    console.log("Mounted (Runs only once)");

    return () => {
      console.log("Unmounted (Cleanup)");
    };
  }, []);

  // Runs on EVERY render
  useEffect(() => {
    console.log("Runs on EVERY render");
  });

  // Runs ONLY when count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // Runs ONLY when name changes
  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>useEffect Full Demo</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <p>Name: {name}</p>
      <button onClick={() => setName(name === "Manish" ? "Rahul" : "Manish")}>
        Change Name
      </button>
    </div>
  );
}