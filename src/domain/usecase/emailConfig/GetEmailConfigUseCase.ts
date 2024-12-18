import { EmailConfig } from "@/domain/model/EmailConfig";
import { EmailConfigRepository } from "@/domain/repositories/Repository";

export class GetEmailConfigUseCase {
    constructor(private emailConfigRepository: EmailConfigRepository) { }
  
    async execute(): Promise<EmailConfig> {
      return await this.emailConfigRepository.getEmailConfig();
    }
  }