const TOKEN_KEY = 'aToken'
const REFRESH_TOKEN_KEY = 'rToken'

/**
 * Manage how the Acess Tokens are being stored and retrieved from storage.
 * 
 * Tokens are stored into localStorage. localStorage should always be accessed through this instance.
 */

const TokenService = {

  getAccessToken(accessToken) {
    return localStorage.getItem(TOKEN_KEY, accessToken)
  },

  saveAccessToken(accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeAccessToken() {
    localStorage.removeItem(TOKEN_KEY)
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  },

  saveRefreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }

}

export default TokenService