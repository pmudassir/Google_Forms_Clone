import React from 'react'
import './header.css'
import formImage from '../../images/forms.png'
import { Avatar, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
    return (
        <div className='header'>
            <div className="header_info">
                <Sidebar />
                <img src={formImage} style={{ height: '40px', width: '40px' }} className="form_image" alt="forms logo" />
                <div className="info">Forms</div>
            </div>
            <div className="header_search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" placeholder='Search' name='search' />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>
            </div>
        </div>
    )
}

export default Header