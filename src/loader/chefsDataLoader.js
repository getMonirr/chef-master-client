export const chefsDataLoader = async () => {
    const res = await fetch('http://localhost:5000/chefs');
    return await res.json()
}

// targetChefLoader
export const targetChefLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/chef/${params.chef_id}`);
    return await res.json();
}