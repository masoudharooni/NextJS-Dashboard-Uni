import Chart from "@/components/dashboard/chart";
import Rightbar from "@/components/dashboard/rightbart";
import Transactions from "@/components/dashboard/transactions";
import Card from "@/components/dashboard/card";

export default function DashboardPage() {
    return (
        <section className="flex flex-[4] gap-5">
            <div className="flex-[3] flex flex-col">
                <div className="flex gap-5">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="mt-5">
                    <Transactions />
                </div>
                <div className="mt-5">
                    <Chart />
                </div>
            </div>
            <div className="flex-1 bg-blue-400">
                <Rightbar />
            </div>
        </section>
    );
}
