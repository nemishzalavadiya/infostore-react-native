import { checkMultiple, RESULTS, request } from 'react-native-permissions'

export default async function PermissionCheck(listOfPermisions) {
  let finalResult = true
  try {
    let results = await checkMultiple(listOfPermisions)
    Object.keys(results).forEach(async (permission) => {
      if (results[permission] !== RESULTS.GRANTED) {
        let result = await request(permission)
        if (result === RESULTS.GRANTED) {
          finalResult = finalResult & true
          console.log('Thanks for permission: ', result)
        } else {
          finalResult = finalResult & false
          console.log('Permission Denied')
        }
      } else {
        finalResult = finalResult & true
      }
    })
    return finalResult
  } catch (error) {
    console.log('error occured: ', error)
  }
  return false
}
