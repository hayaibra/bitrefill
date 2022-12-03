import { Accordion} from '@mantine/core';
import React from 'react';

const QuestionItem = ({ question }) => {
  const { title, text, value, list } = question;
  return (
    <Accordion.Item value={value}>
      <Accordion.Control
        sx={{
          color: 'white',
          fontSize: '18px',
          fontWeight: 600,
          padding: '16px 0',
        }}
      >
        {title}
      </Accordion.Control>
      <Accordion.Panel
        sx={{
          color: 'gray',
          fontSize: '18px',
          fontWeight: 400,
          padding: '0 0 16px 0',
        }}
      >
        {text}
        {list && (
          <ol style={{ color: 'gray', marginTop: '20px' }}>
            {list.map((li, i) => (
              <li key={i} sx={{ fontSize: '18px' }}>
                {li}
              </li>
            ))}
          </ol>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default QuestionItem;
