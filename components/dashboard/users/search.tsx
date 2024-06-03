import { IconButton } from "@mui/material";
import { ChangeEvent, memo } from "react";
import { MdSearch } from "react-icons/md";

type TProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};
const Search = ({ value, onChange, placeholder }: TProps) => (
    <div className="flex items-center rounded-md gap-x-2 dark:bg-bg bg-bgLight pl-2">
        <input
            placeholder={placeholder}
            id="search"
            type="search"
            className="bg-inherit p-2 outline-none"
            name="searchbox"
            value={value}
            onChange={onChange}
        />
        <IconButton className="dark:text-text text-textLight">
            <MdSearch size={25} />
        </IconButton>
    </div>
);

export default memo(Search);
