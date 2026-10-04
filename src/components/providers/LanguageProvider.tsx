"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type language = "en" | "ar"
type languageContextType = {
    language: language
    setLanguage: (language: language) => void
    isArabic: boolean
}

const languageContext = createContext<languageContextType | undefined>(undefined)

export function LanguageProvider({children}: {children: ReactNode}){
    const [language, setLanguageState] = useState<language>("en")
    useEffect(() => {
        const storedLang = localStorage.getItem("lang")
        if(storedLang === "en" || storedLang === "ar"){
            setLanguageState(storedLang)
        }
    }, [])

    useEffect(() => {
        const root = document.documentElement;
        root.lang = language
        root.dir = language === "ar" ? "rtl" : "ltr"

        localStorage.setItem("lang", language)
    }, [language])
    
    const setLanguage = (nextLanguage: language) => {
        setLanguageState(nextLanguage)
    }

    return (
        <languageContext.Provider value={{language, setLanguage, isArabic: language === "ar"}}>
            {children}
        </languageContext.Provider>
    )
}

export function useLanguage(){
    const context = useContext(languageContext)
    if(!context){
        throw new Error("USe language must be within the lagnuage privder")
    }

    return context
}