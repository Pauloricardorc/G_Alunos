import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Modal, Button} from 'react-bootstrap'
import api from '../../services/api'
import './style.css'

function Header() {
    const history = useHistory() 
    const [show, setShow] = useState(true);
    const [nomeAluno, setnomeAluno] = useState('Paulo Ricardo Rdrigues Claro')
  
    const handleClose = () => {
        setShow(false)
        history.push('/')
    };

    const [aluno, setAluno] = useState([])

    const lista = () => {
        for(var i = 0; i < aluno.length; i++){
            if(aluno.map(ps => (ps.aluno_nomeCompleto)) != nomeAluno){
                alert('Erro')
            }
        }
    }

    let { id } = useParams()

    useEffect(() => {
        api.get(`/modal/${id}`)
            .then(resp => setAluno(resp.data))
    }, [])

    return(
        <div className="Modal_class">
           <Modal show={show} size="xl" onHide={handleClose}> 
                <Modal.Header>
                    <Modal.Title>Mais Informações</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {aluno.map(aluno => (
                        <div class="row">
                            <div class="col">
                                <ul class="modal_list list-group list-group-flush">
                                    <li class="list-group-item list-group-item-primary">Sobre o Aluno:</li>
                                    <li class="modal_item list-group-item"><strong>Nome Completo - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.aluno_nomeCompleto} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>data de nascimento - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.aluno_dataNasc} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>email - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.aluno_email} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>linkedin - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.aluno_linkedin} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>github - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.aluno_github} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>computador - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.aluno_computador} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>profissao - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.aluno_profissao} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>Curso Extensao - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.aluno_cursoExtensao} />
                                    </li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="modal_list list-group list-group-flush">
                                    <li class="list-group-item list-group-item-primary">Sobre a Faculdade:</li>
                                    <li class="modal_item list-group-item"><strong>semestre - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.facul_semestre} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>periodo - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.facul_periodo} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>curso - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.facul_curso} />
                                    </li>
                                    <li class="modal_item list-group-item"><strong>disciplinas - </strong>
                                        <input type="text" className="modal_input form-control" defaultValue={aluno.facul_disciplina} />
                                    </li>
                                </ul>
                            </div>
                      </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-success" variant="save" onClick={() => {}}>
                        Salvar
                    </Button>
                    <Button className="btn-danger" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>    
        </div>
    )
}

export default Header