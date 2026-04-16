import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { formatIDR } from "@/lib/formated";
import { createTransaction } from "@/lib/action/transactionAction";

export const Cart = ({ cartItems, setCartItems, userProfile }: any) => {
  const dataThead = ["Barang", "Jumlah"];
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userProfile) {
      alert("Login terlebih dahulu untuk menjual sampah.");
      router.push("/login");
      return;
    }

    if (cartItems.length === 0) {
      return alert("Pilih produk yang akan dijual terlebih dahulu!");
    }

    setIsPending(true);

    // Format data sesuai kebutuhan Server Action createTransaction
    const cartData = {
      TransaksiProduk: cartItems.map((item: any) => ({
        produkId: item.id, // Sesuaikan dengan properti ID produk kamu
        quantity: item.quantity,
      })),
    };

    const res = await createTransaction(cartData);

    setIsPending(false);

    if (res.success) {
      setCartItems([]); // Kosongkan keranjang
      alert("Anda berhasil menjual sampah!");
      router.push("/profile"); // Arahkan ke profil untuk melihat riwayat
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="flex flex-col gap-5 sticky top-20">
      <p className="titleSection">Rincian Penjualan</p>
      <div className="border-2 border-primary overflow-hidden rounded-xl shadow-md">
        <table className="w-full overflow-x-auto">
          <thead>
            <tr className="bg-primary text-white">
              {dataThead.map((item) => (
                <th key={item} className="p-2 text-start">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-primary shadow border relative">
                        <Image
                          src={item.image}
                          alt="products"
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </div>
                      <p>{item.product_name}</p>
                    </div>
                  </td>
                  <td className="p-2">
                    <Button variant={"outline"} size={"sm"} disabled>
                      {formatIDR(item.quantity * item.price)}
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center p-4 text-danger">
                  Silahkan pilih sampah yang akan dijual
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="border-2 border-primary overflow-hidden rounded-xl shadow-md p-2">
        <p className="titleContent text-primary border-b-2 border-primary pb-2">
          Total
        </p>
        <div className="grid grid-cols-3 justify-center mt-5">
          <div className="text-center">
            <p className="titleContent text-primary">{cartItems.length}</p>
            <p>Barang</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">
              {cartItems.reduce(
                (acc: number, item: any) => acc + (item.quantity || 0),
                0,
              )}{" "}
              kg
            </p>
            <p>Kg</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">
              {formatIDR(
                cartItems.reduce(
                  (acc: number, item: any) => acc + item.price * item.quantity,
                  0,
                ),
              )}
            </p>
            <p>Harga</p>
          </div>
        </div>
      </div>

      <Button disabled={isPending} variant={"danger"} onClick={handleSubmit}>
        {isPending ? <LoaderCircle className="animate-spin" /> : "JUAL SAMPAH"}
      </Button>
    </div>
  );
};
