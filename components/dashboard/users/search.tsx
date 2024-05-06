import { ChangeEvent, memo } from "react";

type TProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const Search = ({ value, onChange }: TProps) => (
    <input
        placeholder="جست‌وجو کنید..."
        id="search"
        type="search"
        className="dark:bg-bg bg-bgLight p-2 rounded-md outline-none"
        name="searchbox"
        value={value}
        onChange={onChange}
    />
);

export default memo(Search);
