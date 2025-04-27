import { QuickActionType } from '@/constants/data'
import { Card } from '../ui/card'

function ActionCard({
  action,
  onClick,
}: {
  action: QuickActionType
  onClick: () => void
}) {
  return (
    <Card
      className="group relative overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 bg-black cursor-pointer"
      onClick={onClick}
    >
      {/* Action Content */}
      <div className="relative p-6 size-full z-10">
        <div className="space-y-3">
          {/* Action Icon */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/70 border border-gray-700 group-hover:border-white group-hover:scale-110 transition-transform">
            <action.icon className="h-6 w-6 text-white" />
          </div>

          {/* Action Details */}
          <div className="space-y-1">
            <h3 className="font-sans font-semibold text-xl text-white">
              {action.title}
            </h3>
            <p className="text-sm text-gray-400 font-light">
              {action.description}
            </p>
          </div>
        </div>
      </div>

      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  )
}

export default ActionCard
