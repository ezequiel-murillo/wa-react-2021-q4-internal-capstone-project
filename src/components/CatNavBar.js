import React, { useState } from 'react'
import styled from 'styled-components'

const CatButtonStyled = styled.a`
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 20px;
  color: #313131;
  display: block;
  transition: 0.3s;
  cursor: pointer;
  background: ${props => props.isSelected ? "#d8ab196c" : "none"};
  &:hover {
    color: #919191;
  }
`

const CatButton = ({category, addFilter, remFilter}) => {
  const [isSelected, setIsSelected] = useState(false)
  const catName = category.data.name
  const catId = category.id
  const handleClick = () => {
    if (!isSelected) {
      addFilter(catId)
    } else {
      remFilter(catId)
    }
    setIsSelected(!isSelected)
  }
  return (
    <CatButtonStyled isSelected={isSelected} onClick={handleClick}>{catName}</CatButtonStyled>
  );
}

const MenuContainer = styled.div`
  padding-top: 30%;
  margin-left: 15%;
  text-align: center;
  height: 100%;
`

const CatNavBar = ({categories, addFilter, remFilter}) => {
  const listItems = categories.map((category) =>
    <CatButton 
      key={category.id} 
      category={category} 
      addFilter={addFilter} 
      remFilter={remFilter}
    />
  );
  return (
    <MenuContainer>
      {listItems}
    </MenuContainer>
  );
}

export default CatNavBar;