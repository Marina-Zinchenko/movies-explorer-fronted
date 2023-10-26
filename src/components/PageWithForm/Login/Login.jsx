import './Login.css';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import PageWithForm from '../PageWithForm';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../utils/hooks/useForm';

const Login = ({ setLoggedIn }) => {

  const navigate = useNavigate();

  const onSubmit = (evt) => {
    evt.preventDefault();
    setLoggedIn(true);
    navigate('/movies', { replace: true });
  };

  const { values, handleChange } = useForm({
    email: {
      isValid: '',
      validationMessage: '',
      value: '',
    },
    password: {
      isValid: '',
      validationMessage: '',
      value: '',
    },
  });

  return (
    <main className="content">
      <PageWithForm
        title="Рады видеть!"
        formName="login-form"
        underButtonText="Ещё не зарегистрированы?"
        link="/signup"
        linkName="Регистрация"
        onSubmit={onSubmit}
      >
        <div className="login__container">
          <Input
            name="email"
            type="email"
            label="E-mail"
            value={values.email.value}
            onChange={handleChange}
            required={true}
            validationMessage={values.email.validationMessage}
            minLength="2"
            placeholder="E-mail"
          />
          <Input
            name="password"
            type="password"
            label="Пароль"
            value={values.password.value}
            onChange={handleChange}
            required={true}
            validationMessage={values.password.validationMessage}
            minLength="8"
            maxLength="30"
            placeholder="Введите пароль"
          />
          <span className="login__error">
            Вы ввели неправильный логин или пароль.
          </span>
        </div>
        <SubmitButton
          title="Войти"
          disabled={values.email.isValid && values.password.isValid}
        />
      </PageWithForm>
    </main>
  );
}

export default Login;