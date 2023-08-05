import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import './sidebar.css'
import React, { useState } from 'react';

const Sidebar = () => {
    const [drawerState, setDrawerState] = useState({ left: false })

    const toggleDrawer = (anchor, open) => {
        setDrawerState({ ...drawerState, [anchor]: open })
    }

    const list = (anchor) => (
        <div style={{ width: '250px' }} role='presentation'>
            <List>
                <ListItem>
                    <ListItemText style={{ fontSize: '48px', marginLeft: '5px' }}>
                        <span style={{ color: "#4285F4", fontWeight: "700", fontSize: '22px', fontFamily: "'Product Sans',Arial, sans-serif" }}>G</span>
                        <span style={{ color: "#DB4437", fontWeight: "500", fontSize: '22px', fontFamily: "'Product Sans',Arial, sans-serif" }}>o</span>
                        <span style={{ color: "#F4B400", fontWeight: "500", fontSize: '22px', fontFamily: "'Product Sans',Arial, sans-serif" }}>o</span>
                        <span style={{ color: "#4285F4", fontWeight: "500", fontSize: '22px', fontFamily: "'Product Sans',Arial, sans-serif" }}>g</span>
                        <span style={{ color: "#0F9D58", fontWeight: "500", fontSize: '22px', fontFamily: "'Product Sans',Arial, sans-serif" }}>l</span>
                        <span style={{ color: "#DB4437", fontWeight: "500", fontSize: '22px', marginRight: '10px', fontFamily: "'Product Sans',Arial, sans-serif" }}>e</span>
                        <span style={{ color: "#5f6368", fontWeight: "500", fontSize: '22px', fontFamily: "'Product Sans',Arial, sans-serif" }}>Docs</span>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    )


    return (
        <div>
            <React.Fragment>
                <IconButton onClick={() => toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor={'left'}
                    open={drawerState['left']}
                    onClose={() => toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    )
}

export default Sidebar