import { Divider, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import './sidebar.css'
import React, { useState } from 'react';
import docImage from '../../images/docs.png'
import sheetsImage from '../../images/sheets.png'
import slidesImage from '../../images/slides.png'
import formsImage from '../../images/forms.png'
import driveImage from '../../images/google-drive.png'
import { FiSettings } from 'react-icons/fi'
import { BsQuestionCircle } from 'react-icons/bs'

const Sidebar = () => {
    const [drawerState, setDrawerState] = useState({ left: false })

    const toggleDrawer = (anchor, open) => {
        setDrawerState({ ...drawerState, [anchor]: open })
    }

    const list = (anchor) => (
        <div style={{ width: '250px' }} role='presentation'>
            <Divider />
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
            <Divider />
            <List className='list_style'>
                <ListItem className='list_item'>
                    <img src={docImage} alt="Docs Icon" className='icon_style' />
                    <div className="icon_names">Docs</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={sheetsImage} alt="Docs Icon" className='icon_style' />
                    <div className="icon_names">Sheets</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={slidesImage} alt="Docs Icon" className='icon_style' />
                    <div className="icon_names">Slides</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={formsImage} alt="Docs Icon" className='icon_style' />
                    <div className="icon_names">Forms</div>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem className='list_item'>
                    <FiSettings />
                    <div className="icon_names">Settings</div>
                </ListItem>
                <ListItem className='list_item'>
                    <BsQuestionCircle />
                    <div className="icon_names">Help & Feedback</div>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem className='list_item'>
                    <img src={driveImage} alt="Docs Icon" className='icon_style' />
                    <div className="icon_names">Drive</div>
                </ListItem>
            </List>
            <Divider />
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