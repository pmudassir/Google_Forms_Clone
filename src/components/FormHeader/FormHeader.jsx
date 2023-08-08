import formImage from '../../images/forms.png'
import { IoMdFolderOpen } from 'react-icons/io'
import './formheader.css'
import { FiStar, FiSettings } from 'react-icons/fi'
import { Avatar, Button, IconButton } from '@mui/material'
import { ColorLensOutlined, MoreVert } from '@mui/icons-material'
import { AiOutlineEye } from 'react-icons/ai'

const Form = () => {
    return (
        <div className="form_header">
            <div className="form_header_left">
                <img src={formImage} alt="" style={{ height: '45px', width: '40px' }} />
                <input type="text" placeholder='Untitled form' className='form_name' value={'Untitled form'} />
                <IoMdFolderOpen className='form_header_icon' style={{ marginRight: '10px' }} />
                <FiStar className='form_header_icon' style={{ marginRight: '10px' }} />
                <span className='form_header_span'>All changes saved in Drive</span>
            </div>
            <div className="form_header_right">
                <IconButton>
                    <ColorLensOutlined fontSize='small' className='form_header_icon' />
                </IconButton>
                <IconButton>
                    <AiOutlineEye className='form_header_icon' />
                </IconButton>
                <IconButton>
                    <FiSettings className='form_header_icon' />
                </IconButton>
                <Button variant='contained' color='secondary' href='#contained-buttons'>Send</Button>
                <IconButton>
                    <MoreVert className='form_header_icon' />
                </IconButton>
                <IconButton>
                    <Avatar style={{ width: '30px', height: '30px' }} />
                </IconButton>
            </div>
        </div>
    )
}

export default Form