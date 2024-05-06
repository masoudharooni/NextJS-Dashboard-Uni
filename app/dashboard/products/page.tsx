"use client";
import { useState } from "react";
import Search from "@/components/dashboard/users/search";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/dashboard/users/users.module.css";
import Pagination from "@/components/dashboard/pagination/pagination";
export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const deleteUser = () => { };

    return (
        <section className="dark:bg-bgSoft bg-bgSoftLight p-5 rounded-[10px] mt-5">
            <div className="flex justify-between">
                <Search placeholder="یک محصول را جست‌وجو کنید..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <Link href="/dashboard/users/add">
                    <button className="p-2.5 text-text bg-[#8e88e7] dark:bg-[#5d57c9] rounded-md">
                        افزودن
                    </button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>عنوان</td>
                        <td>توضیحات</td>
                        <td>قیمت</td>
                        <td>زمان ساخت</td>
                        <td>موجودی</td>
                        <td>عملیات</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={"/noproduct.jpg"}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                IPhone
                            </div>
                        </td>
                        <td>توضیحات</td>
                        <td>60,000,000تومان</td>
                        <td>13.01.2022</td>
                        <td>43</td>
                        <td>
                            <div className="flex gap-2.5">
                                <Link href={`/`}>
                                    <button
                                        className={`py-[5px] px-[10px] rounded-md dark:text-text text-textLight border-none cursor-pointer dark:bg-teal-700 bg-teal-400`}
                                    >
                                        مشاهده
                                    </button>
                                </Link>
                                <button
                                    className={`py-[5px] px-[10px] rounded-md dark:text-text text-textLight border-none cursor-pointer dark:bg-rose-700 bg-rose-400`}
                                >
                                    حذف
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </section>
    );
}
