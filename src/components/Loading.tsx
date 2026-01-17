const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-amber-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-orange-500 rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-4 border-4 border-transparent border-t-amber-400 rounded-full animate-spin animation-delay-300"></div>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default Loading;
