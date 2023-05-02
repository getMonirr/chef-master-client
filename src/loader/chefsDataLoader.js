export const chefsDataLoader = async () => {
    const res = await fetch('http://localhost:5000/chefs');
    return await res.json()
}