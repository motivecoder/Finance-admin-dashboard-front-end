import { BsThreeDotsVertical } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  time: string;
  date: "Today" | "Yesterday";
}

export default function RecentActivity() {
  const activities: ActivityItem[] = [
    {
      id: "1",
      user: "Jamie Smith",
      action: "updated account settings",
      time: "16:05",
      date: "Today",
    },
    {
      id: "2",
      user: "Alex Johnson",
      action: "logged in",
      time: "13:05",
      date: "Today",
    },
    {
      id: "3",
      user: "Taylor Green",
      action: "reviewed recent transactions",
      time: "21:05",
      date: "Yesterday",
    },
    {
      id: "4",
      user: "Wilson Baptista",
      action: "transferred funds to emergency fund",
      time: "09:05",
      date: "Yesterday",
    },
  ];

  // Group activities by date
  const groupedActivities = activities.reduce(
    (acc, activity) => {
      if (!acc[activity.date]) {
        acc[activity.date] = [];
      }
      acc[activity.date].push(activity);
      return acc;
    },
    {} as Record<string, ActivityItem[]>,
  );

  return (
    <div className="border-gray-line w-full rounded-md border p-4 text-black">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-bold">Recent Activity</h3>
        <BsThreeDotsVertical className="ml-auto cursor-pointer text-lg" />
      </div>

      <div className="space-y-4">
        {Object.entries(groupedActivities).map(([date, items]) => (
          <div key={date} className="space-y-2">
            <h3 className="text-sm font-medium text-black">{date}</h3>
            <div className="relative">
              {items.map((activity, index) => (
                <div key={activity.id} className="relative flex">
                  <div className="relative">
                    <div className="bg-green-light relative z-10 flex h-10 w-10 items-center justify-center rounded-full" />
                    {index !== items.length - 1 && (
                      <div className="absolute top-10 left-1/2 h-12 w-0.5 -translate-x-1/2 transform bg-gray-200" />
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="flex items-baseline">
                      <span className="font-bold whitespace-nowrap text-gray-800">
                        {activity.user}
                      </span>
                      <span className="ml-1 line-clamp-2 text-gray-700">
                        {activity.action}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
