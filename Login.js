import RegistrationPage from "./RegistrationPage";

function Login({ handleLoginSubmit}) {
    const [formValue, setformValue] = useState({
        email: '',
        password: ''
    })

    const handleChange =(e) => {
        const { name, value } =  e.target;
        setIsValue({
            ...isValue,
            [name]: value
        });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formValue
    handleLoginSubmit(email, password)
  }
  return (
    <>
    <Header>
        <Link to="/sing-up" className="header__link">Зарегестрироваться</Link>
    </Header>
    <RegistrationPage name="login" title="Вход" buttonText="Войти" onSubmit={handleSubmit}>
        <input id="input-login-email" className="auth__input auth__input_name" name="email" type="email" placeholder="Email" minLength={2} maxLenth={40} required value={formValue.email} onChange={handleChange} />
        <span id="input-login-email-error" className="popup__error" />
        <input id="input-login-password" className="auth__input auth__input_password" name="password" type="password" placeholder="Пароль" minLength={2} maxLenth={200} required value={formValue.password} onChange={handleChange} />
        <span id="input-login-password-error" className="popup__error" />
    </RegistrationPage>
    <Link to="/sing-in" className="auth__link">Уже зарегестрированы? Войти</Link>
    </>
  );
}
export default Login;