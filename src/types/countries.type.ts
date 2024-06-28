export type Country = {
  continents: string[];
  capital: string[];
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: string;
    };
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};

export type SelectedCountry = Country & {
  selected: boolean;
};
