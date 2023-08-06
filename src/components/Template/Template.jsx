import './template.css'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Template = () => {
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span>Start a new form</span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        Template gallery
                        <UnfoldMoreIcon />
                    </div>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="template_body">
                <div className="card">
                    <img src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" alt="" className='card_img' />
                    <p className='card_title'>Blank</p>
                </div>
                <div className="card">
                    <img src="https://ssl.gstatic.com/docs/templates/thumbnails/1xQF3s6EP0d58H-XJ7R440OpREKo4KqEapa0mkw43RPE_400.png" alt="" className='card_img' />
                    <p className='card_title'>Contact Information</p>
                </div>
                <div className="card">
                    <img src="https://ssl.gstatic.com/docs/templates/thumbnails/1m0UYQl1LSGxl3sGsh9_xjim4hUYQ8BO_zbvcFXv1Qug_400.png" alt="" className='card_img' />
                    <p className='card_title'>Party Invite</p>
                </div>
            </div>
        </div>
    )
}

export default Template