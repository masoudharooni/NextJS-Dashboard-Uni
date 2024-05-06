import { ChangeEvent, memo } from "react";

type TProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};
const Search = ({ value, onChange, placeholder }: TProps) => (
    <input
        placeholder={placeholder}
        id="search"
        type="search"
        className="dark:bg-bg bg-bgLight p-2 rounded-md outline-none"
        name="searchbox"
        value={value}
        onChange={onChange}
    />
);

export default memo(Search);
