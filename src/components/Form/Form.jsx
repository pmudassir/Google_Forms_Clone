import formImage from '../../images/forms.png'
import { IoMdFolderOpen } from 'react-icons/io'
import './form.css'
import { FiStar } from 'react-icons/fi'
import { Avatar, IconButton } from '@mui/material'
import { ColorLens, MoreVert } from '@mui/icons-material'
import { AiOutlineEye } from 'react-icons/ai'

const Form = () => {
    return (
        <div className="form_header">
            <div className="form_header_left">
                <img src={formImage} alt="" className='form_image' />
                <input type="text" placeholder='Untitled form' className='form_name' value={'Untitled form'} />
                <IoMdFolderOpen className='form_header_icon' style={{ marginRight: '10px' }} />
                <FiStar className='form_header_icon' style={{ marginRight: '10px' }} />
                <span className='form_header_span'>All changes saved in Drive</span>
            </div>
            <div className="form_header_right">
                <IconButton>
                    <ColorLens fontSize='small' className='form_header_icon' />
                </IconButton>
                <IconButton>
                    <AiOutlineEye className='form_header_icon' />
                </IconButton>
                <IconButton>
                    <MoreVert className='form_header_icon' />
                </IconButton>
                <IconButton>
                    <Avatar style={{width: '30px', height: '30px'}} />
                </IconButton>
            </div>
        </div>
    )
}

export default Form