import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../Reusable/Input";
import Button from "../Reusable/Button";

const initialState = {
  phoneNumber: "",
  password: "",
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

export default function SignInForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    if (value === "") {
      dispatch({ type: "NEW_DATA", payload: { name, value } });
      return;
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

    if (!state.phoneNumber || !state.password) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "requiredFields",
          value: "All fields are required!",
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

    if (!/^09\d*$/.test(state.phoneNumber)) {
      dispatch({
        type: "NEW_ERROR",
        payload: {
          field: "phoneNumber",
          value: "Phone number must start with 09.",
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

    dispatch({ type: "START" });

    try {
      await axios
        .post("https://localhost:8384/api/sign-in", {
          status: "success",
          data: {
            phoneNumber: state.phoneNumber,
            password: state.password,
          },
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            dispatch({ type: "SUCCESS" });
            navigate("/dashboard");
          } else {
            dispatch({
              type: "NEW_ERROR",
              payload: {
                field: "server",
                value: "Unexpected response from the server.",
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
      <h3 className="text-start text-2xl my-6">ورود</h3>
      <p className="mb-5">خوش آمدید! لطفا اطلاعات خود را وارد کنید.</p>
      <div className="flex flex-col justify-around gap-2">
        <label htmlFor="Login-Number-Input">شماره موبایل</label>
        <Input
          type="text"
          placeholder="09331732701"
          className="border-default border-stone-400 text-right p-2 rounded-lg"
          id="Login-Number-Input"
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col justify-around gap-2 mt-5">
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
        <Link to="/" className="text-sky-700 active:text-sky-950">
          <span>فراموشی کلمه عبور</span>
        </Link>
      </div>
      <div className="flex flex-col grow justify-end gap-2">
        <Button
          type="submit"
          styles="w-full bg-sky-600 p-2 rounded-lg text-zinc-50"
        >
          ورود
        </Button>
        <div className="flex justify-center gap-2">
          <span>حساب کاربری ندارید؟</span>
          <Link to="/sign-up" className="text-sky-700 active:text-sky-950">
            <span>ثبت‌ نام</span>
          </Link>
        </div>
      </div>
    </form>
  );
}
