export interface Comparison {
  before: string;
  after: string;
  description: string;
}

export interface ServiceDetails {
  title: string;
  client: string;
  descriptions: string;
  comparisons: Comparison[];
}

export interface ServicesResponse {
  id: string;
  serviceKey: string;
  details: ServiceDetails;
}