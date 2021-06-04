import React from 'react';

export function SignInPage() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-start">
                <div className="lg:w-1/3 md:w-2/3 w-full border-2 border-gray-60 mt-8">
                    <div className="signIn-page">
                        <div className="p-12">
                            <h2 className="text-center text-3xl leading-9 mb-12 text-gray-800">
                                VULT
                            </h2>
                            <form >
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                    className="border-2 border-gray-200 w-full py-3 border-b-0 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="password"
                                    className="appearance-none border-2 border-gray-200 w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                    required
                                />

                                {/** submit button */}
                                <div className="my-4">
                                    <button
                                        type="submit"
                                        className="btn-indigo w-full"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div className="text-center">
                                    <h3>Don't have an account?</h3>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}