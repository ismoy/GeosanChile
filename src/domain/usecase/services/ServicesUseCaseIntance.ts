import { ServicesRepositoryImpl } from "@/data/repositories/RepositoryImpl";
import { GetServicesUseCase } from "./GetServicesUseCase";

const servicesRepository = new ServicesRepositoryImpl();
export const getServicesUseCaseInstance = new GetServicesUseCase(servicesRepository);