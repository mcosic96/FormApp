import { FormEvent } from "react";
import "./input.css";
import { useAppSelector } from "../store/store";

type InputProps = {
  placeholder: string;
  name: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = (props: InputProps) => {
  const errors: IErrors = useAppSelector((state) => state.error);
  const data: IFormData = useAppSelector((state) => state.data);

  return (
    <div className="input">
      <label>{props.placeholder}</label>
      <input
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.handleChange}
      />
      {data.value.firstName === "" &&
      data.value.lastName === "" &&
      data.value.address === "" &&
      data.value.phone === "" &&
      data.value.email === "" ? (
        <p></p>
      ) : (
        <p>{errors.value[props.name]}</p>
      )}
    </div>
  );
};

export default Input;
