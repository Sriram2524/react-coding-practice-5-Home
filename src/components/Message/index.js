// Write your code here
import './index.css'

const Message = props => {
  const {isLogIn} = props
  const mes = isLogIn ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{mes}</h1>
}

export default Message
