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
      className="group relative overflow-hidden border-[#00ff41]/30 hover:border-[#00ff41] transition-all duration-300 bg-black/70 cursor-pointer"
      onClick={onClick}
    >
      {/* Action Content */}
      <div className="relative p-6 size-full z-10">
        <div className="space-y-3">
          {/* Action Icon */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/50 border border-[#00ff41]/50 group-hover:scale-110 transition-transform">
            <action.icon className="h-6 w-6 text-[#00ff41]" />
          </div>

          {/* Action Details */}
          <div className="space-y-1">
            <h3 className="font-mono font-semibold text-xl text-[#00ff41]">
              {action.title}
            </h3>
            <p className="text-sm text-[#00ff41]/70 font-mono">
              // {action.description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ActionCard
