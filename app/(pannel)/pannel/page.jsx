import DashboardCard from "../../../components/DashboardCard";
import DashboardMessage from "../../../components/DashboardMessage";
import Image from "next/image";

export default function Dashboard() {
  const num = [1, 2, 3];
  return (
    <main className=" w-full flex justify-center bg-[#FAFAFA] md:pt-10">
      <div className="w-full md:container sm:flex-col md:flex-row flex md:px-4 ">
        {/* Dashboard My Courses */}
        <div className="md:w-2/3 sm:w-full sm:px-4 md:px-6 pt-8 pb-4 md:bg-[#F8F7FA] h-min sm:bg-transparent rounded-2xl">
          <div className="flex justify-between mb-8 sm:px-4 md:px-0">
            <div className="border-b-2 pb-2 border-mainOrange">دوره های من</div>
            <div className="flex items-center">
              <div>همه دوره ها</div>
              <span className="mr-2">
                <Image src="/pannelimages/playb.svg" width={20} height={20} />
              </span>
            </div>
          </div>
          {/* MY Courses Cards */}
          <div>
            {num.map((item) => (
              <DashboardCard key={item} />
            ))}
          </div>
        </div>
        {/* Dashboard Wallet */}
        <div className="md:w-1/3 sm:w-full sm:px-4 md:px-6 pb-4">
          <div class="w-full bg-gradient-to-l from-orange-400 via-orange-500 to-orange-400 rounded-2xl shadow-lg px-6 py-4 ">
            <div className="flex justify-between mb-8">
              <div className="border-b-2 text-white pb-2 border-white">
                پیام های من
              </div>
              <div className="flex items-center">
                <div className="text-white">مشاهده همه</div>
                <span className="mr-2">
                  <Image src="/pannelimages/play.svg" width={20} height={20} />
                </span>
              </div>
            </div>
            <div>
              {num.map((message) => (
                <DashboardMessage key={message} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
