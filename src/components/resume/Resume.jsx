import { Box } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import Chenceshi_Resume from '../../info/Chenceshi_Resume.pdf';

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
          mb='2rem'>
          <a
            onClick={() => window.open(Chenceshi_Resume)}
            target={'_blank'}
            rel="noopener noreferrer">
            Download
          </a>
        </Box>
        <Document file={Chenceshi_Resume}>
          <Page pageNumber={1} renderTextLayer={false} scale='1.5'/>
        </Document>
    </Box>
  );
}
