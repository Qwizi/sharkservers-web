'use client';
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

const useErrorParams = () => {
    const [error, setError] = useState("")
    const searchParams = useSearchParams();

    useEffect(() => {
        const errorQuery = searchParams.get("error")
        if (!errorQuery) return
        if (errorQuery === "CredentialsSignin") {
            setError("Niepoprawne dane logowania")
        } else if (errorQuery === "CredentialsCallbackError") {
            setError(errorQuery)
        }
    }, [searchParams])

    return error
}

export default useErrorParams;