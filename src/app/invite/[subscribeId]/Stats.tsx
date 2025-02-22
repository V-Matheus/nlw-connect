import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from "@/http/api"
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react"

interface StatsProps {
  subscribeId: string
}

export default async function Stats({ subscribeId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscribeId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscribeId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscribeId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {accessCount}
        </span>
        <span className="text-sm text-gray-300 leading-none">
          Acessos ao link
        </span>

        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {inviteCount}
        </span>
        <span className="text-sm text-gray-300 leading-none">
          Inscrições feitas
        </span>

        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankingPosition ? `${rankingPosition}º` : "-"}
        </span>
        <span className="text-sm text-gray-300 leading-none">
          Posição no rank
        </span>

        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  )
}
