import EndButton from '../components/challenge/finish/EndButton';

export default function HomePage() {
  return (
    <>
      <EndButton/>
      <div className="min-h-screen w-full bg-gray-800 flex items-center justify-center">
        <div className="text-2xl font-bold">HomePage</div>
      </div>
    </>
  );
};
