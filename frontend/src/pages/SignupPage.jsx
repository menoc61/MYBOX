import React,{useEffect} from 'react'
import Signup from "../components/Signup/Signup";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
// disable redirection if user already login
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
        <Signup />
    </div>
  )
}

export default SignupPage