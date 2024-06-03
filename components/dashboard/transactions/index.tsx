import Image from "next/image";
import styles from "./transactions.module.css";
export const Transactions = () => {
    return (
        <section className="py-3 px-5 rounded-[10px] dark:bg-bgSoft bg-bgSoftLight">
            <h2 className="mb-3 font-extralight dark:text-textSoft text-textSoftLight">
                Latest Transactions
            </h2>
            <table className={`w-full ${styles.table}`}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
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
                                Masoud Harooni
                            </div>
                        </td>
                        <td>
                            <span
                                className={`dark:text-text text-textLight ${styles.pending} ${styles.status}`}
                            >
                                Pending
                            </span>
                        </td>
                        <td>1403/02/11</td>
                        <td>120،000$</td>
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
                                Masoud Harooni
                            </div>
                        </td>
                        <td>
                            <span
                                className={`dark:text-text text-textLight ${styles.done} ${styles.status}`}
                            >
                                Done
                            </span>
                        </td>
                        <td>1403/02/11</td>
                        <td>120،000$</td>
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
                                Masoud Harooni
                            </div>
                        </td>
                        <td>
                            <span
                                className={`dark:text-text text-textLight ${styles.cancel} ${styles.status}`}
                            >
                                Canceled
                            </span>
                        </td>
                        <td>2024/02/14</td>
                        <td>120،000$</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Transactions;
