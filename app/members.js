import GitHub from '../github.js';

export default async function Members() {

    let { data } = await GitHub.rest.orgs.listPublicMembers({
        org: 'WebTech-PUC-Minas'
    });

    let users = [];

    await Promise.all(data.map((member) => GitHub.rest.users.getByUsername({
        username: member.login
    }))).then((values) => {
        values.forEach((value) => {
            users.push(value.data);
        });
    });

    return <>
        <h2 className="text-center text-4xl mb-4">Membros</h2>
        {
            users.map((user) => (
                <div key={user.id} className="flex items-center mt-2">
                    <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                    <p className="ml-3">{user.name}</p>
                </div>
            ))
        }
    </>

}