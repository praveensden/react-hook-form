import React, { useEffect } from "react";
import "./RegisterUser.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../../models/user";
import * as yup from "yup";

interface IRegisterUserProps {
  userData: Inputs[];
  setUserData: React.Dispatch<React.SetStateAction<Inputs[]>>;
}

const RegisterUser: React.FunctionComponent<IRegisterUserProps> = ({
  userData,
  setUserData,
}) => {
  let schema = yup.object().shape({
    name: yup.string().required("Please provide a valid name").min(6).max(12),
    email: yup.string().required("please provide a valid email"),
    age: yup
      .string()
      .required(
        "Please enter a valid age (allow only greater than 10 and less than 30)"
      ),
    address: yup.object().shape({
      country: yup.string().required("we need country to submit form"),
      state: yup.string().required("we need state to submit form"),
      city: yup.string().required("we need city to submit form"),
      pincode: yup.string().required("we need pincode to submit form"),
    }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    shouldUnregister: true,
  });
  const submitData: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setUserData([...userData, data]);
  };
  // console.log("touchedFields", touchedFields);
  console.log("isSubmitSuccessful", isSubmitSuccessful);
  // const checkbox = watch("checkbox");
  const onError = () => {
    console.log("wrong");
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <>
      {isSubmitSuccessful ? (
        <h1>Form Submitted Sucessfully</h1>
      ) : (
        <form>
          <div className="main-parent">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                {...register("name")}
              />
            </div>
            {touchedFields.name && errors.name && (
              <p className="error">{errors.name.message}</p>
            )}
          </div>
          <div className="main-parent">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                {...register("email")}
              />
            </div>
            {touchedFields.email && errors.email && (
              <p className="error">{errors.email.message}</p>
            )}
          </div>
          <div className="main-parent">
            <div className="form-group">
              <label className="form-label">Age</label>
              <input
                className="form-control"
                type="number"
                {...register("age")}
              />
            </div>
            {touchedFields.age && errors.age && (
              <p className="error">{errors.age.message}</p>
            )}
          </div>
          <div className="main-parent">
            <div className="form-group">
              <label className="form-label">Country</label>
              <input
                className="form-control"
                type="text"
                {...register("address.country")}
              />
            </div>
            {touchedFields.address?.country && errors.address?.country && (
              <p className="error">{errors.address?.country?.message}</p>
            )}
          </div>
          <div className="main-parent">
            <div className="form-group">
              <label className="form-label">State</label>
              <input
                className="form-control"
                type="text"
                {...register("address.state")}
              />
            </div>
            {touchedFields.address?.state && errors.address?.state && (
              <p className="error">{errors.address?.state?.message}</p>
            )}
          </div>
          <div className="main-parent">
            <div className="form-group">
              <label className="form-label">City</label>
              <input
                className="form-control"
                type="text"
                {...register("address.city")}
              />
            </div>
            {touchedFields.address?.city && errors.address?.city && (
              <p className="error">{errors.address?.city?.message}</p>
            )}
          </div>
          <div className="main-parent">
            <div className="form-group">
              <label className="form-label">Pincode</label>
              <input
                className="form-control"
                type="text"
                {...register("address.pincode")}
              />
            </div>
              {touchedFields.address?.pincode && errors.address?.pincode && (
                <p className="error">{errors.address?.pincode?.message}</p>
              )}
          </div>
          <div className="form-group-btn">
            <button
              onClick={(e) => handleSubmit(submitData, onError)(e)}
              type="submit"
            >
              Submit Data
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default RegisterUser;
