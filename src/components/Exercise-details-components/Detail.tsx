import { memo } from "react";
import { ExerciseType } from "../../utils/tsTypes";

const Detail = memo(({ exerciseDetail }: { exerciseDetail: ExerciseType }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const InfoButtons = memo(() => {
    const extraDetail = [
      {
        icon: "../assets/icons/body-part.png",
        name: bodyPart,
      },
      {
        icon: "../assets/icons/target.png",
        name: target,
      },
      {
        icon: "../assets/icons/equipment.png",
        name: equipment,
      },
    ];

    return (
      <div className="flex flex-col gap-2 sm:gap-4">
        {extraDetail.map((item, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-6">
            <button className="m-0 bg-button-light-color rounded-[50%] sm:w-[80px] sm:h-[80px] w-12 h-12">
              <img
                src={item.icon}
                alt={bodyPart}
                className="block m-auto sm:w-[50px] sm:h-[50px] w-8 h-8"
              />
            </button>
            <h3 className="m-0 text-xl capitalize sm:text-3xl">{item.name}</h3>
          </div>
        ))}
      </div>
    );
  });

  return (
    <div className="flex gap-[60px] flex-col lg:flex-row p-5 items-center font-sans">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <div className="flex flex-col items-center gap-4 m-4 sm:gap-6">
        <div className="flex flex-col gap-5 lg:gap-9">
          <h2 className="text-3xl font-semibold capitalize sm:text-4xl">
            {name}
          </h2>
          <p className="text-xl sm:text-2xl">
            {`Exercises keep you strong. ${
              name.charAt(0).toUpperCase() + name.slice(1)
            } is one of the best exercises to target your ${target}. It will help you improve your mood and gain energy`}
          </p>
        </div>

        <InfoButtons />
      </div>
    </div>
  );
});

export default Detail;
