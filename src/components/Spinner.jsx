import { BeatLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className=' w-full min-h-screen flex justify-center items-center -mt-10'>
      <BeatLoader color='blue' size={20} />
    </div>
  );
};

export default Spinner;
