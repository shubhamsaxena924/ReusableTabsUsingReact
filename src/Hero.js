function Hero() {
  return (
    <div className="mb-20 bg-gray-200 2xl:mb-32">
      <div className="flex w-full bg-center bg-no-repeat bg-cover 3000:bg-contain bg-gray-20 bg-mobile_star md:bg-star 2xl:justify-center">
        <div className="flex w-full max-w-144">
          <div className="h-0 pb-mobile md:pb-star"></div>
          <div className="flex items-start justify-center w-full md:items-center md:justify-start max-w-144">
            <div className="flex items-start justify-center">
              <div className="px-4 py-8 text-base text-center md:px-8 2xl:px-0 md:text-left md:text-xl">
                <h1 className="text-2xl font-semibold md:text-4xl">
                  FREE COFFEE
                  <br />
                  IS A TAP AWAY
                </h1>
                <p className="pt-4">Join now to start earning Rewards.</p>
                <button className="hidden px-4 py-2 mt-8 text-base font-semibold text-white bg-green-700 rounded-full md:block hover:bg-green-600">
                  Join now
                </button>
                <button className="px-4 py-2 mt-8 font-semibold text-white bg-green-700 rounded-full md:hidden hover:bg-green-600">
                  Join in the app
                </button>
                <p className="hidden pt-4 md:block">
                  Or&nbsp;
                  <a className="underline hover:no-underline" href="#">
                    join in the app
                  </a>
                  &nbsp;for the best experience
                </p>
                <p className="pt-4 md:hidden">
                  <a className="underline hover:no-underline" href="#">
                    Or join online
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
