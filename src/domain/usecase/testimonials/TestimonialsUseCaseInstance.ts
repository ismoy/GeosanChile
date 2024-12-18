import { TestimonialsRepositoryImpl } from "@/data/repositories/RepositoryImpl";
import { GetTestimonialsUseCase } from "./GetTestimonialsUseCase";

const testimonialsRepository = new TestimonialsRepositoryImpl();
export const getTestimonialsUseCaseInstance = new GetTestimonialsUseCase(testimonialsRepository);