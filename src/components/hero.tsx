export const Hero = () => {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('src/images/istockphoto-1145145896-612x612.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-center text-2xl font-bold mb-2 text-green-500">
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
