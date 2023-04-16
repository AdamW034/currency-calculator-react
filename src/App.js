import { useState } from "react";
import { currencies } from "./currencies";
import Header1 from "./Header1";
import Container from "./Container";
import Form from "./Form";
import Footer from "./Footer";
import { Clock } from "./Clock";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    const resultElement = amount / rate

    setResult(resultElement.toFixed(2));
  }

  return (
    <Container>
      <Header1 clock={<Clock />} title = "Kalkulator walut" />
      <Form calculateResult={calculateResult} result={result} />
      <Footer author="Adam Wieczorek" />
    </Container>
  );
}

export default App;
