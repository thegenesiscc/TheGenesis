
import { ethers } from 'ethers'; // 引入 ethers

const EARLY_BIRD_CONTRACT = '0xf5051e73f0de71f0d56ab15b13e3f4feda33b146';
const EARLY_BIRD_ABI = ['function isRegistered(address _address) external view returns (bool)'];

export const useEarlyBirdContract = (signer: ethers.Signer | null) => {
  const checkRegistrationStatus = async (addressToCheck: string) => {
    try {
      if (!signer) return false;
      
      const contract = new ethers.Contract(
        EARLY_BIRD_CONTRACT,
        EARLY_BIRD_ABI,
        signer
      );

      return await contract.isRegistered(addressToCheck);
    } catch (error) {
      console.error('Error checking registration status:', error);
      return false;
    }
  };

  return { checkRegistrationStatus };
};