import { Table } from "@radix-ui/themes";
import { useState } from "react";
interface Subscriber {
  id: number;
  name: string;
}

const SubscriberLists: React.FC = () => {
    const [data, setData] = useState<Subscriber[]>([
        {
          id: 1,
          name: "John Doe",
        },
        {
          id: 2,
          name: "Jane Doe",
        },
        {
          id: 3,
          name: "John Smith",
        },
        {
          id: 4,
          name: "Jane Smith",
        },
        {
          id: 5,
          name: "John Doe",
        },
        {
          id: 6,
          name: "Jane Doe",
        },
    ]);

  const handleConfirm = (id: number): void => {
    // Handle confirm logic
    console.log(`Confirmed ID ${id}`);
    // Remove the confirmed item from the data
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleReject = (id: number): void => {
    // Handle reject logic
    console.log(`Rejected ID ${id}`);
    // Remove the rejected item from the data
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        <h1>Manage Subscribers</h1>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Confirm</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Reject</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.RowHeaderCell>{item.id}</Table.RowHeaderCell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>
                <button type="button" onClick={() => handleConfirm(item.id)}>
                  Confirm
                </button>
              </Table.Cell>
              <Table.Cell>
                <button type="button" onClick={() => handleReject(item.id)}>
                  Reject
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default SubscriberLists;
