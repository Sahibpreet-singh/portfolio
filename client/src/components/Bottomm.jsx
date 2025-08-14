export default function Bottom() {
  return (
    <div className="w-full bg-black bg-opacity-40 text-white px-6 py-6 backdrop-blur-md mt-12">
      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex space-x-6 text-sm font-semibold text-gray-500 mb-4">
          <span className="text-white">SOCIAL</span>
          <span className="text-white border-b border-white pb-1">Void Box</span>
         <button
          className="opacity-50"
          onClick={() => window.open('https://discord.gg/RJrvS9uKRK', '_blank')}
        >
          Discord?
        </button>

         
        </div>

        {/* Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
  <p className="font-semibold text-white tracking-wide">
    THOUGHTS • <span className="text-gray-400 text-sm">just now</span>
  </p>
  <p className="text-gray-300 mt-2 leading-relaxed">
    Beneath calm silence, I script the storm — quiet hands weaving a louder form.<br />
    This isn’t light; this is legacy, born in shadows, destined for screens.<br />
    If you feel the static in the silence — slide into the Discord?
  </p>
</div>

        </div>
      </div>
    </div>
  );
}
