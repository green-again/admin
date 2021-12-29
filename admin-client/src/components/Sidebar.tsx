import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../themes/flex';

const Sidebar = () => {

    return(
        <SidebarContainer>
        <MenuWrapper>
            <MenuItem>Home</MenuItem>
            <MenuItem>Article</MenuItem>
            <MenuItem>Setting</MenuItem>
            <MenuItem>Login</MenuItem>
        </MenuWrapper>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.nav`
    width: 20%;
    height: 100vh;
    border-top: solid 1px;
    border-right: solid 1px;
    color: white;
    font-size: 1.5rem;
    background-color: #495057;
    ${FlexColumn};
`;

const MenuWrapper = styled.ul`
    margin-top: 7rem;
`;

const MenuItem = styled.li`
    cursor: pointer;
    margin-top: 2.5rem;
    margin-right: 2.5rem;
    :hover{
            color: #adb5bd;
        }
`;

export default Sidebar;
