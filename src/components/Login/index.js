// Write your code here
import './index.css'

const Login = props => {
  const {login} = props
  return (
    <button onClick={login} className="button" type="button">
      Login
    </button>
  )
}

export default Login
