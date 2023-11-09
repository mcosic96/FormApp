const validate = (data: IFormData) => {
  const errorsTemp: IErrors = {
    value: {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
      errorChecked: true,
    },
  };
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /^\+\d{10}$/;
  if (!data.value.firstName) {
    errorsTemp.value.firstName = "First name is required.";
  }
  if (!data.value.lastName) {
    errorsTemp.value.lastName = "Last name is required.";
  }
  if (!data.value.address) {
    errorsTemp.value.address = "Address is required.";
  }
  if (!data.value.phone) {
    errorsTemp.value.phone = "Phone is required.";
  }
  if (!data.value.email) {
    errorsTemp.value.email = "Email is required.";
  }
  if (data.value.phone && !phoneRegex.test(data.value.phone)) {
    errorsTemp.value.phone = "Bad phone format.";
  }
  if (data.value.email && !emailRegex.test(data.value.email)) {
    errorsTemp.value.email = "Bad email format.";
  }
  if (data.value.isChecked) {
    errorsTemp.value.errorChecked = false;
  } else {
    errorsTemp.value.errorChecked = true;
  }
  return errorsTemp;
};

export default validate;
