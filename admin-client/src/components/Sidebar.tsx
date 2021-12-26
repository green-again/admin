import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../themes/flex';

const Sidebar = () => {
const [closeList, setCloseList] = useState<boolean>(false);

const foldlist = () => {
   setCloseList(!closeList)
};

    return(
        <SidebarContainer>
        <MenuWrapper>
            <MenuItem>Home</MenuItem>
            <MenuItem onClick={foldlist}>
            Content
            </MenuItem>
            {!closeList ? (
                <>
                <ItemList>ArticleCategory</ItemList>
                <ItemList>ArticleCreate</ItemList>
                <ItemList>ArticleDetail</ItemList>
                </>
            ): null}
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

const ItemList = styled.div`
    margin-top: 2rem;
    padding-left: 1rem;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    :hover{
        color: #adb5bd;
    }
    details{
        transition: 0.8s;
        outline: none;
    }
`;



export default Sidebar;
