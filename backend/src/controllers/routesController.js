const database = require('../../database');

module.exports = {
    
    async list(request, response) {

        const data = await 
            database('aluno')
                    .join('faculdade', 'aluno.aluno_idAluno', '=', 'faculdade.facul_idFacul')
                    .select('*') 
                            
        return response.json(data)

    },

    async create(request, response) {

        const { aluno_nomeCompleto, aluno_dataNasc, aluno_telefone, aluno_email, aluno_linkedin, aluno_github,
                aluno_computador, aluno_profissao, aluno_cursoExtensao } = request.body;
        
        const { facul_semestre, facul_periodo, facul_curso, facul_disciplina } = request.body;

        await database('aluno').insert({
            aluno_nomeCompleto, aluno_dataNasc, aluno_telefone, aluno_email, aluno_linkedin, aluno_github,
                aluno_computador, aluno_profissao, aluno_cursoExtensao
        });

        await database('faculdade').insert({
            facul_semestre, facul_periodo, facul_curso, facul_disciplina
        });

        return response.status(200).send({ "status": 200})

    },

    async delete(request, response) {

        const { id } = request.params;

        await database('aluno').where('aluno_idAluno', id).delete();

        return response.json("Informações deletadas com sucesso");

    },

    async update(request, response) {
        
        const { id } = request.params;
        const { aluno_nomeCompleto, aluno_dataNasc, aluno_telefone, aluno_email, aluno_linkedin, aluno_github,
            aluno_computador, aluno_profissao, aluno_cursoExtensao } = request.body;
    
        const { facul_semestre, facul_periodo, facul_curso, facul_disciplina } = request.body;

        await database('aluno').where('aluno_idAluno', id).update({
            aluno_nomeCompleto, aluno_dataNasc, aluno_telefone, aluno_email, aluno_linkedin, aluno_github,
                aluno_computador, aluno_profissao, aluno_cursoExtensao
        });

        await database('faculdade').where('facul_idFacul', id).update({
            facul_semestre, facul_periodo, facul_curso, facul_disciplina
        });

        return response.json("Cadastro atualizado com sucesso");

    }

};
