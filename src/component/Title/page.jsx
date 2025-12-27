const Title = ({ children }) => {
  return (
    <div className="bg-linear-60 from-blue-500 to-blue-200 text-5xl font-bold text-white p-5 m-5 rounded-3xl">
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
