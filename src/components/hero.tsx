export const Hero = () => {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('src/images/photo-1636955840493-f43a02bfa064.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="font-poppins">
        <h1 className="text-center text-2xl font-bold mb-2 text-midnight">
          Capture, Organize, and Grow Your Ideas
        </h1>
        <p className="w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius
          possimus soluta necessitatibus sapiente consequatur nemo adipisci
          saepe. Labore doloribus temporibus dolores cumque ad voluptatum et
          aliquam vero ipsa atque.
        </p>
      </div>
    </div>
  );
};
