import { AboutUsRepository, EmailConfigRepository, OfferRepository, ServicesRepository, TestimonialsRepository } from "@/domain/repositories/Repository";
import { Offer } from "@/domain/model/Offer";
import { BASE_URL } from "@/core/config/firebaseConfig";
import { ServicesResponse } from "@/domain/model/Services";
import { Testimonial } from "@/domain/model/Testimonials";
import { AboutUsResponse } from "@/domain/model/AboutUs";
import { EmailConfig } from "@/domain/model/EmailConfig";


export class OfferRepositoryImpl implements OfferRepository {
    async getOffer(): Promise<Offer[]> {
        try {
            const response = await BASE_URL.get("Offers");
            const documents = response.data.documents;

            if (!documents || !Array.isArray(documents)) {
                return [];
            }

            return documents.map((doc: any) => {
                const fields = doc.fields;
                return {
                    id: doc.name.split("/").pop(),
                    image: fields.image?.stringValue || "",
                    title: fields.title?.stringValue || "",
                    description: fields.description?.stringValue || "",
                    buttonText: fields.buttonText?.stringValue || "",
                };
            });
        } catch (error) {
            throw new Error("Error fetching offers from Firestore.");
        }
    }
}
export class ServicesRepositoryImpl implements ServicesRepository {
    async getServices(): Promise<ServicesResponse[]> {
        try {
            const response = await BASE_URL.get("services");
            const documents = response.data.documents;

            if (!documents || !Array.isArray(documents)) {
                return [];
            }

            return documents.flatMap((doc: any) => {
                const serviceKey = Object.keys(doc.fields)[0];
                const serviceData = doc.fields[serviceKey]?.mapValue?.fields;

                if (!serviceData) {
                    return [];
                }
                const details = {
                    title: serviceData.title?.stringValue || "",
                    client: serviceData.client?.stringValue || "",
                    descriptions: serviceData.descriptions?.stringValue || "",
                    comparisons: serviceData.comparisons?.arrayValue?.values?.map((comparison: any) => ({
                        before: comparison.mapValue.fields.before?.stringValue || "",
                        after: comparison.mapValue.fields.after?.stringValue || "",
                        description: comparison.mapValue.fields.description?.stringValue || "",
                    })) || [],
                };

                return {
                    id: doc.name.split("/").pop(), // ID del documento
                    serviceKey,
                    details,
                };
            });
        } catch (error) {
            throw new Error("Error fetching services from Firestore.");
        }
    }
}

export class TestimonialsRepositoryImpl implements TestimonialsRepository {
    async getTestimonials(): Promise<Testimonial[]> {
        try {
            // Realiza la solicitud a Firestore
            const response = await BASE_URL.get("testimonials");
            const documents = response.data.documents;

            // Validación si no hay documentos o no es un array
            if (!documents || !Array.isArray(documents)) {
                return [];
            }

            // Mapea los documentos a objetos Testimonial
            return documents.map((doc: any) => {
                const fields = doc.fields;
                return {
                    id: doc.name.split("/").pop() || "", // Obtén el ID del documento
                    name: fields.name?.stringValue || "", // Campo "name" del documento
                    comment: fields.comment?.stringValue || "", // Campo "comment"
                    rating: fields.rating?.doubleValue || 0, // Campo "rating" como número
                };
            });
        } catch (error) {
            // Lanza un error con información adicional
            console.error("Error fetching testimonials:", error);
            throw new Error("Error fetching testimonials from Firestore.");
        }
    }
}
export class AboutUsRepositoryImpl implements AboutUsRepository {
    async getAboutUs(): Promise<AboutUsResponse> {
      try {
        const response = await BASE_URL.get("aboutUs"); // Firestore endpoint
        const documents = response.data.documents;
  
        if (!documents || !Array.isArray(documents) || documents.length === 0) {
          throw new Error("No se encontraron datos en Firestore.");
        }
        const fields = documents[0].fields;
  
        const data: AboutUsResponse = {
          about: {
            title: fields.about.mapValue.fields.title.stringValue,
            description: fields.about.mapValue.fields.description.stringValue,
          },
          history: {
            title: fields.history.mapValue.fields.title.stringValue,
            description: fields.history.mapValue.fields.description.stringValue,
          },
          experience: {
            title: fields.experience.mapValue.fields.title.stringValue,
            description: fields.experience.mapValue.fields.description.stringValue,
          },
          mission: {
            title: fields.mission.mapValue.fields.title.stringValue,
            description: fields.mission.mapValue.fields.description.stringValue,
          },
          vision: {
            title: fields.vision.mapValue.fields.title.stringValue,
            description: fields.vision.mapValue.fields.description.stringValue,
          },
          team: fields.team.arrayValue.values.map((member: any) => ({
            name: member.mapValue.fields.name.stringValue,
            role: member.mapValue.fields.role.stringValue,
          })),
        };
  
        return data;
      } catch (error) {
        console.error("Error fetching About Us data:", error);
        throw new Error("Error al obtener datos de Firestore.");
      }
    }
  }
  export class EmailConfigRepositoryImpl implements EmailConfigRepository {
    async getEmailConfig(): Promise<EmailConfig> {
      try {
        const response = await BASE_URL.get("emailConfig");
        const documents = response.data.documents;
  
        if (!documents || !Array.isArray(documents) || documents.length === 0) {
          throw new Error("No se encontraron datos de configuración de email.");
        }
  
        const fields = documents[0].fields;
  
        const emailConfig: EmailConfig = {
          serviceId: fields.serviceId?.stringValue || "",
          templateId: fields.templateId?.stringValue || "",
          userId: fields.userId?.stringValue || "",
          successMessage: fields.successMessage?.stringValue || "",
          errorMessage: fields.errorMessage?.stringValue || "",
        };
  
        return emailConfig;
      } catch (error) {
        console.error("Error al obtener configuración de email:", error);
        throw new Error("Error al obtener configuración de email desde Firestore.");
      }
    }
  }