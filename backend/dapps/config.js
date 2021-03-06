const GRAPH_API_PANCAKESWAP = "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2";
const GRAPH_API_UNISWAP = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';
const GRAPH_API_UNISWAP_V3 = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-subgraph';
const GRAPH_API_COMPOUND = 'https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2';
const GRAPH_API_AAVE = "https://api.thegraph.com/subgraphs/name/aave/protocol-v2";
const GRAPH_API_CURVE = "https://api.thegraph.com/subgraphs/name/curvefi/curve";
const GRAPH_API_SUSHI = "https://api.thegraph.com/subgraphs/name/sushiswap/bsc-exchange";
const GRAPH_API_YEARN = "https://api.thegraph.com/subgraphs/name/salazarguille/yearn-vaults-v2-subgraph-mainnet";
const GRAPH_API_MAKER = "https://api.thegraph.com/subgraphs/name/protofire/maker-protocol";
const GRAPH_API_BALANCER = "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2";

const masterchefContractAddress = '0x73feaa1eE314F8c655E354234017bE2193C9E24E'
const multicallContractAddress = '0x1ee38d535d541c55c9dae27b12edf090c608e6fb'

const API_BASE_URL = 'http://localhost:3000';

module.exports = {
    API_BASE_URL,
    GRAPH_API_PANCAKESWAP,
    GRAPH_API_UNISWAP,
    GRAPH_API_UNISWAP_V3,
    GRAPH_API_COMPOUND,
    GRAPH_API_AAVE,
    GRAPH_API_CURVE,
    GRAPH_API_SUSHI,
    GRAPH_API_YEARN,
    GRAPH_API_MAKER,
    GRAPH_API_BALANCER,

    masterchefContractAddress,
    multicallContractAddress
}
