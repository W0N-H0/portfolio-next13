import Typewriter from "typewriter-effect";

const CustomTypewriter = () => {
  return (
    <div className="h-[110px]">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          pauseFor: 1000,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(" a Front-end Developer")
            .deleteAll()
            .typeString(" a communicative Developer")
            .deleteAll()
            .typeString(" a lifelong learner Developer")
            .start();
        }}
      />
    </div>
  );
};

export default CustomTypewriter;
