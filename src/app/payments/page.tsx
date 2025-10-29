import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    // Data sementara yang nantinya akan mengambil data dalam database
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "monyet@example.com",
    },
    {
      id: "728ed59f",
      amount: 100,
      status: "pending",
      email: "kucing@example.com",
    },
    {
      id: "728ed58f",
      amount: 100,
      status: "pending",
      email: "bagong@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-20">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
