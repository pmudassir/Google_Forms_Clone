import { AddCircleOutline, CheckBox, Close, CropOriginal, FilterNone, MoreVert, OndemandVideo, Radio, ShortText, Subject, TextFields } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, MenuItem, Select, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BsFileText, BsTrash } from 'react-icons/bs'
import { FcRightUp } from 'react-icons/fc'
import './formquestions.css'

const FormQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "Which is the capital city of Kerala",
      questionType: 'radio',
      options: [
        { optionText: "Trivandrum" },
        { optionText: "Kochi" },
        { optionText: "Malappuram" },
        { optionText: "Calicut" }
      ],
      open: true,
      required: false
    }
  ])

  const QuestionUI = () => {
    return questions.map((question, i) => (
      <div>
        <Accordion expanded={questions[i].open} className={questions[i].open ? 'add_border' : ""}>
          <AccordionSummary aria-controls='panel1a-content' id='panel1a-header' elevation={1} style={{ width: '100%' }}>
            {questions[i].open}?(
            <div className="saved_questions">
              <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: ".1px", lineHeight: "24px", paddingBottom: "8px" }}>
                {i + 1}. {questions[i].questionText}
              </Typography>
              {question.options.map((option, index) => (
                <div key={index}>
                  <div style={{ display: 'flex' }}>
                    <FormControlLabel
                      style={{ marginLeft: '5px', marginBottom: "5px" }}
                      disabled
                      control={
                        <input type={question.questionType} color='primary' style={{ marginRight: "3px" }} required={question.type} />
                      }
                      label={
                        <Typography
                          style={{
                            fontFamily: "Roboto, Arial,sans-serif",
                            fontSize: "13px",
                            fontWeight: "400",
                            letterSpacing: ".2px",
                            lineHeight: "20px",
                            color: "#202124"
                          }}>
                          {question.options[index].optionText}
                        </Typography>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            )
          </AccordionSummary>
          <div className='question_boxes'>
            <AccordionDetails className='add_question'>
              <div className="add_question_top">
                <input type="text" className='question' placeholder='Questions' value={question.questionText} />
                <CropOriginal style={{ color: "#5f6368" }} />
                <Select className='select' style={{ color: "#5f6368", fontSize: "13px" }}>
                  <MenuItem id='text' value='Text'><Subject style={{ marginRight: "10px" }} />Paragraph</MenuItem>
                  <MenuItem id='checkbox' value='Checkbox'><CheckBox style={{ marginRight: "10px", color: "#70757a" }} checked />CheckBox</MenuItem>
                  <MenuItem id='radio' value='Radio'><Radio style={{ marginRight: "10px", color: "#70757a" }} checked />Multiple Choice</MenuItem>
                </Select>
              </div>
              {question.options.map((option, index) => (
                <div className="add_question_body" key={index}>
                  {
                    (question.questionType != "text")
                      ? <input type={question.questionType} style={{ marginRight: "10px" }} />
                      : <ShortText style={{ marginRight: "10px" }} />
                  }
                </div>
              ))}
            </AccordionDetails>
          </div>
        </Accordion>
      </div>
    ))
  }

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
          {QuestionUI()}
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