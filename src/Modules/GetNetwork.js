import Network from '@Modules/Network';
import FetchConfig from '@Modules/FetchConfig';

export default async () => {

    const Host = await FetchConfig("host");

    return new Network(Host);
}