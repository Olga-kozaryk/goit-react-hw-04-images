import { BtnStyled } from "./BtnLoader.styled";

export const Button = ({ clickLoad }) => {
    return (
      <BtnStyled onClick={clickLoad} type="button">
        Load more
      </BtnStyled>
    );
  };