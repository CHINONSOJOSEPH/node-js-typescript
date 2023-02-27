import User from'../models/user.model'
import Iuser from '../interfaces/user.interfaces'

class UserService {
    async create (userData : Iuser) {
        return await User.create(userData);
    }

    async getOne(filter  : Partial<Iuser> & {userData? : string}){
        return await User.findOne(filter) 
    }
}
 export default  new UserService()