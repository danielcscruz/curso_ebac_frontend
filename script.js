const alunos = [
    { nome: "Aluno 1", nota: 8 },
    { nome: "Aluno 2", nota: 10 },
    { nome: "Aluno 3", nota: 5 },
    { nome: "Aluno 4", nota: 1 },
    { nome: "Aluno 5", nota: 8 }
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);