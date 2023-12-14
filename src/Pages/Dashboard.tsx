import { useData } from "../Context/DataContext";

export function Dashboard() {
  const { data } = useData();
  console.log(data);

  return <div>Dashboard</div>;
}
