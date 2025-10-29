"use client";
import { useEffect, useState } from "react";
import type { IPayments } from "@/types/payments";
import supabase from "@/lib/db";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DashboardPage() {
  const [payments, setPayments] = useState<IPayments[]>([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const { data, error } = await supabase.from("payments").select("*");
      if (error) console.log("error:", error);
      else setPayments(data);
    };

    fetchPayments();
  }, []);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-xl font-bold mb-6">Pembayaran</h1>

      <Table>
        <TableCaption>Daftar Pembayaran</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {payments.map((payment: IPayments, index: number) => (
            <TableRow key={payment.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{payment.name}</TableCell>
              <TableCell>{payment.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
