import GitHub from '../github.js';

export default async function Labs() {

    let { data } = await GitHub.rest.repos.listForOrg({
        org: 'WebTech-PUC-Minas'
    });

    console.log(data);

    return <>
        <h2 className="text-center text-4xl mb-4">Labs</h2>
        {
            data
                .filter((repo) => repo.name.startsWith('lab-'))
                .map((repo) => (
                    <div key={repo.name} className="border mb-2 p-3">
                        <p className="font-bold"><a href={repo.html_url}>{repo.name}</a></p>
                        <p>{repo.description}</p>
                    </div>
                ))
        }
    </>;

}