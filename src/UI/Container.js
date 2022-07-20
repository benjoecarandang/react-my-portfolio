import tw, { styled } from "twin.macro"

const Container = props => {
    return (
        <StyledContainer className={props.className}>{props.children}</StyledContainer>
    )
}

const StyledContainer = styled.div(
    tw`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`
)

export default Container