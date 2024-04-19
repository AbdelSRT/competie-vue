import type { Account, AuthResponse, Login } from '@/components/models'
import axios from 'axios'
import { Buffer } from 'buffer'
import { useRouter } from 'vue-router'

const useAuth = () => {
  const router = useRouter()
  const addAccount = (account: Account): void => {
    axios
      .post<AuthResponse>('http://localhost:8080/api/v1/auth/register', {
        firstname: account.firstname,
        lastname: account.lastname,
        email: account.email,
        password: account.password
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        alert('Added account successfully')
        router.push({ name: 'leaderboard' })
      })
      .catch((error) => {
        console.error('Network error:', error)
      })
  }

  const login = (login: Login) => {
    axios
      .post<AuthResponse>('http://localhost:8080/api/v1/auth/authenticate', {
        email: login.email,
        password: login.password
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        alert('Logged In succesfully')
        getToken()
        router.push({ name: 'leaderboard' })
      })
      .catch((error) => {
        console.error('Network error:', error)
      })
  }

  const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      Buffer.from(base64, 'base64')
        .toString('ascii')
        .split('')
        .map(function (c: string) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )

    return JSON.parse(jsonPayload)
  }

  const logout = () => {
    const token = localStorage.getItem('token')
    if (token) {
      localStorage.removeItem('token')
      location.reload()
    }
  }

  const getToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
      const jwtPayload = parseJwt(localStorage.token)
      if (jwtPayload.exp < Date.now() / 1000) {
        logout()
        alert('Your login has expired. Please login again.')
        localStorage.removeItem('token')
        router.push({ name: 'login' })
      }
      return token
    }
  }

  return {
    addAccount,
    login,
    getToken,
    logout
  }
}

export { useAuth }
