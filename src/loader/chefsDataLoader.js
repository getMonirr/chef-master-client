export const chefsDataLoader = async () => {
    const res = await fetch('https://chef-master-server-getmonirr.vercel.app/chefs');
    return await res.json()
}

// targetChefLoader
export const targetChefLoader = async ({ params }) => {
    const res = await fetch(`https://chef-master-server-getmonirr.vercel.app/chef/${params.chef_id}`);
    return await res.json();
}