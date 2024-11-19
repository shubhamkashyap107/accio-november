export async function useFetchData(API){
    const res = await fetch(API)
    const data = await res.json()
    return data
}

