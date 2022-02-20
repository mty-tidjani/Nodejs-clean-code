import UserRepository from "src/adapters/Repositories/UserRepository"
import { RegisterUseCase } from "src/application/usecases/auth/register.uc"
import { IEncryptor } from "src/shared/interfaces"

import { LoginController } from "./login.ctrl"
import { RegisterController } from "./register.ctrl"

const userRepo = new UserRepository()

const AuthController = Object.freeze({
    register: (encryptor: IEncryptor) => new RegisterController(new RegisterUseCase(userRepo, encryptor)),
    login: (encryptor: IEncryptor) => new LoginController(new RegisterUseCase(userRepo, encryptor))
})

export default AuthController