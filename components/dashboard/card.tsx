type TProps = {
    title: string;
    amount: number;
    percentage: number;
};

export const Card = ({ title, amount, percentage }: TProps) => {
    return (
        <section className="relative hover:-top-0.5 transition-transform ease-in-out delay-500 duration-500 dark:bg-bgSoft w-full hover:dark:bg-[#202a40] hover:bg-[#d9e4ff] bg-bgSoftLight p-5 rounded-lg flex gap-5 cursor-pointer">
            <div className="flex flex-col gap-5">
                <span className="">{title}</span>
                <span className="font-vazirBold text-[24px]">{amount}</span>
                <span className="text-sm">
                    <span className={percentage > 0 ? "text-green-500" : "text-red-500"}>
                        {percentage}%
                    </span>
                    {percentage > 0 ? " increase " : " decrease "}
                    compared to last week
                </span>
            </div>
        </section>
    );
};

export default Card;
