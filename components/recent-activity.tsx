import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: {
      name: "John Doe",
      avatar: "/avatars/john-doe.jpg",
      initials: "JD",
    },
    action: "added 50 units of Product A to inventory",
    timestamp: "2 hours ago",
  },
  {
    user: {
      name: "Jane Smith",
      avatar: "/avatars/jane-smith.jpg",
      initials: "JS",
    },
    action: "updated the price of Product B",
    timestamp: "4 hours ago",
  },
  {
    user: {
      name: "Bob Johnson",
      avatar: "/avatars/bob-johnson.jpg",
      initials: "BJ",
    },
    action: "processed order #12345",
    timestamp: "6 hours ago",
  },
  {
    user: {
      name: "Alice Brown",
      avatar: "/avatars/alice-brown.jpg",
      initials: "AB",
    },
    action: "marked Product C as out of stock",
    timestamp: "8 hours ago",
  },
  {
    user: {
      name: "Charlie Wilson",
      avatar: "/avatars/charlie-wilson.jpg",
      initials: "CW",
    },
    action: "added a new supplier for Product D",
    timestamp: "10 hours ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user.name}</p>
            <p className="text-sm text-muted-foreground">
              {activity.action}
            </p>
            <p className="text-xs text-muted-foreground">
              {activity.timestamp}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

