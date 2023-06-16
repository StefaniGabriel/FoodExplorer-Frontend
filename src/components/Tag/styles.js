import styled from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.span`
    font-size: ${responsive(12)};
    color: ${({ theme }) => theme.COLORS.WHITE900};
    background-color: ${({ theme }) => theme.COLORS.GRAY600};

    padding: ${responsive(16)};
    border-radius: ${responsive(8)};

    display: flex;
    align-items: center;
    gap: ${responsive(8)};

    width: fit-content;
    height: ${responsive(32)};


    svg {
        font-size: ${responsive(12)};

    }

`;