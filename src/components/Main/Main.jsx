import { ArrowDropDown } from '@mui/icons-material'
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
                        Owned by anyone <ArrowDropDown />
                    </div>
                </div>
            </div>
            <div className="main_body_docs">

            </div>
        </div>
    )
}

export default Main