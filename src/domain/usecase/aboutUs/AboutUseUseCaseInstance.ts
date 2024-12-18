import { AboutUsRepositoryImpl } from "@/data/repositories/RepositoryImpl";
import { GetAboutUseUseCase } from "./GetAboutUsUseCase";

const aboutUsRepository = new AboutUsRepositoryImpl();
export const getAboutUsUseCaseInstance = new GetAboutUseUseCase(aboutUsRepository);