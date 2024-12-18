import { ServicesRepository } from "@/domain/repositories/Repository";
import { ServicesResponse } from "@/domain/model/Services";

export class GetServicesUseCase {
    constructor(private repository: ServicesRepository) {}

    async execute(): Promise<ServicesResponse[]> {
        return this.repository.getServices();
    }
}