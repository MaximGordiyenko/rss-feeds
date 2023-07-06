import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../styles";
import { api } from "../api";

export const Register = () => {
  const [cookies] = useCookies(["jwt"]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);
  
  const [values, setValues] = useState({ email: "", password: "" });
  
  const generateError = (error) => {
    toast.error(error, {
      position: "bottom-right",
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.post("/register", { ...values });
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  
  return (
    <div>
      <h2>Register Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <span>
          Already have an account ?<Link to="/login"> Login</Link>
        </span>
        <br/>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
