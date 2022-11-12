import React, { useState, useRef } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './FormInner.css'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
// init('iBEnkAwErvEem2Z79')

const FormInner = () => {

    // const [form, setForm] = useState({})
    // const [errors, setErrors] = useState({})

    // form submit
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const form = useRef();
    const onSubmit = (data, event) => {
        console.log('data', data)
        console.log('event', event)
        emailjs.sendForm('service_895qy9i', 'template_oj6m5mq', form.current, 'S5a2w9eSK4Udyb4T0')
            .then((result) => {
                console.log(result.text);
                alert('Correo enviado')
                event.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }

    const msg = watch('msg') || '';
    const msgCharsLeft = 400 - msg.length;

    return (
        <Form ref={form} className='bForm rounded p-2 p-sm-4' id='contact-form' onSubmit={handleSubmit(onSubmit)}>
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
                                },
                                maxLength: {
                                    value: 400
                                }
                            })}
                        />
                        <p className='msg-chars-left text-muted'>{msgCharsLeft}</p>
                        {errors.msg && <span>{errors.msg.message}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Área de interés</Form.Label>
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
                            <option value="">Selecciona un área</option>
                            <option value="Compra">Compra</option>
                            <option value="Arriendo">Arriendo</option>
                            <option value="Inversión">Inversión</option>
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