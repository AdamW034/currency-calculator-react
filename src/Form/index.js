import { useState } from "react";
import {
    Fieldset,
    Label,
    Select,
    Button,
    Paragraph,
    ResultField,
    Result,
    FormBody,
    Loading,
    Error
} from "./styled";
import { useRates } from "./useRates";

const Form = () => {
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("USD")
    const [result, setResult] = useState();
    const ratesData = useRates()

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        const resultElement = amount * rate

        setResult(resultElement.toFixed(2));
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        calculateResult(currency, amount)
    };


    return (
        <>
            {ratesData.state === "loading" ? (
                <Loading>
                    Ładowanie kursów walut
                </Loading>
            )
                :
                ratesData.state === "error" ? (
                    <Error>
                        Błąd...<br /> Wystąpił nieoczekiwany problem. Spróbuj ponownie później.
                    </Error>
                )
                    : (
                        < FormBody
                            method="get"
                            onSubmit={onFormSubmit}
                        >
                            <Fieldset>
                                <legend>Dane</legend>
                                <p>
                                    <Label>
                                        Żądana waluta:
                                        <Select
                                            name="currency"
                                            value={currency}
                                            onChange={({ target }) => setCurrency(target.value)}
                                        >
                                            {Object.keys(ratesData.rates).map((currency => (
                                                <option
                                                    key={currency}
                                                    value={currency}>
                                                    {currency}
                                                </option>
                                            )))}
                                        </Select>
                                    </Label>
                                </p>
                                <p>
                                    <Label>
                                        Ilość w PLN: <Select
                                            as="input"
                                            name="PlnAmount"
                                            required
                                            type="number"
                                            min="1"
                                            placeholder="Podaj ilość"
                                            value={amount}
                                            onChange={({ target }) => setAmount(target.value)}
                                        />
                                    </Label>
                                </p>
                            </Fieldset>
                            <Fieldset>
                                <legend>Kalkulacja</legend>
                                <Paragraph>
                                    <Button>
                                        Przelicz
                                    </Button>
                                </Paragraph>

                                <ResultField>
                                    Ilość w żądanej walucie:
                                    <Result>{result}</Result>
                                </ResultField>
                            </Fieldset>
                        </FormBody >
                    )
            }

        </>

    )
};

export default Form;