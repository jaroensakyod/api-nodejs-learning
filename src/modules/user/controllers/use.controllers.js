import UserService from "../services/user.services.js"

const UserController = {
          addUser: async (req, res) => {
                    const { name, birthdate } = req.body
                    const created = await UserService.create({name, birthdate: new Date(birthdate)})
                    
                    
                    res.status(201).json({
                              success: true,
                              date: created 
                    })
          
          },
          getAllUsers: async(req, res) =>{
                    const Users = await UserService.getAll()
                    
                    
                    res.status(201).json({
                              success: true,
                              date: Users 
                    })
          }
}

export default UserController