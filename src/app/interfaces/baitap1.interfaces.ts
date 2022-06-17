export interface Childs {
  name: string;
}
export interface Categories {
  name: string;
  childs: Childs[];
}
export interface Mails {
  subject: string;
  content: string;
  email: string;
  category: string;
  child: string;
}
export interface IBaitap1 {
  categories: Categories[];
  mails: Mails[];
}
