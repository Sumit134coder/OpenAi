export default function Loader() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="animate-spin rounded-full w-12 h-12 border-t-2 border-l-2 border-primary-500" role="status">
        <span className="hidden">Loading...</span>
      </div>
    </div>
  );
}
