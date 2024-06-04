import Chart from "@/components/dashboard/chart";
import Rightbar from "@/components/dashboard/rightbart";
import Transactions from "@/components/dashboard/transactions";
import Card from "@/components/dashboard/card";
export default function DashboardPage() {
    return (
        <section className="flex flex-col md:flex-row flex-[4] gap-5">
            <div className="flex-[3] flex flex-col">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <Card title="All users" amount={12} percentage={10} />
                    <Card title="All products" amount={0} percentage={-12} />
                    <Card title="All transactions" amount={45} percentage={15} />
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
