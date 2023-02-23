import {
    StyledErrorPage,
    StyledErrorImage,
    Wrapper,
    ErrorText,
    ErrorDescription,
    Button,
} from "./styled";

const ErrorPage = () => (
    <StyledErrorPage>
        <StyledErrorImage />
        <Wrapper>
            <ErrorText>Ooops! Something went wrong... </ErrorText>
            <ErrorDescription>Please check your network connection and try again</ErrorDescription>
            <Button>Back to home page</Button>
        </Wrapper>
    </StyledErrorPage>
);

export default ErrorPage;