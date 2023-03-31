import tw, { styled } from "twin.macro";

const Container = (props) => {
  return (
    <StyledContainer className={props.className}>
      {props.children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div(tw`max-w-7xl mx-auto px-6 md:px-8 lg:px-8`);

export default Container;
