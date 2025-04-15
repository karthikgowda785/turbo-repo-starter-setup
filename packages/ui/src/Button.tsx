export const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-secondary text-white p-2 rounded-md cursor-pointer">
      {text}
    </button>
  );
};
