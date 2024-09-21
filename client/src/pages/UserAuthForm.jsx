import PageAnimation from '../common/PageAnimation';
import InputBox from '../components/InputBox';
import googleIcon from '../img/google.png';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import PropTypes from 'prop-types';

const UserAuthForm = ({ type }) => {
  UserAuthForm.propTypes = {
    type: PropTypes.string.isRequired,
  };
  // eslint-disable-next-line no-useless-escape
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

  const userAuthThroughServer = (serverRoute, formData) => {
    axios
      .post(
        import.meta.env.VITE_SERVER_DOMAIN + serverRoute,
        formData
      )
      .then(({ data }) => {
        console.log(data);
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  };
  const handleSubmit = (e) => {
    let serverRoute = type === 'sign-in' ? 'signin' : 'signup';

    e.preventDefault();
    let form = new FormData(document.getElementById('formElement'));
    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }
    let { fullname, username, email, password } = formData;
    if (fullname) {
      if (fullname.length < 3) {
        return toast.error(
          'Fullname must be at least 3 letters long'
        );
      }
    }
    if (username.length < 3) {
      return toast.error('Username must be at least 3 letters long');
    }
    if (!email.length) {
      return toast.error('Enter email');
    }
    if (!emailRegex.test(email)) {
      return toast.error('Email is invalid');
    }
    if (!passwordRegex.test(password)) {
      return toast.error(
        'Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters'
      );
    }
    userAuthThroughServer(serverRoute, formData);
    console.log(formData);
  };

  return (
    <PageAnimation keyValue={type}>
      <section className="h-cover flex items-center justify-center">
        <Toaster />
        <form id="formElement" className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type === 'sign-in' ? 'Welcome Back' : 'Join us today'}
          </h1>
          {type !== 'sign-in' ? (
            <>
              <InputBox
                name="fullname"
                type="text"
                placeholder="Full name"
                icon="fi-rr-user"
              />
              <InputBox
                name="username"
                type="text"
                placeholder="User name"
                icon="fi-rr-user"
              />
            </>
          ) : (
            ''
          )}
          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon="fi-rr-envelope"
          />
          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-key"
          />

          <button
            className="btn-dark center mt-14"
            type="submit"
            onClick={handleSubmit}
          >
            {type.replace('-', ' ')}
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>OR</p>
            <hr className="w-1/2 border-black" />
          </div>
          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleIcon} alt="Icon " className="w-5" />
            Continue With Google
          </button>
          {type === 'sign-in' ? (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Don`t have an account ?
              <Link
                to="/signup"
                className="underline text-black text-xl ml-1"
              >
                Join us today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Already a member ?
              <Link
                to="/signin"
                className="underline text-black text-xl ml-1"
              >
                Sign in here
              </Link>
            </p>
          )}
        </form>
      </section>
    </PageAnimation>
  );
};

export default UserAuthForm;
