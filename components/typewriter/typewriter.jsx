import Typewriter from "typewriter-effect";

const CustomTypewriter = () => {
  return (
    <div className="h-[110px]">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 90,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(" a Front-end Developer")
            .pauseFor(900)
            .deleteAll(15)
            .typeString(" a communicative Developer")
            .pauseFor(900)
            .deleteAll(15)
            .typeString(" a lifelong learner Developer")
            .pauseFor(900)
            .deleteAll(15)
            .start();
        }}
      />
    </div>
  );
};

export default CustomTypewriter;
