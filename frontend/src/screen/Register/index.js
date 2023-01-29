import React, {useEffect} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {userRegister} from "../../redux/user/login";
import {NavLink} from "react-router-dom";

const Register = () => {

    const dispatch = useDispatch();

    const {message} = useSelector(state => state.login)

    const formSchema = Yup.object().shape({
        user: Yup.string()
            .required("Ismingizni kirirting"),
        phone: Yup.string()
            .required("Telefon raqam kirirting")
            .length(9, "Telefon raqam 9 xonadan iborat bo'lishi kerak"),
        password: Yup.string()
            .required("Parolingizni kiriting")
            .min(8, "Minimal 8 belgidan iborat bo'lish kerak"),
        cpassword: Yup.string()
            .required("Qayta parolingizni kiriting")
            .min(8, "Minimal 8 belgidan iborat bo'lish kerak")
            .oneOf([Yup.ref('password')], "Parollar bir xil emas"),
    })
    const {
        register,
        handleSubmit,
        formState: {errors},
        setError,
        setValue,
    } = useForm({mode: 'onTouched', resolver: yupResolver(formSchema)})

    useEffect(() => {
        if (message.length) {
            for (const msg of message) {
                setError(msg.param, {type: "value", message: msg.msg})
            }
        }
    }, [message])

    const submit = (data) => {
        dispatch(userRegister(data))
    }


    return (
        <div className={"d-flex justify-content-center align-items-center"}>
            <div className={"h-50 p-5  my-5 border rounded-5"}>
                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ism</Form.Label>
                        <Form.Control {...register("user")} type="text" placeholder=""/>
                        <Form.Text className={"text-danger"}>{errors?.user?.message}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefon raqami</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="basic-addon1">+998 </InputGroup.Text>
                            <Form.Control {...register("phone")} type="number" placeholder=""/>
                        </InputGroup>
                        <Form.Text className={"text-danger"}>{errors?.phone?.message}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Parol</Form.Label>
                        <Form.Control  {...register("password")} type="password" placeholder="Password"/>
                        <Form.Text className={"text-danger"}>{errors?.password?.message}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Qayta parol</Form.Label>
                        <Form.Control  {...register("cpassword")} type="password" placeholder="Password"/>
                        <Form.Text className={"text-danger"}>{errors?.cpassword?.message}</Form.Text>
                    </Form.Group>
                    <NavLink to={"/login"}>
                        <Form.Text> Loginga o'tish </Form.Text>
                    </NavLink>
                    <div className={"text-center my-2"}>
                        <Button variant="primary" type="submit">
                            Kirish
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;
