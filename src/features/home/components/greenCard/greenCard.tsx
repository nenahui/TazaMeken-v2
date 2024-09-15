interface Props {
  num: number;
  text: string;
  showButton?: boolean;
}

const GreenCard = ({ num, text, showButton = false }: Props) => {
  return (
    <div className='bg-[#84c19a4d] w-[440px] rounded-[20px] p-6'>
      <div className="flex gap-5">
        <div className='text-[16px] border-2 rounded-full border-black w-[45px] h-[45px] flex justify-center items-center'>
          {num}
        </div>
        <p className='text-2xl max-w-80'>{text}</p>
      </div>
      {showButton && <button className='bg-[#679778] text-white px-10 py-4 rounded-[40px] mt-4 text-2xl'>Подробнее</button>}
    </div>
  );
};

export default GreenCard;
