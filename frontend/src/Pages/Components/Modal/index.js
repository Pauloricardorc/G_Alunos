import React, {useEffect, useState} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { Modal, Col, ListGroup, Row, Button} from 'react-bootstrap'
import api from '../../services/api'

function Header() {
    const history = useHistory() 
    const [show, setShow] = useState(true);
  
    const handleClose = () => {
        setShow(false)
        history.push('/')
    };

    const [aluno, setAluno] = useState([])

    let { id } = useParams()

    useEffect(() => {
        api.get(`/modal/${id}`)
            .then(resp => setAluno(resp.data))
    }, [])

    console.log(aluno)


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
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item list-group-item-primary">Sobre o Aluno:</li>
                                    <li class="list-group-item"><strong>Nome Completo - </strong>{aluno.aluno_nomeCompleto}</li>
                                    <li class="list-group-item"><strong>data de nascimento - </strong>{aluno.aluno_dataNasc}</li>
                                    <li class="list-group-item"><strong>email - </strong>{aluno.aluno_email}</li>
                                    <li class="list-group-item"><strong>linkedin - </strong>{aluno.aluno_linkedin}</li>
                                    <li class="list-group-item"><strong>github - </strong>{aluno.aluno_github}</li>
                                    <li class="list-group-item"><strong>computador - </strong>{aluno.aluno_computador}</li>
                                    <li class="list-group-item"><strong>profissao - </strong>{aluno.aluno_profissao}</li>
                                    <li class="list-group-item"><strong>Curso Extensao - </strong>{aluno.aluno_cursoExtensao}</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item list-group-item-primary">Sobre a Faculdade:</li>
                                    <li class="list-group-item"><strong>semestre - </strong>{aluno.facul_semestre}</li>
                                    <li class="list-group-item"><strong>periodo - </strong>{aluno.facul_periodo}</li>
                                    <li class="list-group-item"><strong>curso - </strong>{aluno.facul_curso}</li>
                                    <li class="list-group-item"><strong>disciplinas - </strong>{aluno.facul_disciplina}</li>
                                </ul>
                            </div>
                      </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-danger" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>    
        </div>
    )
}

export default Header