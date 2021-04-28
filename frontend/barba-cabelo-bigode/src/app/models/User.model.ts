export default class User {
  nome ?: string;
  email ?: string;
  senha ?: string;

  fromUser(user: User) {
    this.nome = user.nome;
    this.email = user.email;
    this.senha = user.senha;
  }
}
