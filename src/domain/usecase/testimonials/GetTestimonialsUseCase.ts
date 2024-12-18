import { Testimonial } from "@/domain/model/Testimonials";
import { TestimonialsRepository } from "@/domain/repositories/Repository";

export class GetTestimonialsUseCase {
    constructor(private repository: TestimonialsRepository) {}

    async execute(): Promise<Testimonial[]> {
        return this.repository.getTestimonials();
    }
}