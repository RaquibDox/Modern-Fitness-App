import { useAppDispatch } from '../../store/store';
import { useAppSelector } from '../../store/store';
import { changeBodyPart } from '../../features/bodypart/bodyPartSlice';
import { getBodyPart } from '../../features/bodypart/bodyPartSlice';

const BodyPart = ({item}: {item: string}) => {

  const dispatch = useAppDispatch();
  const storedBodyPart = useAppSelector(getBodyPart)

  return (
    <div
      onClick={() => {
        dispatch(changeBodyPart({bodyPart: item}))
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
      }}
      className={`bodyPart-card flex flex-col content-center items-center justify-center w-[270px] h-[270px] cursor-pointer gap-[47px] bg-black overflow-hidden ${storedBodyPart == item ? 'border-t-4 border-accent-light-color-1 rounded-bl-3xl' : ''}`}
    >
      <img src={`/assets/images/body-parts/${item.replace(/\s/g, '').toLowerCase()}.jpg`} alt="dumbbell" loading="lazy" className='absolute -z-10 w-full h-full opacity-70 overflow-hidden hover:scale-110 hover:duration-500 hover:ease-in'/>
      <p className='text-3xl text-font-dark-color font-bold capitalize'>
        {item}
      </p>
    </div>
  )
}

export default BodyPart