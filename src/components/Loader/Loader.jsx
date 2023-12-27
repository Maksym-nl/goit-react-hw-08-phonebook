import { Grid } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
export const Loader = () => {
  return (
    <LoaderWrapper>
      <Grid
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
      />
    </LoaderWrapper>
  );
};
