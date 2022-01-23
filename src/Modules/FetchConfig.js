import Network from '@Modules/Network';
import AppConfig from '@Config/app.config';

const FetchConfig = async (key = null) => {
    const Config = await Network.REQUEST(AppConfig.DynamicConfigration)

    if (Config.status !== 200) {
        return null;
    }

    if (key !== null) {
        return Config.data[key] || null;
    }

    return Config.data;
}

export default FetchConfig;