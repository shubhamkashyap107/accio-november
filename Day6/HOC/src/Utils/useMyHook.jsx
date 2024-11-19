import { useState } from "react";

export function useMyHook(initialValue)
{
    const[value, setValue] = useState(initialValue)

    return {value, setValue}
}