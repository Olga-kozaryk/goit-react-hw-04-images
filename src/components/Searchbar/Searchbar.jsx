import { Header } from "./Header.styled";
import { FormStyled } from "./FormSearchbar.styled";
import { BiSearchAlt2 } from "react-icons/bi";

export const Searchbar = ({onSubmit, inputValue, onChange }) => {

    return (
      <Header>
        <FormStyled onSubmit = {onSubmit} >
          <button type="submit">
            <BiSearchAlt2 size="20" />
          </button>
          <input
            value={inputValue}
            onChange={onChange}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormStyled>
      </Header>
    ); 
  }