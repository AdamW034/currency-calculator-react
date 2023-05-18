import { useState, useEffect } from "react";
import { apiRates } from "./api";


export const useRates = () => {

    const [ratesData, setRatesData] = useState({
        state: "loading",
    });
    
    useEffect(() => {

        const getRates = async () => {
            try {
                const response = await fetch(apiRates);

                if (!response.ok){
                    throw new Error(response.statusText);
                }

                const {rates, date} = await response.json();
                
                setRatesData({
                    state: "success",
                    rates,
                    date,
                });
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };
        setTimeout(getRates, 3000);
    }, []);

    return ratesData;
};