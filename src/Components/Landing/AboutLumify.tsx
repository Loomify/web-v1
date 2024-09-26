import Image from "next/image";

export default function About() {
  return (
    <section
      id="getintouch"
      className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-32 text-black"
    >
      {/* Image Section */}
      <div className="col-span-1 flex justify-center mb-10 md:mb-0">
        <Image
          src={"/AboutImage.png"}
          width={400}
          height={400}
          alt="About Section Image"
          className="w-full h-auto md:w-400 md:h-400"
        />
      </div>

      {/* Text Section */}
      <div className="col-span-1 flex flex-col justify-center items-center">
        <div
          id="content1"
          className="flex flex-col items-center justify-center text-wrap text-center"
        >
          <h1 className="text-2xl md:text-3xl font-semibold">About Lumify</h1>
          <p className="text-lg mt-5">
            Explore some of the cutting-edge projects we've completed for
            clients across various industries. Our portfolio highlights our
            ability to deliver tailored IT solutions that solve real-world
            challenges and drive business success.
          </p>
        </div>

        <div
          id="content2"
          className="flex flex-col mt-10 items-center justify-center text-wrap text-center"
        >
          <h1 className="text-2xl md:text-3xl font-semibold">Let Us Help You Innovate</h1>
          <p className="text-lg mt-6">
            Ready to take your business to the next level? Contact us today to
            learn how our tailored IT solutions can empower your organization.
          </p>
        </div>

        <button className="bg-[#775Df2] text-white px-20 py-4 rounded-full mt-12 w-fit">
          Get Consultation
        </button>
      </div>
    </section>
  );
}
