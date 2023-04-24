import { useState, useEffect } from "react";


export const useRates = () => {

    const [ratesData, setRatesData] = useState({
        state: "loading",
    });
    
    useEffect(() => {

        const getRates = async () => {
            try {
                const response = await fetch('https://api.exchangerate.host/latest?base=PLN');

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
        setTimeout(getRates, 1000);
        console.log(getRates());
    }, []);

    return ratesData;
};