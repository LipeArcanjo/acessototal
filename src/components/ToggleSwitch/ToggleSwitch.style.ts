import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledLabel = styled.label<{ checked: boolean }>`
    margin: 0 auto;
    cursor: pointer;  
    text-indent: -9999px;
    width: 150px;  
    height: 65px;  
    background: ${({ checked }) => (checked ? colors.dark_blue.main : colors.blue.main)};  
    display: block;  
    border-radius: 100px;  
    position: relative;

    &:after {    
        content: "";    
        position: absolute;    
        left: ${({ checked }) => (checked ? "calc(100% - 14px - 50px)" : "14px")};    
        top: 50%;  
        transform: translateY(-50%);
        width: 50px;    
        height: 50px;    
        background: #fff;    
        border-radius: 90px;    
        transition: 0.3s;  
    }
`;
