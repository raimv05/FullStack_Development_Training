// function WithoutUseId({ label }) {
//   const id = "name"; // hard-coded ID

//   console.log(`❌ ${label} → ID:`, id);

//   return (
//     <div style={{ marginBottom: "20px" }}>
//       <h3>{label}</h3>

//       <label htmlFor={id}>Name:</label>
//       <input id={id} />
//     </div>
//   );
// }

// export default WithoutUseId;





// ✅ Code (WITH useId)


import { useState, useId, useEffect } from "react";

function UseIdDynamic() {
  const baseId = useId();
  const [names, setNames] = useState([""]);

  // Log only when a new field is added
  useEffect(() => {
    console.log(" New field added. Total fields:", names.length);

    names.forEach((_, index) => {
      console.log(`Field ${index} ID: ${baseId}-${index}`);
    });
  }, [names.length]); //  ONLY runs when length changes

  const addField = () => {
    setNames([...names, ""]);
  };

  const handleChange = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };

  return (
    <div>
      <h2>Dynamic useId Example</h2>

      {names.map((name, index) => {
        const id = `${baseId}-${index}`;

        return (
          <div key={id} style={{ marginBottom: "10px" }}>
            <label htmlFor={id}>Name {index + 1}:</label>
            <input
              id={id}
              value={name}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        );
      })}

      <button onClick={addField}>Add Name</button>
    </div>
  );
}

export default UseIdDynamic;
