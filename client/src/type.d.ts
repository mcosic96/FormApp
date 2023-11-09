interface IFormData {
  value: {
    [key: string]: any;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    email: string;
    isChecked: boolean;
    submitMessage: string;
    submitMessageColor: string;
  };
}

interface IResultState {
  loading: boolean;
  error: string;
}

type ArgsForInput = {
  inputName: string;
  inputValue: string;
  inputCheck: boolean;
};

interface IErrors {
  value: {
    [key: string]: any;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    email: string;
    errorChecked: boolean;
  };
}

interface ISubmit {
  submit: boolean;
}

interface IResponseMessage {
  success: string;
  reject: string;
  pending: string;
}
