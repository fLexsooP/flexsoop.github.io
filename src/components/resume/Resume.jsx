import { Box } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import Chence_Shi_resume from '/Chence_Shi_resume.pdf';

export default function Resume() {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={'3rem'}>
      <Box
        p={1.5}
        border={'2px solid black'}
        borderRadius={'25px'}
        mb="2rem">
        <a
          href={Chence_Shi_resume}
          download>
          Download Resume
        </a>
      </Box>
      <Document file={Chence_Shi_resume}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          scale="1.5"
        />
      </Document>
    </Box>
  );
}
