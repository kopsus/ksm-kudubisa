import { useQueryTransactionDetail } from "@/api/transaksi/queries";
import { Button } from "@/components/ui/button";
import { formatIDR } from "@/lib/formated";
import { storeTransaksi } from "@/store/transaksi";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";

interface ICart {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Cart = ({ handleSubmit }: ICart) => {
  const dataThead = ["Barang", "Jumlah"];
  const [transaction, setTransaction] = useAtom(storeTransaksi);
  const { detailTransaction } = useQueryTransactionDetail();
  React.useEffect(() => {
    if (detailTransaction) {
      setTransaction({ data: detailTransaction });
    }
  }, [detailTransaction, setTransaction]);

  return (
    <div className="flex flex-col gap-5 sticky top-20">
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
            {transaction?.data?.TransaksiProduk.map((item, index) => (
              <tr key={index}>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-primary shadow border">
                      <Image
                        src={item.produk.image ?? ""}
                        alt="products"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <p>{item.produk.product_name}</p>
                  </div>
                </td>
                <td className="p-2">
                  <Button variant={"outline"} size={"sm"} disabled>
                    {formatIDR(item.quantity! * item.produk.price)}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-2 border-primary overflow-hidden rounded-xl shadow-md p-2">
        <p className="titleContent text-primary border-b-2 border-primary pb-2">
          Total
        </p>
        <div className="grid grid-cols-3 justify-center mt-5">
          <div className="text-center">
            <p className="titleContent text-primary">
              {transaction?.data?.TransaksiProduk.length}
            </p>
            <p>Barang</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">
              {transaction?.data?.TransaksiProduk.reduce(
                (acc, item) => acc + (item.quantity || 0),
                0
              )}{" "}
              kg
            </p>
            <p>Kg</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">
              {formatIDR(
                transaction?.data?.TransaksiProduk.reduce(
                  (acc, item) => acc + item.produk.price * (item.quantity || 0),
                  0
                ) ?? 0
              )}
            </p>
            <p>Harga</p>
          </div>
        </div>
      </div>

      <Button variant={"danger"} onClick={handleSubmit}>
        Simpan Perubahan
      </Button>
    </div>
  );
};
