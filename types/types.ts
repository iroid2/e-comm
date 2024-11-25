export type CategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
};
export type UserProps = {
  // name: string;
  firstName: string;
  lastName: string;
  phone: string;
  image?: string;
  email: string;
  password: string;
};
export type LoginProps = {
  email: string;
  password: string;
};

export type Contact = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  school: string;
  country: string;
  schoolPage: string;
  students: number;
  role: string;
  media: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type ClassCreateProps = {
  title: string;
};

export type StreamCreateProps = {
  title: string;
  classId: string;
};

export type Class = {
  id: string;
  title: string;
  slug: string;
  streams: Stream[];
  createdAt: string;
  updatedAt: string;
};

export type Stream = {
  id: string;
  title: string;
  slug: string;
  classId: string;
  class: Class;
  createdAt: Date;
  updatedAt: Date;
};

 
