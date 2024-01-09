import { Header } from "./Header.styled";
import { FormStyled } from "./FormSearchbar.styled";
import { BiSearchAlt2 } from "react-icons/bi";
//import toast from "react-hot-toast";
import { useState } from "react";

export const Searchbar = ({onSubmit}) => {
const [search, setSearch] = useState('');
const onChangeInput = e => setSearch(e.target.search);
const handleSubmit =  e => {
    e.preventDefault();
    const value = e.target.elements[1].search.trim();
    if (value) onSubmit(value);
    setSearch('')
};
    return (
      <Header>
        <FormStyled onSubmit = {handleSubmit} >
          <button type="submit">
            <BiSearchAlt2 size="20" />
          </button>
          <input
            value={search}
            onChange={onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormStyled>
      </Header>
    );
  }