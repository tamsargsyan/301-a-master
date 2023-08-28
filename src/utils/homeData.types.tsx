interface OurEcosystemData {
  created_at: string;
  updated_at: string;
  id: 1;
  button_name_am: string;
  button_name_en: string;
  button_name_ru: string;
  description_am: string;
  description_en: string;
  description_ru: string;
  image: string;
  title_am: string;
  title_en: string;
  title_ru: string;
}

export interface HomeData {
  OurProjects: any;
  ambassadors: OurEcosystemData[];
  club301: OurEcosystemData[];
  dataHypotheses: any;
  experts: OurEcosystemData[];
  followUs: any;
  foundationFriends: any;
  hypothesesForTheFuture: any;
  landOfWisdom: any;
  news: any;
  ourEcosystem: any;
  ourMission: any;
  partners: any;
  projects: any;
  sages: OurEcosystemData[];
  volunteers: OurEcosystemData[];
  whyImportant: any;
}
