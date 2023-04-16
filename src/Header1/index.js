import { Header, AppHeader } from "./styled";

const Header1 = ({clock, title}) => (
    <Header>
        <AppHeader>{title}</AppHeader>
        {clock}
    </Header>
);

export default Header1;