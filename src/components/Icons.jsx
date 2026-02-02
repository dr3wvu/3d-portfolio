import {
  Cpu,
  Brain,
  Database,
  Workflow,
  MonitorCog,
  Download,
} from 'lucide-react'

export const IconCPU = (props) => <Cpu color="white" size={32} {...props} />
export const IconAI = (props) => <Brain color="white" size={32} {...props} />
export const IconSystem = (props) => (
  <Database color="white" size={32} {...props} />
)
export const IconMonitor = (props) => (
  <MonitorCog color="white" size={32} {...props} />
)

export const IconProcess = (props) => (
  <Workflow color="white" size={32} {...props} />
)

export const DownloadButton = (props) => (
  <Download color="white" size={32} {...props} />
)
