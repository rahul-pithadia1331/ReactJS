import React from "react";

export type ItemListProps = {
    item: string;
    index: number;
    items : string;
    addItem:string[];
    setAddItem: React.Dispatch<React.SetStateAction<string[]>>
    setItems: React.Dispatch<React.SetStateAction<string>>;
    setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
    setUpdateIndex: React.Dispatch<React.SetStateAction<number>>;
}
