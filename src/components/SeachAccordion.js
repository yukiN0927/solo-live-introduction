import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

function SeachAccordion(props){
    const {title, option, value, setvalue}=props;
    
    return (
    <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        >
            <Typography >{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>

            <FormGroup>
                <RadioGroup value={value} onChange={(event)=> setvalue(event.target.value)}>
                {option.map((data)=>(
                    <FormControlLabel value={data} control={<Radio />} label={data} />
                ))}
                </RadioGroup>
            </FormGroup>
        </AccordionDetails>
    </Accordion>
    )
}

SeachAccordion.propTypes = {
    title: PropTypes.string.isRequired,
    option: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    setvalue: PropTypes.func.isRequired,
};

export default SeachAccordion