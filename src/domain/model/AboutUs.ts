export interface AboutUsResponse {
  about: {
    title: string;
    description: string;
  };
  history: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    description: string;
  };
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  team: {
    name: string;
    role: string;
  }[];
}