import styled from 'styled-components';

const ShowButton = styled.span`
  background-color: #d8ab196c;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #9e801eb7;
  }
`
const ButtonContainer = styled.div`
  margin-top: 1%;
  margin-bottom: -1%;
`

const ViewProductsButton = ({setShowProducts}) => {
    return(
        <ButtonContainer>
            <ShowButton onClick={setShowProducts}>
                View all products
            </ShowButton>
        </ButtonContainer>
    )
}
export default ViewProductsButton