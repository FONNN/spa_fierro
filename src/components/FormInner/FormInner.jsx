import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './FormInner.css'
import { useForm } from "react-hook-form";

const FormInner = () => {

    const [form, setForm] = useState({})
    // const [errors, setErrors] = useState({})

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
                <Form className='bForm rounded p-4 p-sm-3' onSubmit={handleSubmit(onSubmit)}>
                    <Row className='m-auto'>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicInput">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="John Doe"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'El campo es requerido'
                                        },
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message: 'El formato no es correcto'
                                        }
                                    })}
                                />
                                {errors.name && <span>{errors.name.message}</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="correo@correo.com"
                                    {...register("mail", {
                                        required: {
                                            value: true,
                                            message: 'El campo es requerido'
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'El formato no es correcto'
                                        }
                                    })}
                                />
                                {errors.mail && <span>{errors.mail.message}</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>¿Cómo podemos ayudarte?</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Motivo de consulta"
                                    {...register("msg", {
                                        required: {
                                            value: true,
                                            message: 'El campo es requerido'
                                        },
                                        minLength: {
                                            value: 20,
                                            message: 'El mensaje debe tener al menos 20 caracteres'
                                        }
                                    })}
                                />
                                {errors.msg && <span>{errors.msg.message}</span>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Area de interes</Form.Label>
                                <Form.Select
                                    className='mb-3'
                                    aria-label="Default select example"
                                    {...register("area", {
                                        required: {
                                            value: true,
                                            message: 'Selecciona un área'
                                        }
                                    })}
                                >
                                    <option value="">Selecciona un area</option>
                                    <option value="Educacion">Eduacion</option>
                                    <option value="Empresas">Empresas</option>
                                    <option value="Particular">Particular</option>
                                </Form.Select>
                                {errors.area && <span>{errors.area.message}</span>}
                            </Form.Group>
                            <Button className='mb-3' variant='success' type='submit'>
                                Enviar
                            </Button>
                            {/* <Form.Text className="text-muted">
                                Nunca compartiremos tu informacion con terceros.
                            </Form.Text> */}
                        </Col>
                    </Row>
                </Form>
    )
}

export default FormInner