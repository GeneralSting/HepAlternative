import FormInput from "../components/FormInput";

const LoginForm = () => {
  return (
    <div className="form">
      <div className="title">HepAlternative</div>
      <div className="subtitle">Welcome to the login page</div>

      <FormInput id="Email" type="email" labelText="Enter Email" />

      <FormInput id="Password" type="password" labelText="Enter Password" />
      

      <button className="submit" type="submit">
        submit
      </button>
    </div>
  );
};

export default LoginForm;
