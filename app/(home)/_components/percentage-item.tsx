import { ReactNode } from "react"

interface Props {
  icon: ReactNode
  title: string
  value: number
}

const PercentageItem = ({ icon, title, value }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-lg bg-white/5">
          {icon}
        </div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="font-bold tex-sm">{value}%</p>
    </div>
  )
}

export default PercentageItem