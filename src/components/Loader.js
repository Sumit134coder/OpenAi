export default function Loader({ componentLoader = false }) {
  return (
    <div className={`flex justify-center items-center ${!componentLoader ? 'h-screen' : 'h-[80vh]'}`}>
      <div className="animate-spin rounded-full w-12 h-12 border-t-2 border-l-2 border-primary-500" role="status">
        <span className="hidden">Loading...</span>
      </div>
    </div>
  );
}
