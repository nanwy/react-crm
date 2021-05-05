import { useAuth } from '../context/auth-context';
import qs from 'qs'
import * as auth from 'auth-provider'
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: object,
  token?: string
}

export const http = async (endpoint: string, { data, token, headers, ...options }: Config = {}) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : ''
    },
    ...options
  }

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async res => {
    if (res.status === 401) {
      await auth.logout()
      window.location.reload()
      return Promise.reject({ message: '请重新登录' })
    }
    const data = await res.json()
    if (res.ok) {
      return data
    } else {
      return Promise.reject({ message: data })
    }
  })
}

export const useHttp = () => {
  const { user } = useAuth()
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token })
}

// Omit 删除某个类型  partial 让类型变为可选

// type PartialWY<T> = {
  // [P in keyof T]?:T[P]
// }
// 
// type age = Exclude<Config,'data'>
