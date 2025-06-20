import AnalogueChart from "./Charts/analougue"
import BooleanChart from "./Charts/boolean"
import CombinedChart from "./Charts/combinedChart"

import LiveDataChart from "./Charts/LiveData"
import LocaleMultiChart from "./Charts/localeMulti"
import MultiTraceChart from "./Charts/multiTrace"
import NonContiguousDataChart from "./Charts/nonContiguousData"

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
    </>
  )
}

export default App
