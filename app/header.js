import GitHub from '../github.js';

export default async function Header() {

    let { data } = await GitHub.rest.orgs.get({
        org: 'WebTech-PUC-Minas'
    });

    return <>
        <h1 className="text-center text-7xl">WebTech</h1>
        <p className="text-center">{data.description}</p>
    </>;

}