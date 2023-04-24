export default function Hero() {
  return (
    <div className="relative bg-midnight-green">
      <div className="absolute bottom-0 translate-y-1/2 sm:translate-y-0 right-0 translate-x-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <g fill="none" fill-rule="evenodd">
            <path fill="#2C6269" d="M100 100H0V0h100z"/>
            <path fill="#F67E7E" d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"/>
            <path fill="#79C8C7" d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"/>
          </g>
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 py-[120px] max-w-5xl mx-auto">
        <div>
          <h1 className="font-bold text-[56px] md:text-[64px] leading-[56px] md:leading-[100px] text-center md:text-left text-white">Find the best 
          <span className=""> talent</span></h1>
        </div>
        <div className="col-span-2 max-w-md md:max-w-none mx-auto">
          <p className="font-semibold text-[15px] md:text-lg leading-7 text-center md:text-left text-white">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
        </div>
      </div>
    </div>
  )
}