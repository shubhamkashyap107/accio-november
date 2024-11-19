import { useState } from "react";

export function useNewHook(initialValue)
{
    const[value, setValue] = useState(initialValue)

    return {value, setValue}
}