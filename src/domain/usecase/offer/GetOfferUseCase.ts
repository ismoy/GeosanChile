import { Offer } from "@/domain/model/Offer";
import { OfferRepository } from "@/domain/repositories/Repository";

export class GetOfferUseCase{
    constructor(private repository: OfferRepository) {}
    async execute(): Promise<Offer[]> {
        return this.repository.getOffer();
    }
}