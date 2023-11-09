import React, { FormEvent, useEffect } from "react";
import "./app.css";
import Input from "./components/input";
import { useAppDispatch, useAppSelector } from "./store/store";
import {
  addInputData,
  clearData,
  saveData,
} from "./store/features/formDataSlice";
import { addError } from "./store/features/errorSlice";
import inputProps from "./components/inputProps";
import validate from "./validate";

function App() {
  const dispatch = useAppDispatch();
  const data: IFormData = useAppSelector((state) => state.data);
  const errors: IErrors = useAppSelector((state) => state.error);
  const isDisabled: boolean = !Object.values(errors.value).every(
    (x) => x === "" || x === false
  );

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const args: ArgsForInput = {
      inputName: e.currentTarget.name,
      inputValue: e.currentTarget.value,
      inputCheck: e.currentTarget.checked,
    };
    dispatch(addInputData(args));
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(saveData(data));
    dispatch(clearData());
    setTimeout(() => {
      dispatch(clearData());
    }, 1000);
  };

  useEffect(() => {
    dispatch(addError(validate(data)));
  }, [data, dispatch]);

  return (
    <div className="app">
      <h1>Registration Form</h1>
      <form id="form" onSubmit={handleSubmit}>
        {inputProps.map((input, i) => (
          <Input
            key={input.key}
            value={data.value[input.name]}
            name={input.name}
            placeholder={input.placeholder}
            handleChange={handleInput}
          />
        ))}

        <div id="agreement">
          <input
            id="checkbox"
            type="checkbox"
            name="isChecked"
            checked={data.value.isChecked}
            onChange={handleInput}
          />
          <p id="agreementText">I'm willing to submit my personal data</p>
        </div>
        <button disabled={isDisabled} type="submit">
          Submit
        </button>
        <p style={{ color: data.value.submitMessageColor }}>
          {data.value.submitMessage}
        </p>
      </form>
    </div>
  );
}

export default App;
