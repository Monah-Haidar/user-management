import {FiEye} from "react-icons/fi";
import {IoEyeOffOutline} from "react-icons/io5";

import React, {useState} from "react";
import {TextInput} from "../../atoms/TextInput";
import axios, {CanceledError} from "axios";
import useAuthStore from "../../../stores/authStore/store.ts";
import {useNavigate} from "react-router-dom";


interface LoginCredentials {
    email: string;
    password: string;
}


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate();

    const login = useAuthStore(state => state.login);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            setErrors('Fill required fields');
            return;
        }

        setIsLoading(true);

        axios
            .post<LoginCredentials>('/api/login', { body: form })
            .then(res => {
                setIsLoading(false);

                const { status, result } = res.data;

                if (status === 200 && result.message === 'success') {
                    const { accessToken, expiresIn } = res.data.result.data;

                    login({accessToken, expiresIn});

                    navigate('/dashboard');
                } else {
                    setErrors(result.message || 'Login failed.');
                }
            })
            .catch(err => {
                setIsLoading(false);
                if (err instanceof CanceledError) return;

                const errorMessage = err.response?.data?.message || 'Something went wrong.';

                setErrors(errorMessage);
            })
    }

    return (
        <section className={`flex justify-center items-center h-screen`}>

            <div className={`p-6 flex flex-col gap-4 bg-white shadow-2xl w-fit rounded-lg`}>
                <h1 className={`text-xl font-bold text-gray-800 text-center`}>Login</h1>
                {errors && (<p className={`p-2 bg-red-200 text-red-800 rounded-sm`}>{errors}</p>)}
                <form onSubmit={handleSubmit} className={`flex flex-col gap-4 w-3xs`}>
                    <div className={`flex flex-col w-full`}>
                        <label htmlFor="email" className={`text-base text-gray-800`}>Email</label>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setForm({
                                ...form,
                                email: event.target.value
                            })}
                        />
                    </div>

                    <div className={'relative flex flex-col w-full'}>
                        <label htmlFor="password" className={`text-base text-gray-800`}>Password</label>
                        <TextInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={form.password}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setForm({
                                ...form,
                                password: event.target.value
                            })}
                        />

                        {showPassword ? (
                                <IoEyeOffOutline
                                    size={18}
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={'absolute top-1/2 right-3 text-gray-500 cursor-pointer'}

                                />
                            ) :
                            (
                                <FiEye
                                    size={18}
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={'absolute top-1/2 right-3 text-gray-500 cursor-pointer'} />
                            )
                        }
                    </div>

                    <div className={`flex justify-center items-center`}>
                        <button
                            type="submit"
                            className={`inline-flex items-center rounded-sm border border-transparent bg-primary px-4 py-2 text-sm font-semibold text-white cursor-pointer transition duration-150 ease-in-out hover:bg-blue-400`}
                        >
                            {isLoading ? 'Submitting...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>

        </section>

    );
};

export default Login;