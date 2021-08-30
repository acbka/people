export type userType = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      number: number;
      name: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: Date;
    age: number;
  };
  registered: {
    date: Date;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
