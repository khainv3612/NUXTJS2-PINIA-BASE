import request from '@/utils/request'
import requestNoAuth from "@/utils/requestNoAuth"

export function login(data) {
  return requestNoAuth({
    url: '/auth/login',
    method: 'post',
    data,
    isLoading: true,
    isAlertMessage: false
  })
}

export function logout() {
  return request({
    url: 'auth/logout',
    method: 'post',
  })
}
