// import Image from "next/image";

// export default function Home() {
//   return <div>hello</div>;
// }
const Home = () => {
  return (
    <div className="flex justify-center font-sans">
      <div
        className="w-[450px] h-[550px] bg-gray-800
       text-gray-300 rounded-[20px] p-10 flex flex-col gap-8"
      >
        <h1 className="text-indigo-400 font-semibold">Enterprise</h1>
        <p className="text-3xl font-bold text-white">
          $99 <span className="text-lg text-gray-400 text-base">/month</span>
        </p>
        <p>Dedicated support and infrastructure for your company.</p>
        <ul className="flex flex-col gap-1">
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            Unlimited products
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            Unlimited subscribers
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            Advanced analytics
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            Dedicated support representative
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            Marketing automations
          </li>
          <li className="flex gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="h-6 w-5 flex-none text-indigo-400"
            >
              <path
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            Custom integrations
          </li>
        </ul>
        <button className="bg-indigo-400 rounded-lg pt-2 pb-2 text-white font-bold w-full">
          Get started today
        </button>
      </div>
    </div>
  );
};
export default Home;
