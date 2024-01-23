export interface servicePageAdvantagesTypes {
  fields: {
    servicePageAdvantageHeading: string;
    servicePageAdvantageDescription: string;
    servicePageAdvantageImage: {
      fields: {
        description: string;
        file: {
          url: string;
        };
      };
    };
  };
}

export interface servicePageTypes {
  serviceTitle: string;
  serviceDescription: string;
  serviceId: string;
  servicePageAdvantages: servicePageAdvantagesTypes[];
}
