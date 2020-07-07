import Cookie from 'js-cookie'

export const ID_TOKEN_KEY = 'id_token'
export const REFRESH_TOKEN_KEY = 'refresh_token'
export const USER_ID = 'user_id'
export const ACCESS_TOKEN = 'access_token'

export function getCookie(key: string) {
   return Cookie.get(key)
}
export function setCookie(key: string, value: string, expiryInDays = 30) {
   if (
      process.env.NODE_ENV === 'development' ||
      window.location.hostname === 'localhost'
   ) {
      Cookie.set(key, value, {
         expires: expiryInDays,
         path: '/'
      })
   } else {
      Cookie.set(key, value, {
         expires: expiryInDays,
         path: '/',
         secure: true
      })
   }
}

export function getIdToken() {
   return getCookie(ID_TOKEN_KEY)
}
export function setIdToken(idToken: string, expiryInDays = 30) {
   setCookie(ID_TOKEN_KEY, idToken, expiryInDays)
}

export function getRefreshToken() {
   return getCookie(REFRESH_TOKEN_KEY)
}
export function setRefreshToken(refreshToken: string, expiryInDays = 30) {
   setCookie(REFRESH_TOKEN_KEY, refreshToken, expiryInDays)
}

export function getUserId() {
   return getCookie(USER_ID)
}
export function setUserId(userId: string, expiryInDays = 30) {
   setCookie(USER_ID, userId, expiryInDays)
}

export function getAccessToken() {
   return getCookie(ACCESS_TOKEN)
}
export function setAccessToken(accessToken: string, expiryInDays = 30) {
   setCookie(ACCESS_TOKEN, accessToken, expiryInDays)
}

export function clearUserSession() {
   Cookie.remove(ID_TOKEN_KEY, { path: '/' })
   Cookie.remove(REFRESH_TOKEN_KEY, { path: '/' })
   Cookie.remove(USER_ID, { path: '/' })
   Cookie.remove(ACCESS_TOKEN, { path: '/' })
}
