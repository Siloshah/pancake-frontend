import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'

import { CAKE, USDC, USDT, WBTC_ETH } from './common'

export const ethereumTokens = {
  weth: WETH9[ChainId.ETHEREUM],
  usdt: USDT[ChainId.ETHEREUM],
  usdc: USDC[ChainId.ETHEREUM],
  wbtc: WBTC_ETH,
  sdao: new ERC20Token(
    ChainId.ETHEREUM,
    '0x993864E43Caa7F7F12953AD6fEb1d1Ca635B875F',
    18,
    'SDAO',
    'Singularity Dao',
    'https://www.singularitydao.ai/',
  ),
  stg: new ERC20Token(
    ChainId.ETHEREUM,
    '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
    18,
    'STG',
    'StargateToken',
    'https://stargate.finance/',
  ),
  fuse: new ERC20Token(
    ChainId.ETHEREUM,
    '0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d',
    18,
    'FUSE',
    'Fuse Token',
    'https://fuse.io/',
  ),
  caps: new ERC20Token(
    ChainId.ETHEREUM,
    '0x03Be5C903c727Ee2C8C4e9bc0AcC860Cca4715e2',
    18,
    'CAPS',
    'Capsule Coin',
    'https://www.ternoa.network/en',
  ),
  cake: CAKE[ChainId.ETHEREUM],
  dai: new ERC20Token(
    ChainId.ETHEREUM,
    '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  ldo: new ERC20Token(
    ChainId.ETHEREUM,
    '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
    18,
    'LDO',
    'Lido DAO Token',
    'https://lido.fi/',
  ),
  wstETH: new ERC20Token(
    ChainId.ETHEREUM,
    '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    18,
    'wstETH',
    'Wrapped liquid staked Ether 2.0',
    'https://lido.fi/',
  ),
  link: new ERC20Token(
    ChainId.ETHEREUM,
    '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    18,
    'LINK',
    'ChainLink Token',
    'https://chain.link/',
  ),
  matic: new ERC20Token(
    ChainId.ETHEREUM,
    '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
    18,
    'MATIC',
    'Matic Token',
    'https://polygon.technology/',
  ),
  cbEth: new ERC20Token(
    ChainId.ETHEREUM,
    '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704',
    18,
    'cbETH',
    'Coinbase Wrapped Staked ETH',
    'https://www.coinbase.com/cbeth',
  ),
  ape: new ERC20Token(
    ChainId.ETHEREUM,
    '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
    18,
    'APE',
    'ApeCoin',
    'https://apecoin.com/',
  ),
  alcx: new ERC20Token(
    ChainId.ETHEREUM,
    '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',
    18,
    'ALCX',
    'Alchemix',
    'https://alchemix.fi/',
  ),
}
