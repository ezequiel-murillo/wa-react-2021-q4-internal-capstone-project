import styled from "styled-components"

const PagNav = styled.a`
color: black;
float: left;
padding: 8px 16px;
text-decoration: none;
transition: background-color .3s;
border: 1px solid #ddd;
` 

const Pagination = () => {
    return (
        <div>
            <PagNav>&laquo;</PagNav>
            <PagNav>1</PagNav>
            <PagNav>2</PagNav>
            <PagNav>&raquo;</PagNav>
        </div>
    );
}

export default Pagination
