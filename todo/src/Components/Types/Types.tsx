import { UseQueryResult } from "@tanstack/react-query";
import React, { Key } from "react";

export type ItemListProps = {
    item: string;
    index: string;
    // items : string;

    // addItem:string[];
    // setAddItem: React.Dispatch<React.SetStateAction<string[]| any>>
    setItems: React.Dispatch<React.SetStateAction<string>>;
    setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
    setUpdateIndex: React.Dispatch<React.SetStateAction<string>>;
    refetch: () => Promise<UseQueryResult>
}
