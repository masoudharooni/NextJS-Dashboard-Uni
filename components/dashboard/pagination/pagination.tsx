import { memo } from "react";

const Pagination = (props: any) => {
    return (
        <div className="flex items-center justify-between p-2.5">
            <button className="py-1.5 px-2.5 cursor-pointer disabled:cursor-not-allowed rounded-md dark:bg-bg bg-bgLight">
                Previous
            </button>
            <button className="py-1.5 px-2.5 cursor-pointer disabled:cursor-not-allowed rounded-md dark:bg-bg bg-bgLight">
                Next
            </button>
        </div>
    );
};

export default memo(Pagination);
