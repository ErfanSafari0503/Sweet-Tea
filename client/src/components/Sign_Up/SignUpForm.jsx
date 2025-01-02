import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../Reusable/Input";
import Button from "../Reusable/Button";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  gender: "select",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  isLoading: false,
  error: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "NEW_DATA":
      return { ...state, [action.payload.name]: action.payload.value };
    case "START":
      return { ...state, isLoading: true, error: {} };
    case "SUCCESS":
      return { initialState };
    case "NEW_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      throw new Error("Unknown action type");
  }
}

export default function SignUpForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

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
          payload: {
            field: name + "Entery",
            value: "Only persian letters are allowed.",
          },
        });
        return;
      }
    }

    if (name === "username") {
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        dispatch({
          type: "NEW_ERROR",
          payload: {
            field: "usernameEntery",
            value:
              "Username can only contain English letters, numbers, and the underscore (_) character.",
          },
        });
        return;
      }
    }

    if (name === "phoneNumber") {
      if (!/^\d*$/.test(value)) {
        dispatch({
          type: "NEW_ERROR",
          payload: {
            field: "phoneNumberEntery",
            value: "Only numbers are allowed.",
          },
        });
        return;
      }
    }

    dispatch({ type: "NEW_DATA", payload: { name, value } });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !state.firstName ||
      !state.lastName ||
      !state.username ||
      state.gender === "select" ||
      !state.phoneNumber ||
      !state.password ||
      !state.confirmPassword
    ) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "requiredFields",
          value: "All fields are required!",
        },
      });
      return;
    }

    if (state.firstName.length > 30) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "firstName",
          value: "First name is too large!",
        },
      });
      return;
    }

    if (state.lastName.length > 30) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "lastName",
          value: "Last name is too large!",
        },
      });
      return;
    }

    if (state.username.length > 40) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "username",
          value: "Username is too large!",
        },
      });
      return;
    }

    if (state.phoneNumber.length > 11) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "phoneNumber",
          value: "Phone number is too large!",
        },
      });
      return;
    }

    if (state.password.length > 255) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "password",
          value: "Password is too large!",
        },
      });
      return;
    }

    if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        state.password
      )
    ) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "password",
          value:
            "Password must be at least 8 characters long, including an uppercase letter, a number, and a special character.",
        },
      });
      return;
    }

    if (state.password !== state.confirmPassword) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "password",
          value: "Passwords do not match!",
        },
      });
      return;
    }

    dispatch({ type: "START" });

    try {
      await axios
        .post("http://localhost:3002/v1/auth/register", {
          first_name: state.firstName,
          last_name: state.lastName,
          phone_number: state.phoneNumber,
          username: state.username,
          password: state.password,
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            dispatch({ type: "SUCCESS" });
            navigate("/sign-in");
          } else {
            dispatch({
              type: "NEW_ERROR",
              payload: {
                field: "server",
                value: `respons code ${response.status}`,
              },
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: "NEW_ERROR",
            payload: {
              field: err.response ? "server" : "network",
              value:
                err.response?.data?.message || "An unexpected error occurred.",
            },
          });
        });
    } catch (err) {
      console.log(err);
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
          {!state.firstName && <span className="">فقط حروف فارسی</span>}
          {state.error.firstName && (
            <span className="">{state.error.firstName}</span>
          )}
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
          {!state.lastName && <span className="">فقط حروف فارسی</span>}
          {state.error.lastName && (
            <span className="">{state.error.lastName}</span>
          )}
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
          {/* {!state.username && <span className=""></span>} */}
          {state.error.username && (
            <span className="">{state.error.username}</span>
          )}
        </div>
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Gender-Input">جنسیت</label>
          <select
            id="Login-Gender-Input"
            name="gender"
            value={state.gender}
            onChange={handleChange}
            className="border-default border-stone-400 text-right p-2 rounded-lg"
          >
            <option value="select" hidden={state.gender !== "select"}>
              انتخاب کنید
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
            <option value="other">دیگر</option>
          </select>
          {state.error.gender && <span className="">{state.error.gender}</span>}
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
          {/* {!state.lastName && <span className="">09*********</span>} */}
          {state.error.phoneNumber && (
            <span className="">{state.error.phoneNumber}</span>
          )}
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
          {/* {!state.lastName && <span className=""></span>} */}
          {state.error.password && (
            <span className="">{state.error.password}</span>
          )}
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
          {state.error.confirmPassword && (
            <span className="">{state.error.confirmPassword}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col grow justify-end gap-2">
        <Button
          styles="w-full bg-sky-600 p-2 rounded-lg text-zinc-50"
          type="submit"
          isDisabled={state.isLoading}
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
