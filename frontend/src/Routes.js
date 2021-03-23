import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home'
import Cadastro from './Pages/Cadastro'
import Modal from './Pages/Components/Modal'
import ModalConfirm from './Pages/Components/ModalConfirm'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Modal/:id" component={Modal} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/ModalConfirm" component={ModalConfirm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes