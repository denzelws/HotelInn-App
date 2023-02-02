import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined
  })

  const { loading, error, dispatch } = useContext(AuthContext)
}
