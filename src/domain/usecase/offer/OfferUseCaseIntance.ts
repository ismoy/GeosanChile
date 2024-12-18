import { OfferRepositoryImpl } from "@/data/repositories/RepositoryImpl";
import { GetOfferUseCase } from "./GetOfferUseCase";

const offerRepository = new OfferRepositoryImpl();
export const getOfferUseCaseInstance = new GetOfferUseCase(offerRepository);