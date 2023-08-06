import { ArrowDropDown, FolderOpen, MoreVert, SortByAlphaOutlined, Storage, ViewListOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import './main.css'

const Main = () => {
    return (
        <div className="main_body">
            <div className="main_body_top">
                <div className="main_body_top_left">
                    Recent forms
                </div>
                <div className="main_body_top_right">
                    <div className="main_body_top_center">
                        Owned by anyone <IconButton><ArrowDropDown /></IconButton>
                    </div>
                    <IconButton>
                        <ViewListOutlined />
                    </IconButton>
                    <IconButton>
                        <SortByAlphaOutlined />
                    </IconButton>
                    <IconButton>
                        <FolderOpen />
                    </IconButton>

                </div>
            </div>
            <div className="main_body_docs">
                <div className="doc_card">
                    <img src="" alt="" className='doc_img' />
                    <div className="doc_card_content">
                        <h5>Document</h5>
                        <div className="doc_content" style={{ fontSize: '12px', color: 'gray' }}>
                            <div className="content_left">
                                <Storage style={{ color: 'white', fontSize: '14px', backgroundColor: '#6e2594', padding: '3px', marginRight: '3px', borderRadius: '2px' }} /> Opened 6 Jan 2021
                            </div>
                            <MoreVert style={{ fontSize: '16px', color: 'gray' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main