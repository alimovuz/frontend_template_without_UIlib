import useGetData from "@/hooks/useGetData";

const Dashboard = () => {
  const {data} = useGetData({
    queryKey: ["users"],
    url: "/users"
  })

  console.log(data)
  return (
    <div>
    </div>
  );
}

export default Dashboard