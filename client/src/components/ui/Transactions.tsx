import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "₹1150.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Paid",
    totalAmount: "₹1009.00",
    paymentMethod: "Google Pay",
  },
  {
    invoice: "INV003",
    paymentStatus: "Paid",
    totalAmount: "₹250.00",
    paymentMethod: "Google Pay",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "₹745.00",
    paymentMethod: "Cash",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "₹69.00",
    paymentMethod: "Google Pay",
  },
  {
    invoice: "INV006",
    paymentStatus: "Paid",
    totalAmount: "₹258.00",
    paymentMethod: "Cash",
  },
  {
    invoice: "INV007",
    paymentStatus: "Paid",
    totalAmount: "₹1131.00",
    paymentMethod: "Google Pay",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">₹4612.00.</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
