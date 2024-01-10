type Usuario = {
  nome: string
  idade: number
  email: string
}

// const cadastrarUsuario = (usuario: Required<Usuario>) => {
//   return usuario
// }

// const cadastrarUsuario = (usuario: Partial<Usuario>) => {
//   return usuario
// }

// cadastrarUsuario({
//   nome: 'Jamile',
//   idade: 32,
//   email: 'jamile@email.com',
// })

// const jamile: Readonly<Usuario> = {
//   nome: 'Jamile',
//   email: 'jamile@email.com',
// }

type Carro = {
  ano: number
  cor: string
}

type Propriedades = 'gol' | 'palio' | 'fusca'

const carros: Record<Propriedades, Carro> = {
  gol: {
    ano: 2021,
    cor: 'branco',
  },
  palio: {
    ano: 2021,
    cor: 'branco',
  },
  fusca: {
    ano: 2021,
    cor: 'branco',
  },
}

type Pessoa = {
  nome: string
  idade: number
  email: string
  endereco: string
}

type NovoUsuario = Pick<Pessoa, 'nome' | 'idade' | 'endereco'>
type NovoUsuario2 = Omit<Pessoa, 'email'>

const dados: NovoUsuario = {
  nome: 'jamile',
  idade: 32,
  endereco: 'av',
}

const dados1: NovoUsuario2 = {
  nome: 'akira',
  idade: 1,
  endereco: 'Alda',
}

type Ex1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
type EX2 = Extract<'a' | 'b' | 'c', 'a'>
