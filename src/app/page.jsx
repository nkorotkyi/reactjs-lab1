import FunctionComp from "@/components/Function/Function"
import State from "@/components/State/State"
import Table from "@/components/Table/Table"

export default function Home() {
  return (
    <div>
      <Table />
      <FunctionComp num1={6} num2={4} />
      <State value="Cna" previousValue="Значення з пропсів" title="Задання №3" />
    </div>
  )
}
