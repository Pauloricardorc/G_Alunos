import React, {useState, useEffect} from 'react'
import Header from '../Components/Header/Header'
import api from '../services/api'
import Modal from '../Components/Modal'
import { Link, useHistory } from 'react-router-dom'

import './style.css'
import '../Components/js/exemple.js'
import { useLoading } from '@agney/react-loading'

function Home () {

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
      });

    const history = useHistory()

    const [Aluno, setAluno] = useState([])

    const Modal = () => {
        <Modal />
    }

    let [ periodo, setPeriodo ] = useState('');
    let [ aluno_nomeCompleto, setaluno_nomeCompleto ] = useState('');

    const Filtro = () => {
        api.get(`/filter?periodo=${periodo}&aluno_nomeCompleto=${aluno_nomeCompleto}`).then(resp => setAluno(resp.data))
    }

    const Atulizar = () => {
        api.get('/list').then(resp => setAluno(resp.data))
    }

    const Delete = (id_aluno) => {
        api.delete(`/delete/${id_aluno}`)
    }

    useEffect(() => {
        api.get('/list').then(resp => setAluno(resp.data))
    }, [])

    return(
        <div className="container_gl">
            <Header />
            <div className="container container_home"   {...containerProps}>
                <div className="container_tables table-responsive">
                    <div className="container f_g row">
                        <div className="container_filter col-6">
                            <div className="input-group caixa-in">
                                <div className="ct_l">
                                    <select className="form-control periodo" value={periodo} onChange={e => setPeriodo(e.target.value)} placeholder="Período" type="text">
                                        <option selected value=""></option>
                                        <option value="1">1°</option>
                                        <option value="2">2°</option>
                                        <option value="3">3°</option>
                                        <option value="4">4°</option>
                                        <option value="5">5°</option>
                                        <option value="6">6°</option>
                                        <option value="7">7°</option>
                                        <option value="8">8°</option>
                                    </select>
                                </div>

                                <input className="form-control nome" value={aluno_nomeCompleto} onChange={e => setaluno_nomeCompleto(e.target.value)} placeholder="Nome do Aluno" type="text"/>
                            
                                <button type="button" onClick={Filtro} class="btn btn-primary"><i class="bi bi-search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></i></button>
                                <button type="button" onClick={Atulizar} class="btn btn-success"><i class="bi bi-search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg></i></button>
                            </div>
                        </div>
                        <div className="container_cadastro col-auto">
                            <Link to='/cadastro' class="btn btn-light">Novo Cadastro</Link>
                        </div>
                    </div>
                    
                    <table className="table table-bordered table_my">
                    {(Aluno.length == 0) && 
                        <div className="container_loading">
                            <div className="loading">{indicatorEl}</div>
                        </div>
                    }
                        <thead>
                            <tr>
                                <td><a href="">Semestre</a></td>
                                <td><a href="">Período</a></td>
                                <td><a href="">Aluno</a></td>
                                <td><a href="">Email</a></td>
                                <td><a href=""></a></td>
                            </tr>
                        </thead>
                        <tbody>
                            {Aluno.map(aluno => (
                                <tr key={aluno.aluno_idAluno}>
                                    <th>{aluno.facul_semestre}</th>
                                    <th className="dub-id">{aluno.facul_periodo}</th>
                                    <th>{aluno.aluno_nomeCompleto}</th>
                                    <th>{aluno.aluno_email}</th>
                                    <th>
                                        <Link className="button_al btn btn-danger" onClick={() => Delete(aluno.aluno_idAluno)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </Link>

                                        <Link className="button_al btn btn-info" to={{pathname: `/modal/${aluno.aluno_idAluno}`}} onClick={Modal}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                            </svg>
                                        </Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;
