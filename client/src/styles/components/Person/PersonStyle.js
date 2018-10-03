import styled from "styled-components";
import styledVar from "../../variables";

const Person = styled.div`
  .person-card {
    overflow: hidden;
    width: 100%;
    height: 400px;
  }

  img {
    object-fit: cover;
    width: inherit;
    object-position: 50% top;
    height: 100%;
  }

  .description {
    color: ${styledVar.primaryDark};
    background-color: ${styledVar.primaryLight};
    opacity: 0.8;
    transform: translateY(-50px);
    height: 50px;
    transition: all 0.5s;

    :hover {
      height: 80px;
      transform: translateY(-80px);
    }
  }
`;

export default Person;
