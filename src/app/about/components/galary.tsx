import {
  img1,
  img10,
  img2,
  img3,
  img4,
  img5,
  img7,
  img8,
  img9,
} from "@/assets";

export default function Galary() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-2 py-5">
      <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-[30px] font-bold text-transparent lg:text-[50px]">
        Galereya
      </h1>
      <div>

        {/* for desktop until md */}
        <div className="hidden items-start justify-around gap-5 py-10 md:flex">
          {/* grp1 */}
          <div className="flex flex-col gap-5">
            <img
              src={img1}
              alt="about us images"
              className="h-[350px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img2}
              alt="about us images"
              className="h-[350px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img10}
              alt="about us images"
              className="h-[350px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
          </div>
          {/* grp2 */}
          <div className="flex flex-col gap-5">
            <img
              src={img3}
              alt="about us images"
              className="h-[175px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img4}
              alt="about us images"
              className="h-[400px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img8}
              alt="about us images"
              className="h-[480px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
          </div>
          {/* grp3 */}
          <div className="flex flex-col gap-5">
            <img
              src={img5}
              alt="about us images"
              className="h-[350px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img7}
              alt="about us images"
              className="h-[400px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img9}
              alt="about us images"
              className="h-[300px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
          </div>
        </div>

        {/* for phone */}
        <div className="hidden items-start justify-around gap-5 py-10 max-md:flex">

          {/* grp1 */}
          <div className="flex flex-col gap-5">
            <img
              src={img1}
              alt="about us images"
              className="h-[300px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img2}
              alt="about us images"
              className="h-[250px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img10}
              alt="about us images"
              className="h-[400px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img5}
              alt="about us images"
              className="h-[300px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
          </div>
          {/* grp2 */}
          <div className="flex flex-col gap-5">
            <img
              src={img3}
              alt="about us images"
              className="h-[175px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img4}
              alt="about us images"
              className="h-[300px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img8}
              alt="about us images"
              className="h-[280px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img7}
              alt="about us images"
              className="h-[250px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
            <img
              src={img9}
              alt="about us images"
              className="h-[225px] w-full max-w-[350px] rounded-[20px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
