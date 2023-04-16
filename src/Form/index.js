import { useState } from "react";
import { currencies } from "../currencies";
import { 
    Fieldset, 
    Label, 
    Select, 
    Button, 
    Paragraph, 
    ResultField, 
    Result,
    FormBody 
} from "./styled";

const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState(currencies[0].short)
    
    const onFormSubmit = (event) => {
        event.preventDefault()
        calculateResult(currency, amount)
    };
    

    return (
        <FormBody 
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
                            {currencies.map(currency => (
                                <option 
                                key={currency.short}
                                value={currency.short}>
                                    {currency.display}
                                </option>
                            ))}
                        </Select>
                    </Label>
                </p>
                <p>
                    <Label>
                        Ilość w PLN: <Select as="input"
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
        </FormBody>
    )

};

export default Form;