import { IController, IUseCase } from "../../../shared/interfaces";
import { THttpRequest, THttpResponse } from "../../../shared/types/http";

export default class UpdateTodoController implements IController {
    private updateTodouseCase: IUseCase

    constructor(updateTodouseCase: IUseCase) {
        this.updateTodouseCase = updateTodouseCase
    }

    async make({ body }: THttpRequest): Promise<THttpResponse> {
        try {
            // Preprocess data

            const todos = await this.updateTodouseCase.run(body)

            return {
                body: { result: todos, statusCode: 200, success: true },
                statusCode: 200,
            }
        } catch (error: any) {
            return {
                body: { statusCode: 400, success: true, message: error.message },
                statusCode: 400,
            }
        }
    }
}