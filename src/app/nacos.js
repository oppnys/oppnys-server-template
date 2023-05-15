import {NacosConfigClient, NacosNamingClient} from 'nacos';
import ip from 'ip';
import logger from "../utils/log.js";
import config from './config.js';

const providerServiceName = config.NACOS_SERVER_NAME; // 服务名称
const nacosServerAddress = config.NACOS_SERVER_ADDRESS;// nacos服务地址
const providerNameSpace = config.NACOS_NAMESPACE;// namespace: 名称空间必须在服务器上存在
const group = config.NACOS_GROUP;// 名称空间下的Group
const dataId = config.NACOS_DATAID;// 命名空间下的Data Id

// 注册 nacos 服务
async function registerNacosServer() {
    try {
        const {address} = ip;
        const ipAddr = address();
        const port = config.APP_PORT || 3001
        const client = new NacosNamingClient({
            logger,
            serverList: nacosServerAddress,
            namespace: providerNameSpace,
        });
        await client.ready();
        // 注册服务和实例
        await client.registerInstance(providerServiceName, {
            ip: ipAddr,
            port,
            metadata: {
                appNo: 'file'
            }
        });
        logger.info(`nacos服务注册实例成功: ${ipAddr}:${port}`);
    } catch (e) {
        logger.info(`nacos服务注册实例失败: ${e.message}`);
    }
}

// 获取nacos配置
async function getNacosConfig() {
    // 创建 nacos client 实例
    const client = new NacosConfigClient({
        serverAddr: nacosServerAddress,
        namespace: providerNameSpace,
    });

    // 监听远程nacos配置变化
    client.subscribe({dataId: dataId, group: group,}, content => {
        logger.info(`[Nacos] 监听远程nacos配置`);
    });
    const content = await client.getConfig(dataId, group);
    logger.info(`[Nacos] 获取配置成功`);
    return JSON.parse(content);
}

const nacosConfig = await getNacosConfig();

await registerNacosServer();

export default nacosConfig;