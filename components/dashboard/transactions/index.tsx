import Image from "next/image";
import styles from "./transactions.module.css";
export const Transactions = () => {
    return (
        <section className="p-5 rounded-[10px] dark:bg-bgSoft bg-bgSoftLight">
            <h2 className="mt-5 font-extralight dark:text-textSoft text-textSoftLight">
                آخرین معاملات
            </h2>
            <table className={`w-full ${styles.table}`}>
                <thead>
                    <tr>
                        <td>نام</td>
                        <td>وضعیت</td>
                        <td>تاریخ</td>
                        <td>مقدار</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex gap-2.5 items-center">
                                <Image
                                    src="/noavatar.png"
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-full"
                                />
                                مسعود هارونی
                            </div>
                        </td>
                        <td>
                            <span
                                className={`dark:text-text text-textLight ${styles.pending} ${styles.status}`}
                            >
                                درحال بررسی
                            </span>
                        </td>
                        <td>1403/02/11</td>
                        <td>120،000ريال</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex gap-2.5 items-center">
                                <Image
                                    src="/noavatar.png"
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-full"
                                />
                                مسعود هارونی
                            </div>
                        </td>
                        <td>
                            <span
                                className={`dark:text-text text-textLight ${styles.done} ${styles.status}`}
                            >
                                انجام شده
                            </span>
                        </td>
                        <td>1403/02/11</td>
                        <td>120،000ريال</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex gap-2.5 items-center">
                                <Image
                                    src="/noavatar.png"
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-full"
                                />
                                مسعود هارونی
                            </div>
                        </td>
                        <td>
                            <span
                                className={`dark:text-text text-textLight ${styles.cancel} ${styles.status}`}
                            >
                                لغو شده
                            </span>
                        </td>
                        <td>1403/02/11</td>
                        <td>120،000ريال</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Transactions;
