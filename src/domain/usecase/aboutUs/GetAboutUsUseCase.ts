import { AboutUsResponse } from "@/domain/model/AboutUs";
import { AboutUsRepository } from "@/domain/repositories/Repository";

export class GetAboutUseUseCase {
    constructor(private repository: AboutUsRepository) {}

    async execute(): Promise<AboutUsResponse> {
        return this.repository.getAboutUs();
    }
}