import { TransactionResponse } from '@pancakeswap/awgmi/core'
import { useTranslation } from '@pancakeswap/localization'
import { Skeleton, useToast, Farm as FarmUI } from '@pancakeswap/uikit'
import { ToastDescriptionWithTx } from 'components/Toast'
import useCatchTxError from 'hooks/useCatchTxError'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { getBalanceAmount } from '@pancakeswap/utils/formatBalance'
import BigNumber from 'bignumber.js'
import { useCakePrice } from 'hooks/useStablePrice'
import { useFarmEarning } from 'state/farms/hook'
import { FARM_DEFAULT_DECIMALS } from 'components/Farms/constants'
import useHarvestFarm from '../../../hooks/useHarvestFarm'
import { FarmWithStakedValue } from '../../types'

const { FarmTableHarvestAction } = FarmUI.FarmTable

interface HarvestActionProps extends FarmWithStakedValue {
  userDataReady: boolean
  onReward: () => Promise<TransactionResponse>
}

export const HarvestActionContainer = ({ children, ...props }) => {
  const { onReward } = useHarvestFarm(props.pid, props.lpAddress)

  const earnings = useFarmEarning(String(props.pid))

  return children({
    ...props,
    onReward,
    userData: {
      earnings: new BigNumber(earnings),
    },
  })
}

export const HarvestAction: React.FunctionComponent<React.PropsWithChildren<HarvestActionProps>> = ({
  userData,
  userDataReady,
  onReward,
}) => {
  const { t } = useTranslation()
  const { toastSuccess } = useToast()
  const { fetchWithCatchTxError, loading: pendingTx } = useCatchTxError()
  const earningsBigNumber = userData?.earnings ? new BigNumber(userData.earnings) : BIG_ZERO
  const { data: cakePrice } = useCakePrice()
  let earnings = BIG_ZERO
  let earningsBusd = 0
  let displayBalance = userDataReady ? earnings.toFixed(5, BigNumber.ROUND_DOWN) : <Skeleton width={60} />

  // If user didn't connect wallet default balance will be 0
  if (!earningsBigNumber.isZero()) {
    earnings = getBalanceAmount(earningsBigNumber, FARM_DEFAULT_DECIMALS)
    earningsBusd = earnings.multipliedBy(cakePrice).toNumber()
    displayBalance = earnings.toFixed(5, BigNumber.ROUND_DOWN)
  }

  const handleHarvest = async () => {
    const receipt = await fetchWithCatchTxError(() => onReward())
    if (receipt?.status) {
      toastSuccess(
        `${t('Harvested')}!`,
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'CAKE' })}
        </ToastDescriptionWithTx>,
      )
    }
  }

  return (
    <FarmTableHarvestAction
      earnings={earnings}
      earningsBusd={earningsBusd}
      displayBalance={displayBalance}
      pendingTx={pendingTx}
      userDataReady={userDataReady}
      handleHarvest={handleHarvest}
    />
  )
}

export default HarvestAction
