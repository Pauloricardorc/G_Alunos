import React, { useState } from 'react';
import Header from '../Components/Header/Header'
import Api from '../services/api'
import InputMask from 'react-input-mask'
import './style.css'

import { useHistory } from 'react-router-dom';

function Cadastro() {

// -----------------Consts----------------- //
    const [ aluno_nomeCompleto, setaluno_nomeCompleto ] = useState('');
    const [ aluno_dataNasc, setaluno_dataNasc ] = useState('');
    const [ aluno_telefone, setaluno_telefone ] = useState('');
    const [ aluno_email, setaluno_email ] = useState('');
    const [ aluno_linkedin, setaluno_linkedin ] = useState('');
    const [ aluno_github, setaluno_github ] = useState('');
    const [ aluno_computador, setaluno_computador ] = useState('');
    const [ aluno_profissao, setaluno_profissao ] = useState('');
    const [ aluno_cursoExtensao, setaluno_cursoExtensao ] = useState('');
    const [ facul_semestre, setfacul_semestre ] = useState('1');
    const [ facul_periodo, setfacul_periodo ] = useState('1');
    const [ facul_curso, setfacul_curso ] = useState('');
    const [ facul_disciplina, setfacul_disciplina ] = useState('');
// ---------------------------------------- //

    const history = useHistory();

    async function formulario() {

        const data = {
            aluno_nomeCompleto, aluno_dataNasc, aluno_email, aluno_linkedin, aluno_github, aluno_computador, aluno_profissao, aluno_cursoExtensao,
                facul_semestre, facul_periodo, facul_curso, facul_disciplina,
        }

        console.log(data)

        try {
            const res = await Api.post('create', data)
            history.goBack()
        } catch (error) {
            alert('Erro ao realizar cadastro')
        }

    }

    
    return(
        <div className="container_ct">
            <Header/>
            <form onSubmit={formulario} >
                <div className="container cont_cadastro">
                    <div className="ct_cadastro row">
                        <legend className="Legenda_aluno">Info.Aluno</legend>
                        <div className="row nm_dc col-md-12">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Nome Completo</label>
                                <input type="text" value={aluno_nomeCompleto} onChange={e => setaluno_nomeCompleto(e.target.value)} class="form-control" id="inputEmail4" required />
                            </div>
                            <div class="col-md-3">
                                <label for="dt_nascimento" class="form-label">Data de Nascimento</label>
                                <input type="date" value={aluno_dataNasc} onChange={e => setaluno_dataNasc(e.target.value)} class="form-control" id="dt_nascimento" required />
                            </div>
                            <div class="col-md-3">
                                <label for="aluno_telefone" class="form-label">Contato</label>
                                <InputMask mask="(99) 9 9999-9999" type="text" value={aluno_telefone} onChange={e => setaluno_telefone(e.target.value)} class="form-control" id="aluno_telefone" required />
                            </div>
                        </div>

                        <div className="row rede_social">
                            <div class="col-md-4">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" value={aluno_email} onChange={e => setaluno_email(e.target.value)} class="form-control" id="email" required />
                            </div>
                            <div class="col-md-4">
                                <label for="Linkedin" class="form-label">Linkedin</label>
                                <input type="text" value={aluno_linkedin} onChange={e => setaluno_linkedin(e.target.value)} class="form-control" id="Linkedin"/>
                            </div>
                            <div class="col-md-4">
                                <label for="GitHub" class="form-label">GitHub</label>
                                <input type="text" value={aluno_github} onChange={e => setaluno_github(e.target.value)} class="form-control" id="GitHub"/>
                            </div>
                        </div>

                        <div className="row curso__ex">
                            <div class="col-md-4">
                                <label for="curso_extensao" class="form-label">Curso de Extensão</label>
                                <input type="text" value={aluno_cursoExtensao} onChange={e => setaluno_cursoExtensao(e.target.value)} class="form-control" id="curso_extensao"/>
                            </div>
                            <div class="col-md-4">
                                <label for="Profissão" class="form-label">Profissão</label>
                                <input type="text" value={aluno_profissao} onChange={e => setaluno_profissao(e.target.value)} class="form-control" id="Profissão"/>
                            </div>
                        </div>

                        <div className="row ct_user_coment">
                            <div class="col-md-4">
                                <div class="form-floating">
                                    <textarea class="form-control" value={aluno_computador} onChange={e => setaluno_computador(e.target.value)} placeholder="computador" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Computador</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="row cont_fcal">
                        <legend className="Legenda_aluno">Info.Faculdade</legend>
                        <div className="row p-3">
                            <div class="col-md-3">
                                <label for="semestre" class="form-label">Semestre</label>
                                <select class="form-control" value={facul_semestre} onChange={e => setfacul_semestre(e.target.value)} id="semestre" required >
                                    <option selected value="1">2021/1</option>
                                    <option value="2">2021/2</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="periodo" class="form-label">Período</label>
                                <select class="form-control" value={facul_periodo} onChange={e => setfacul_periodo(e.target.value)} id="periodo" required >
                                    <option selected value="1°">1°</option>
                                    <option value="2">2°</option>
                                    <option value="3">3°</option>
                                    <option value="4">4°</option>
                                    <option value="5">5°</option>
                                    <option value="6">6°</option>
                                    <option value="7">7°</option>
                                    <option value="8">8°</option>
                                </select>
                            </div>
                        </div>
                        <div className="row p-3">
                            <div class="col-md-5">
                                <label for="disciplinas" class="form-label">Disciplinas</label>
                                <input type="text" value={facul_disciplina} onChange={e => setfacul_disciplina(e.target.value)} class="form-control" id="disciplinas" required/>
                            </div>
                            <div class="col-md-5">
                                <label for="curso" class="form-label">Curso</label>
                                <input type="text"  value={facul_curso} onChange={e => setfacul_curso(e.target.value)} class="form-control" id="curso" required/>
                            </div>
                        </div>

                        <div className="row cl_button center col-md-3 p-5">
                            <button type="submit" class="btn btn-primary">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cadastro;
