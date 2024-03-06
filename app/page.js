import Header from './header.js'
import Labs from './labs.js'
import Members from './members.js'

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Luca Azalim'];

    return (
        <div className="container mx-auto my-5">
            <Header />
            <hr className="my-4" />
            <Labs />
            <hr className="my-4" />
            <Members />
        </div>
    );
}