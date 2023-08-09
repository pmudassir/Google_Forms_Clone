import React from 'react'
import CenteredTabs from '../../components/CenteredTabs/CenteredTabs'
import FormHeader from '../../components/FormHeader/FormHeader'
import FormQuestions from '../../components/FormQuestions/FormQuestions'

const Form = () => {
    return (
        <div>
            <FormHeader />
            <CenteredTabs />
            <FormQuestions />
        </div>
    )
}

export default Form