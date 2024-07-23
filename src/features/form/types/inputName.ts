import { LoginForm } from "../login/types/loginForm";
import { RegistrationForm } from "../registration/types/registrationForm";

export type InputName = keyof LoginForm | keyof RegistrationForm;
