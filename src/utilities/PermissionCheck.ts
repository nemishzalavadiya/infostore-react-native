import { checkMultiple, request, RESULTS } from 'react-native-permissions'

export default async function PermissionCheck(listOfPermisions) {
  let finalResult = true
  try {
    const results = await checkMultiple(listOfPermisions)
    Object.keys(results).forEach(async (permission) => {
      if (results[permission] !== RESULTS.GRANTED) {
        const result = await request(permission)
        if (result === RESULTS.GRANTED) {
          finalResult = finalResult && true
          console.log('Thanks for permission: ', result)
        } else {
          finalResult = finalResult && false
          console.log('Permission Denied')
        }
      } else {
        finalResult = finalResult && true
      }
    })
    return finalResult
  } catch (error) {
    console.error('PermissionCheck raise issue: ', error)
  }
  return false
}
