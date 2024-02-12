
import { uselocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
  const[dark, setDark] = uselocalStorage("darkmode", false)
 


  return [dark, setDark]

}