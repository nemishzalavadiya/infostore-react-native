import { STORAGE_PERMISSIONS } from '../helper/Constant'
import PermissionCheck from './PermissionCheck'

export default async function isPermissionProvided() {
  try {
    let result = await PermissionCheck(STORAGE_PERMISSIONS)
    console.log('permission result: ', result)
    return result
  } catch (error) {
    console.error('isPermissionProvided raise issue : ', error)
  }
}
