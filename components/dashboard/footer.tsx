import { memo } from "react";

const Footer = () => {
    return (
        <div className="flex items-center justify-between dark:text-textSoft text-textSoftLight">
            <div className="font-bold">MH</div>
            <div className="text-xs">© تمام حقوق این پروژه محفوظ است.</div>
        </div>
    );
};

export default memo(Footer);
