import BigNumber from 'bignumber.js'

export const incentiveFormat = (incentive) => {
  const [
    totalRewardUnclaimed,
    totalReward,
    totalVolume,
    proofRoot,
    campaignStart,
    campaignClaimTime,
    campaignClaimEndTime,
    thresholdLockedTime,
    thresholdLockedAmount,
    needProfileIsActivated,
    isActivated,
    isDynamicReward,
    dynamicRate,
  ] = incentive

  return {
    proofRoot,
    dynamicRate,
    isActivated,
    isDynamicReward,
    needProfileIsActivated,
    totalReward: new BigNumber(totalReward.toString()).toJSON(),
    totalVolume: new BigNumber(totalVolume.toString()).toJSON(),
    campaignStart: new BigNumber(campaignStart.toString()).toNumber(),
    campaignClaimTime: new BigNumber(campaignClaimTime.toString()).toNumber(),
    thresholdLockedTime: new BigNumber(thresholdLockedTime.toString()).toNumber(),
    campaignClaimEndTime: new BigNumber(campaignClaimEndTime.toString()).toNumber(),
    totalRewardUnclaimed: new BigNumber(totalRewardUnclaimed.toString()).toJSON(),
    thresholdLockedAmount: new BigNumber(thresholdLockedAmount.toString()).toJSON(),
  }
}