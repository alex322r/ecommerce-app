'use client'
import { FormEvent, useRef, useState } from "react";
import ModalCloseButton from "./ModalCloseButton";
import { HideIcon, ShowIcon } from "./ShowIcons";
import style from "./LoginModal.module.css"
import validateEmail from "../utils/validateEmail";

export default function LoginModal({ closeLoginModal }: { closeLoginModal: () => void }) {
    const [showPassword, setShowPassword] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)
    const emailErrorRef = useRef<HTMLDivElement>(null)
    const passwordErrorRef = useRef<HTMLDivElement>(null)

    const tooglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value
        let errorMessage;
        if (email === '') {
            e.target.classList.add(style.invalidPassword)
            errorMessage = 'Ingresa un correo electronico'
        } else if (!validateEmail(email)) {
            errorMessage = 'Ingresa un correo electrónico válido (nombre@ejemplo.com)'
        } else {
            errorMessage = ''
            e.target.classList.remove(style.invalidPassword)
        }

        if (emailErrorRef.current !== null) {
            emailErrorRef.current.innerText = errorMessage
        }
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value
        let errorMessage;
        if (password === '') {
            e.target.classList.add(style.invalidPassword)
            errorMessage = 'Ingresa una contraseña'
        } else {
            e.target.classList.remove(style.invalidPassword)
            errorMessage = ''
        }

        if (passwordErrorRef.current !== null) {
            passwordErrorRef.current.innerText = errorMessage
        }

    }

    const validateForm = (e: any) => {
        const inputForm = e.target as HTMLFormElement
        const [$email, $password] = inputForm.form
        const email = $email.value
        const password = $password.value
        setIsFormValid(validateEmail(email) && password !== '')
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    return (
        <div onClick={handleClick} className="relative w-[500px] pt-9 pb-8 px-12  bg-slate-100 rounded-md">
            <ModalCloseButton closeLoginModal={closeLoginModal} className="absolute p-[4px] h-7 text-[rgb(156,163,175)] right-[15px] top-[15px]" />
            <div className="flex items-center gap-[14px]">
                <div className="h-[61px] w-[50px] min-w-[50px] bg-orange-400 "></div>
                <div>
                    <h3 className=" font-normal text-[#333] text-2xl ">¡Qué bueno tenerte de vuelta!</h3>
                </div>
            </div>
            <div>
                <div>
                    <div className="text-[14px] text-justify leading-[14px] mt-2 py-3 px-4 bg-[#f3f9e5] rounded text-[#333]">
                        <div>Si no tienes cuenta en ecommerce.com, ingresa con tu correo y contraseña del sitio web de <b>Shop</b> o de las apps de <b>HomeCenter</b> o <b>Rider</b>.</div>
                    </div>
                </div>
            </div>
            <form onInput={validateForm} className="text-[#333] pt-[15px]" autoComplete="off">
                <div className="flex flex-col justify-start">
                    <label className="text-[#333] text-sm mb-2" htmlFor="login-form-email-input">Correo Electronico</label>
                    <div>
                        <input onChange={handleEmailChange} placeholder="Ingresa tu Correo electronico" className=" invalid:border-[#d60303]  w-full text-[14px] pb-[5px] pt-[14px] border-solid border-[#767676] border-0 border-b outline-none" id="login-form-email-input" type="email" /></div>
                    <div ref={emailErrorRef} className="text-[#d60303] text-[12px] h-[24px] pt-[4px]"></div>
                </div>
                <div className="flex flex-col justify-start">
                    <label className="text-[#333] text-sm mb-2 " htmlFor="login-form-contraseña-input">Contraseña</label>
                    <div className="relative">
                        <input onChange={handlePasswordChange} type={showPassword ? 'text' : 'password'} placeholder="Ingresa tu Contraseña" className="invalid:border-[#d60303] w-full text-[14px] pb-[5px] pt-[14px] border-solid border-[#767676] border-0 border-b outline-none" id="login-form-contraseña-input" />
                        <div className=" flex absolute bottom-0 right-0 top-0 ">
                            <button onClick={tooglePasswordVisibility} className=" flex items-center h-full px-[8px] text-[rgb(209,213,219)]" >
                                {showPassword ? <HideIcon /> : <ShowIcon />}
                            </button>
                        </div>
                    </div>
                    <div ref={passwordErrorRef} className="text-[#d60303] text-[12px] h-[24px] pt-[4px]" ></div>

                </div>
                <p className="text-[#767676] leading-[17px] text-[14px] mt-2">
                    <a className=" border-b-[1px] border-solid border-[#495867]" href="#">Restablecer contraseña</a></p>
                <div className="pt-6 mt-2">
                    <button disabled={!isFormValid} className={`${isFormValid ? 'bg-orange-500 text-white' : 'bg-[#e1e1e1] text-[#636363]'} w-full rounded-[23px] leading-[23px] h-[45px]`}>
                        <span className="text-[19px]">Ingresar</span>
                    </button>
                    <div data-char="o" className="flex h-0 items-center justify-center text-[14px] mt-[21px] after:content-[attr(data-char)] text-center "></div>
                    <p className="text-[#767676] leading-4 text-[14px] text-center mt-[20px]">Aun no tienes cuenta?
                        <a className="border-[#495867] border-solid border-b" href="#"> Registrate</a>
                    </p>
                </div>
                <div className="mt-2"></div>
            </form>
        </div>
    )
}