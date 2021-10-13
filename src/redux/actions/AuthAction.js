import { loginService } from "../../apiUtils/AuthService";
import { signUpService } from "../../apiUtils/AuthService";
export const logout = (history) => {
  localStorage.clear();
  history.props.history.push("/login");
};

export const login = (credentials, history) => {
  return (dispatch) => {
    if (credentials.password.length < 6) {
      let message = "Your password is too short";
      return dispatch({ type: "ERROR", message });
    }
    try {
      loginService(credentials, history).then(
        (res) => {
          console.log(res);

          if (res.status !== 200) {
            console.log("kkk");
            dispatch({ type: "WARNING", res });
          } else if (res.data.success !== undefined) {
            console.log(res.data.user);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            dispatch({ type: "LOGIN_SUCCESS" });
            dispatch({ type: "WARNING", res });
          } else {
            dispatch({ type: "LOGIN_ERROR", res });
            dispatch({ type: "ERROR", res });
          }
        },
        (error) => {
          console.log("kkkk");

          dispatch({ type: "CODE_ERROR", error });
        }
      );
    } catch (e) {
      dispatch({ type: "CODE_ERROR", e });
      dispatch({ type: "WARNING", e });
    }
  };
};

export const signUp = (credentials) => {
  console.log(credentials);
  return (dispatch) => {
    if (credentials.password.length < 6) {
      let message = "Your password is too short";
      dispatch({ type: "ERROR", message });
      dispatch({ type: "SHORT_PASSWORD" });
    }
    signUpService(credentials).then(
      (res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          dispatch({ type: "SIGNUP_SUCCESS" });
          // dispatch({type:'SUCCESS',message:"Registered Successfully..."})
        } else {
          // dispatch({type:'SIGNUP_ERROR',res})
          dispatch({ type: "ERROR", res });
        }
      },
      (error) => {
        dispatch({ type: "CODE_ERROR", error });
        console.log(error);
      }
    );
  };
};
