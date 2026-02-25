import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState({});

    async function getDetails() {
      try{
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
      getDetails();
    }, [url])

    return{
       data
    };
}