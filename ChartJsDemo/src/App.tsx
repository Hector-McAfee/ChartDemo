import AnalogueChart from "./Charts/analougue"
import BooleanChart from "./Charts/boolean"
import CombinedChart from "./Charts/combinedChart"
import EnumChart from "./Charts/mutipleEnums"
import LiveDataChart from "./Charts/LiveData"
import LocaleMultiChart from "./Charts/localeMulti"
import MultiTraceChart from "./Charts/multiTrace"
import NonContiguousDataChart from "./Charts/nonContiguousData"
import AlarmChart from "./Charts/alarmData"
import LimitsChart from "./Charts/limitsChart"

function App() {

  return (
    <>
       <AnalogueChart/>
       <BooleanChart/>
       <LocaleMultiChart/>
       <MultiTraceChart/>
       <CombinedChart/>
       <NonContiguousDataChart/>
       <LiveDataChart/>
       <EnumChart/>
       <AlarmChart/>
       <LimitsChart/>
    </>
  )
}

export default App
