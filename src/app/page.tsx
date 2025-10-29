"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import supabase from "@/lib/db";
import type { IMenu } from "@/types/menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [menus, setMenus] = useState<IMenu[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const { data, error } = await supabase.from("menus").select("*");

      if (error) console.log("eror: ", error);
      else setMenus(data);
    };

    fetchMenus();
  }, [supabase]);

  return (
    <div className="container mx-auto py-25">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text2-xl font-extrabold text-center">
          Belajar Fetch data SUPABASE
        </h1>
        <Button className="">
          <Link href={"/admin/dashboard"}>Start</Link>
        </Button>
      </div>
      <div className="mb-4">
        <h1 className="text-3xl">Menu</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Dibawah adalah contoh fetching data dari table yang ada disupabase
           ke dalam UI menggunakan .map (IMenu)  */}
          {menus.map((menu: IMenu) => (
            <Card key={menu.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{menu.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  width={200}
                  height={200}
                  className="w-full h-[30vh] object-cover rounded-lg"
                />
                <div className="mt-4 flex justify-between">
                  <div className="">
                    <h4 className="font-semibold text-xl">{menu.name}</h4>
                    <p>{menu.category}</p>
                  </div>
                  <p className="font-semibold text-2xl">${menu.price}.00</p>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">Deatail Menu</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
