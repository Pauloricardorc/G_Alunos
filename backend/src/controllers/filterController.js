const database = require('../../database');

module.exports = {
    
    async modal(request, response) {

        const { id } = request.params

        const data = await database('aluno')
                            .join('faculdade', 'aluno.aluno_idAluno', '=', 'faculdade.facul_idFacul')
                                .where('aluno_idAluno', id).select('*');

        return response.json(data);

    },

    async filter(request, response) {
        
        const {periodo} = request.query
        const {aluno_nomeCompleto} = request.query

        if(periodo == '' && aluno_nomeCompleto == ''){
            const data = await database('aluno')
                                .join('faculdade', 'aluno.aluno_idAluno', '=', 'faculdade.facul_idFacul')
                                .select('*');
            return response.json(data)
        }

        const data = await database('aluno')
                            .join('faculdade', 'aluno.aluno_idAluno', '=', 'faculdade.facul_idFacul')
                            .where('facul_periodo', periodo)
                            .andWhere('aluno_nomeCompleto', aluno_nomeCompleto)
                            .orWhere('facul_periodo', periodo)
                            .orWhere('aluno_nomeCompleto', aluno_nomeCompleto)
                            .select('*');

        return response.json(data)
    }

};
