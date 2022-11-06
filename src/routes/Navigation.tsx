/* IMPORTANTE 
    Para usar este archivo para router se deberá instalar la versión 6 de react-router-dom
    `yarn add react-router-dom@6`

*/ //! Importante

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import {
    DynamicForm,
    FormikBasicPage, 
    RegisterPage, 
    FormikYupPage, 
    FormikComponents, 
    FormikAbstraction,
    RegisterFormikPage
} from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstractation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="dynamic-form" element={ <DynamicForm /> } />
                    <Route path="formik-register" element={ <RegisterFormikPage /> } />
                    <Route path="formik-abstractation" element={ <FormikAbstraction /> } />
                    <Route path="formik-components" element={ <FormikComponents /> } />
                    <Route path="formik-yup" element={ <FormikYupPage /> } />
                    <Route path="formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="register" element={ <RegisterPage /> } />

                    <Route path="/*" element={ <Navigate to="/register" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    </>
  )
}
