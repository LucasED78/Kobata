import React from 'react';
import classes from './Paragraph.module.css';

export interface ParagraphProps {
  content: string;
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <p className={classes.Paragraph}>
      { props.content }
    </p>
  )
}

export default Paragraph;