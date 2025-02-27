import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  optimism,
  bsc
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'TheGenesis',
  projectId: '26c9ade600861f0a2afcbea1ba2cb591',
  chains: [
    // mainnet,
    // optimism,
    bsc,
  ],
});
