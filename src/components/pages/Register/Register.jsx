import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
const Register = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    setSuccessMessage("");
    setErrorMessage("");
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const passwordCapitalCheck = /^(?=.*[A-Z]).+$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please Provide a valid email address");
      return;
    }else if(password.length < 6){
      setErrorMessage("Password Should be 6 character or more");
      return;
    }else if(!passwordCapitalCheck.test(password)){
      setErrorMessage("password should contains at least one capital letter or more");
      return;
    }
    else if (!specialCharRegex.test(password)) {
      setErrorMessage(
        "password should contains at least one special character or more"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            e.target.reset();
            setSuccessMessage("Registration Successful");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Registration is successfully done. Go to Log In",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            return;
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        return;
      });
  };
  return (
    <>
      <div className="border border-[#FFF] bg-[#FFF] rounded-md p-12 max-w-2xl mx-auto mt-7">
        <Helmet>
          <title>Social Manager | Registration</title>
        </Helmet>
        <h1 className="text-3xl text-[#403F3F] font-semibold mb-4">
          Register Your Account
        </h1>

        <div className="w-full  space-y-4">
          <div>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="text-md font-semibold text-[#403F3F]">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered bg-white w-full rounded-md"
                  required
                />
              </div>
              <div>
                <label className="text-md font-semibold text-[#403F3F]">
                  Photo Url
                </label>
                <input
                  type="text"
                  placeholder="Your Photo Url"
                  name="photoUrl"
                  className="input input-bordered bg-white w-full rounded-md"
                  required
                />
              </div>
              <div>
                <label className="text-md font-semibold text-[#403F3F]">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered w-full bg-white rounded-md"
                  required
                />
              </div>
              <div className="relative">
                <label className="text-md font-semibold text-[#403F3F]">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered bg-white w-full rounded-md"
                  required
                />
                <span
                  className="absolute right-5 bottom-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible className="text-xl" />
                  ) : (
                    <AiFillEye className="text-xl" />
                  )}
                </span>
              </div>
              <div className="mt-5">
                {successMessage && (
                  <p className="text-xl font-bold text-[#008000]">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-xl font-bold text-[#FF0000]">
                    {errorMessage}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn bg-[#3ABFF8] hover:bg-[#7cbfdc] text-white w-full rounded-md"
                >
                  Register
                </button>
              </div>
              <div>
                <p className="text-[#706F6F] text-lg">
                  Have An Account ?
                  <Link className="text-[#FF0000] text-lg" to="/signIn">
                    {" "}
                    Sign In
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
