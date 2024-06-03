import { memo } from "react";

const Footer = () => {
    return (
        <div className="flex items-center justify-between dark:text-textSoft text-textSoftLight">
            <div className="text-xs">© All rights reserved for Masoud Harooni.</div>
            <div className="font-bold">MH</div>
        </div>
    );
};

export default memo(Footer);
