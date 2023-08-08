import { Paper, Tab, Tabs } from '@mui/material'
import React from 'react'

const CenteredTabs = () => {
    return (
        <Paper className='paper_style'>
            <Tabs
                centered
                textColor='primary'
                indicatorColor='primary'
                className='tabs_style'
            >
                <Tab label='Questions' className='tab_style'></Tab>
                <Tab label='Responses' className='tab_style'></Tab>
            </Tabs>
        </Paper>
    )
}

export default CenteredTabs