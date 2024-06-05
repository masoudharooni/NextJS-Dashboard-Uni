import Chart from "@/components/dashboard/chart";
import Rightbar from "@/components/dashboard/rightbart";
import Transactions from "@/components/dashboard/transactions";
import Card from "@/components/dashboard/card";
import { dashboardSource } from "@/sources/dashboard";
export default function DashboardPage() {
    return (
        <section className="flex flex-col md:flex-row flex-[4] gap-5">
            <div className="flex-[3] flex flex-col">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {dashboardSource.map((item) => (
                        <Card
                            key={item.title}
                            title={item.title}
                            amount={item.amount}
                            percentage={item.percentage}
                        />
                    ))}
                </div>
                <div className="mt-5">
                    <Transactions />
                </div>
                <div className="mt-5">
                    <Chart />
                </div>
            </div>
            <div className="flex-1">
                <Rightbar />
            </div>
        </section>
    );
}
