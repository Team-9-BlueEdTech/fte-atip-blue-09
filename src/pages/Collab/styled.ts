import styled from "styled-components";

export const MainCollab = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 6rem; 
  gap: 1rem;

  .container {
    position: relative;
    
  }

  #file-upload {
    user-select: none;
    border: 5px solid transparent;
    position: relative;
    top: 0;
    left: 0;
  }
  #file-input {
  }
  #label-upload {
    
  }
`;

export const DivDashboard = styled.div`
  height: 100%;
  background-color: #f3f3f3;
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid green;
  position: relative;

  overflow: auto;
  overflow-x: hidden;

`;
