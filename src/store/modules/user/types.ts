//aqui serão criadas interfaces
export interface IUser {
  id: number;
  name: string;
  email: string;
  photo: {
    url: string
  }
}

export interface IUsers {
  users: IUser[] //determino que aqui estou criando uma array com todos os 'IUser'
}