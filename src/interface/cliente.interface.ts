export interface Cliente {
    id: string;
    cpf: string;
    dataNascimento: Date;
    email: string;
    nome: string;
    sexo: string;
    telefone: string;
    observacao?: string;
}