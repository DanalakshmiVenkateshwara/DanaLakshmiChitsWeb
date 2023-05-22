import React from 'react'
import './login-page.scss';
import LoginForm from './login-form'
import FormTitle from './form-title'

const AlternativeLoginPage = () => {
    return (<div className={"sceneContainer"}>
                <div className={`d-flex align-items-center justify-content-center formContainer`} >
                    <div className={"formPanel"}>
                        <div className={'d-flex justify-content-center'}>                      
                        </div>
                            <div className={'d-flex justify-content-center'}>
                                <FormTitle />
                            </div>
                            <LoginForm />
                    </div>
                </div>
                <div className={`d-flex justify-content-end align-items-center loginFooter`}>
                </div>
            </div>)
} 

export default AlternativeLoginPage;