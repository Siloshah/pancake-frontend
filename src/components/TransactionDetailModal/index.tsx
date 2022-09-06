import { useMemo, useEffect } from 'react'
import { ModalV2 } from '@pancakeswap/uikit'
import { useAppDispatch } from 'state'
import { toggleFarmHarvestModal } from 'state/transactions/actions'
import { useFarmHarvestTransaction, useAllTransactions } from 'state/transactions/hooks'
import FarmHarvestModal from './FarmHarvestModal'

const TransactionsDetailModal = () => {
  const { showModal, pickedTx } = useFarmHarvestTransaction()
  const allTransactions = useAllTransactions()
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(toggleFarmHarvestModal({ showModal: false }))
    }
  }, [])

  const pickedData = useMemo(() => allTransactions[pickedTx], [allTransactions, pickedTx])

  const closeModal = () => {
    dispatch(toggleFarmHarvestModal({ showModal: false }))
  }

  return (
    <ModalV2 isOpen={showModal} closeOnOverlayClick onDismiss={closeModal}>
      <FarmHarvestModal pickedData={pickedData} onDismiss={closeModal} />
    </ModalV2>
  )
}

export default TransactionsDetailModal