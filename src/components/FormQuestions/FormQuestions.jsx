import { AddCircleOutline, CheckBox, Close, CropOriginal, FilterNone, MoreVert, OndemandVideo, Radio, ShortText, Subject, TextFields } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, Select, Switch } from '@mui/material'
import React from 'react'
import { BsFileText, BsTrash } from 'react-icons/bs'
import { FcRightUp } from 'react-icons/fc'
import './formquestions.css'

const FormQuestions = () => {
  return (
    <div>
     <div className="question_form">
      <br />
      <div className="section">
        <div className="question_title_section">
          <div className="question_form_top">
            <input type="text" className='question_from_top_name' placeholder='Untitled Document' />
            <input type="text" className='question_from_top_desc' placeholder='Untitled Description' />
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default FormQuestions

// <CropOriginal />
// <Select />
// <Switch />
// <CheckBox />
// <ShortText />
// <Subject />
// <MoreVert />
// <BsTrash />
// <FilterNone />
// <AddCircleOutline />
// <OndemandVideo />
// <TextFields />
// <BsFileText />
// <Accordion />
// <AccordionSummary />
// <AccordionDetails />
// <Button />
// <FcRightUp />
// <Close />
// <Radio />
// <FormControlLabel />