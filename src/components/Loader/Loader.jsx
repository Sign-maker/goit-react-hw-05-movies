import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <ThreeDots
      visible={true}
      height="16"
      width="80"
      color="rgb(89, 255, 67)"
      radius="5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </LoaderContainer>
);
