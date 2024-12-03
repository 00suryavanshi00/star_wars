import { useCallback, useEffect, useState } from "react";
import { SwapiRoot } from "../interfaces/Root";
import apiClient from "../utils/apiclient";
import { Film } from "../interfaces/Film";
import { People } from "../interfaces/People";


export default function useGetResources<T>(endpoint: string){

    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    // doing this so in case it's needed somewhere later and it's not rerendering if not required

    const fetchData = useCallback(
        async() => {
            setIsLoading(true);


            if (!endpoint){
                console.log("No endpoint was provided")
                return 
            }


            try{
                const res = await apiClient.get<T[]>(endpoint);
                console.log(res)
                setData(res)


            }catch(err){
                const errorMessage = err instanceof Error ? err.message : 'Something went wrong bruhhh!!'
                console.log(errorMessage)
                setError(errorMessage)
            }finally{
                setIsLoading(false);
            }
        },[endpoint] // so i'm adding endpoint here cuz i'm thinking of using this as a base class and handle all the get resources api calls from this itself
    )

    useEffect(()=>{
        fetchData()
    },[fetchData])

    return{data, error, isLoading}

}