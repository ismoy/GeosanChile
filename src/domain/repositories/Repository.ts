import { AboutUsResponse } from "../model/AboutUs";
import { EmailConfig } from "../model/EmailConfig";
import { Offer } from "../model/Offer";
import { ServicesResponse } from "../model/Services";
import { Testimonial } from "../model/Testimonials";

export interface OfferRepository {
  getOffer(): Promise<Offer[]>
}
export interface ServicesRepository {
  getServices(): Promise<ServicesResponse[]>
}
export interface TestimonialsRepository {
  getTestimonials(): Promise<Testimonial[]>
}
export interface AboutUsRepository {
  getAboutUs(): Promise<AboutUsResponse>;
}
export interface EmailConfigRepository{
  getEmailConfig(): Promise<EmailConfig>
}