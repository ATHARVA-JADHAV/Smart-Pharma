// components/ui/input-table.tsx
"use client";

import * as React from "react";
import { CaretSortIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialData: MedicineStock[] = [
  {
    id: "m5gr84i9",
    medicineName: "Aspirin",
    stock: 100,
    expiry: "2025-08-12",
  },
  {
    id: "3u1reuv4",
    medicineName: "Paracetamol",
    stock: 200,
    expiry: "2024-12-01",
  },
  {
    id: "derv1ws0",
    medicineName: "Ibuprofen",
    stock: 50,
    expiry: "2026-03-14",
  },
];

export type MedicineStock = {
  id: string;
  medicineName: string;
  stock: number;
  expiry: string;
};

export const columns: ColumnDef<MedicineStock>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "medicineName",
    header: "Medicine Name",
    cell: ({ row, table }) => (
      <Input
        value={row.getValue("medicineName")}
        onChange={(e) =>
          table.options.meta?.updateRow(
            row.index,
            "medicineName",
            e.target.value
          )
        }
        className="capitalize w-40"
      />
    ),
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stock
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row, table }) => (
      <Input
        type="number"
        value={row.getValue("stock")}
        onChange={(e) =>
          table.options.meta?.updateRow(row.index, "stock", e.target.value)
        }
        className="w-20"
      />
    ),
  },
  {
    accessorKey: "expiry",
    header: () => <div className="text-right">Expiry</div>,
    cell: ({ row, table }) => (
      <Input
        type="date"
        value={row.getValue("expiry")}
        onChange={(e) =>
          table.options.meta?.updateRow(row.index, "expiry", e.target.value)
        }
        className="w-36 text-right"
      />
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const medicineStock = row.original;

      return (
        <div className="bg-blue-500 justify-between w-0 mr-10 p-0 flex space-x-2">
          <Button
            onClick={() => {
              alert(`Updated information for ${medicineStock.medicineName}`);
              // Add actual update logic here (e.g., API call)
            }}
          >
            Update
          </Button>
        </div>
      );
    },
  },
];

export default function DataTableDemo() {
  const [data, setData] = React.useState<MedicineStock[]>(initialData);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [newMedicine, setNewMedicine] = React.useState({
    medicineName: "",
    stock: "",
    expiry: "",
  });

  const updateRow = (rowIndex: number, columnId: string, value: any) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const handleAddMedicine = () => {
    setData((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        medicineName: newMedicine.medicineName,
        stock: parseInt(newMedicine.stock),
        expiry: newMedicine.expiry,
      },
    ]);
    setNewMedicine({
      medicineName: "",
      stock: "",
      expiry: "",
    });
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    meta: {
      updateRow,
    },
  });

  return (
    <div className="pl-10 w-full mr-10">
      <div className="flex items-center space-x-40 py-4">
        <Input
          placeholder="Filter medicines..."
          value={
            (table.getColumn("medicineName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("medicineName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto pl-8">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Add Medicine Form */}
      <div className="mb-4 p-4 bg-gray-100 rounded-md">
        <h3 className="text-lg mb-2">Add New Medicine</h3>
        <Input
          placeholder="Medicine Name"
          value={newMedicine.medicineName}
          onChange={(e) =>
            setNewMedicine((prev) => ({
              ...prev,
              medicineName: e.target.value,
            }))
          }
          className="mb-2"
        />
        <Input
          type="number"
          placeholder="Stock"
          value={newMedicine.stock}
          onChange={(e) =>
            setNewMedicine((prev) => ({ ...prev, stock: e.target.value }))
          }
          className="mb-2"
        />
        <Input
          type="date"
          value={newMedicine.expiry}
          onChange={(e) =>
            setNewMedicine((prev) => ({ ...prev, expiry: e.target.value }))
          }
          className="mb-4"
        />
        <Button onClick={handleAddMedicine}>Add Medicine</Button>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <TableHead key={column.id}>
                  {flexRender(
                    column.column.columnDef.header,
                    column.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
