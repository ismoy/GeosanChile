import { EmailConfigRepositoryImpl } from "@/data/repositories/RepositoryImpl";
import { GetEmailConfigUseCase } from "./GetEmailConfigUseCase";

const emailConfiRepository = new EmailConfigRepositoryImpl();
export const getEmailConfigUseCaseInstance = new GetEmailConfigUseCase(emailConfiRepository);