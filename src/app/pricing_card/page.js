const Home = () => {
  return (
    <div className="w-full h-screen bg-black font-sans flex justify-center items-center gap-x-1">
      <div className="w-[450px] h-[504px] bg-white/60 rounded-3xl p-8 ring-1 ring-gray-900/10">
        <h3 className="text-indigo-600 font-semibold text-base/7">Hobby</h3>
        <p className="mt-4 text-5xl font-semibold text-gray-900 flex items-baseline gap-x-2">
          $29<span className="text-base text-gray-500">/month</span>
        </p>
        <p className="mt-6 text-base/7 text-gray-600">
          The perfect plan if you're just getting started with our product.
        </p>
        <ul className="mt-8 space-y-3 text-sm/6 text-gray-600">
          {[
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced analytics",
            "24-hour support response time",
          ].map((element, index) => {
            return (
              <li key={index} className="flex gap-x-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-indigo-600"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
                {element}
              </li>
            );
          })}
        </ul>
        <button
          className="mt-8 w-full px-3.5 py-2.5 rounded-md ring ring-indigo-200
        text-center text-sm font-semibold text-indigo-600"
        >
          Get started today
        </button>
      </div>

      <div
        className="w-[450px] h-[544px] bg-gray-900 rounded-3xl p-8
      shadow-2xl ring-1 ring-gray-900/10"
      >
        <h3 className="text-indigo-400 font-semibold text-base/7">
          Enterprise
        </h3>
        <p className="mt-4 text-5xl font-semibold text-white flex items-baseline gap-x-2">
          $99<span className="text-base text-gray-400">/month</span>
        </p>
        <p className="mt-6 text-base/7 text-gray-300">
          Dedicated support and infrastructure for your company.
        </p>
        <ul className="mt-8 space-y-3 text-sm/6 text-gray-300">
          {[
            "Unlimited products",
            "Unlimited subscribers",
            "Advanced analytics",
            "Dedicated support representative",
            "Marketing automations",
            "Custom integrations",
          ].map((element, index) => {
            return (
              <li key={index} className="flex gap-x-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-indigo-400"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
                {element}
              </li>
            );
          })}
        </ul>
        <button
          className="mt-8 w-full rounded-md bg-indigo-500 px-3.5 py-2.5 shadow-xs
        text-white text-center text-sm font-semibold"
        >
          Get started today
        </button>
      </div>
    </div>
  );
};
export default Home;
