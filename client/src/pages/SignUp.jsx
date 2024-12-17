import { useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../components/Reusable/Input";
import Button from "../components/Reusable/Button";

// gender, university

export default function SignUp() {
  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    isLoading: false,
    error: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "NEW_DATA":
        return { ...state, [action.payload.name]: action.payload.value };
      case "NEW_ERROR":
        return { ...state, isLoading: false, error: action.payload.value };
      case "START":
        return { ...state, isLoading: true, error: null };
      case "SUCCESS":
        return { initialState };
      default:
        throw new Error("Unknown action type");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    const { name, value } = e.target;

    if (value === "") {
      dispatch({ type: "NEW_DATA", payload: { name, value } });
      return;
    }

    if (name === "firstName" || name === "lastName") {
      if (!/^[\u0600-\u06FF\s]+$/.test(value)) {
        dispatch({
          type: "NEW_ERROR",
          payload: { value: "Only persian letters are allowed." },
        });
        return;
      }
    } else if (name === "username") {
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        dispatch({
          type: "SUBMIT_ERROR",
          payload: {
            value:
              "نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و کاراکتر زیرخط (_) باشد.",
          },
        });
        return;
      }
    } else if (name === "phoneNumber") {
      if (!/^09\d+$/.test(value)) {
        dispatch({
          type: "NEW_ERROR",
          payload: { value: "Only numbers are allowed. (must start with 09)" },
        });
        return;
      }
    }

    dispatch({ type: "NEW_DATA", payload: { name, value } });
  }

  async function handleSubmit() {
    if (
      !state.firstName ||
      !state.lastName ||
      !state.username ||
      !state.phoneNumber ||
      !state.password ||
      !state.confirmPassword
    ) {
      dispatch({
        type: "NEW_ERROR",
        payload: { value: "All fields are required!" },
      });
      return;
    } else if (state.firstName.length > 30) {
      dispatch({
        type: "NEW_ERROR",
        payload: { value: "First name is too large!" },
      });
      return;
    } else if (state.lastName.length > 30) {
      dispatch({
        type: "NEW_ERROR",
        payload: { value: "Last name is too large!" },
      });
      return;
    } else if (state.username.length > 40) {
      dispatch({
        type: "NEW_ERROR",
        payload: { value: "Username is too large!" },
      });
      return;
    } else if (state.phoneNumber.length > 11) {
      dispatch({
        type: "NEW_ERROR",
        payload: { value: "Phone number is too large!" },
      });
      return;
    } else if (state.password.length > 255) {
      dispatch({
        type: "NEW_ERROR",
        payload: { value: "Password is too large!" },
      });
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        state.password
      )
    ) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          value:
            "Password must be at least 8 characters long, including an uppercase letter, a number, and a special character.",
        },
      });
      return;
    } else if (state.password !== state.confirmPassword) {
      dispatch({
        type: "NEW_ERROR",
        payload: { value: "Passwords do not match!" },
      });
      return;
    }

    dispatch({ type: "START" });

    try {
      const response = await axios.post("https://localhost:8384/api/signup", {
        firstName: state.firstName,
        lastName: state.lastName,
        username: state.username,
        phoneNumber: state.phoneNumber,
        password: state.password,
      });

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "SUCCESS" });
      } else {
        throw new Error("Failed to sign up!");
      }
    } catch (error) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          value:
            error.response?.data?.message ||
            error.message ||
            "An error occurred",
        },
      });
    }
  }

  return (
    <form
      className="container max-w-96 h-screen m-auto	w-full px-5 py-4 text-xs flex flex-col flex-wrap"
      onSubmit={handleSubmit}
    >
      <h3 className="text-start text-2xl my-4">ثبت نام</h3>
      <p className="mb-5 text-gray-500">به چایی نبات خوش اومدی!</p>
      <div className="flex flex-col flex-wrap gap-4">
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-First-Name-Input">نام</label>
          <Input
            type="text"
            placeholder="عرفان"
            className="border-default border-stone-400 text-right p-2 rounded-lg"
            id="Login-First-Name-Input"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Last-Name-Input">نام خانوادگی</label>
          <Input
            type="text"
            placeholder="رئیس صفری"
            className="border-default border-stone-400 text-right p-2 rounded-lg"
            id="Login-Last-Name-Input"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Username-Input">نام کاربری</label>
          <Input
            type="text"
            placeholder="Username"
            className="border-default border-stone-400 text-right p-2 rounded-lg"
            id="Login-Username-Input"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Number-Input">شماره موبایل</label>
          <Input
            type="text"
            placeholder="09125553214"
            className="border-default border-stone-400 text-right p-2 rounded-lg"
            id="Login-Number-Input"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Password-Input">کلمه عبور</label>
          <Input
            type="password"
            placeholder="********"
            className="border-default border-stone-400 text-right p-2 rounded-lg"
            id="Login-Password-Input"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <span className="text-gray-500">باید حداقل هشت کاراکتر باشد</span>
        </div>
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Password-Checker-Input">تایید کلمه عبور</label>
          <Input
            type="password"
            placeholder="********"
            className="border-default border-stone-400 text-right p-2 rounded-lg"
            id="Login-Password-Checker-Input"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col grow justify-end gap-2">
        <Button
          styles="w-full bg-sky-600 p-2 rounded-lg text-zinc-50"
          type="submit"
          isDisabled={state.loading}
        >
          ثبت نام
        </Button>
        <div className="flex justify-center gap-2">
          <span>قبلا ثبت نام کردید؟</span>
          <Link to="/sign-in" className="text-sky-700 active:text-sky-950">
            <span>ورود</span>
          </Link>
        </div>
      </div>
    </form>
  );
}
