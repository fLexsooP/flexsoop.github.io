import { Box } from '@mui/material';

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Box
        component={'img'}
        src={image}
        alt={'mockup'}
        my={5}
        maxWidth={'95%'}
      />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.25rem'}
        py={'2rem'}>
        <Box
          p={1}
          border={'2px solid black'}
          borderRadius={'25px'}>
          <a
            href={live}
            target={'_blank'}
            rel="noopener noreferrer">
            Live Demo
          </a>
        </Box>
        <Box
          p={1}
          border={'2px solid black'}
          borderRadius={'25px'}>
          <a
            href={source}
            target={'_blank'}
            rel="noopener noreferrer">
            Source Code
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
