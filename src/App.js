import Header1 from "./Header1";
import Container from "./Container";
import Form from "./Form";
import Footer from "./Footer";
import { Clock } from "./Clock";

function App() {

  return (
    <Container>
      <Header1 clock={<Clock />} title = "Kalkulator walut" />
      <Form/>
      <Footer author="Adam Wieczorek" />
    </Container>
  );
}

export default App;
