
const adress = process.env.REACT_APP_API_URL
export const SIGN_UP_URL = `${adress}/api/auth/register`
export const LOG_IN_URL = `${adress}/api/auth/login`
export const UPDATE_PROFILE_URL = `${adress}/api/auth/update`
export const PROFILE_URL = `${adress}/api/auth`
export const GET_ALL_STOCKS = 'https://financialmodelingprep.com/api/v3/stock/list'
export const ADD_STOCK_URL = `${adress}/api/stock`
export const GET_COMPANY_NAMES = 'https://financialmodelingprep.com/api/v3/quote/'
export const API_KEY = process.env.REACT_APP_API_KEY
