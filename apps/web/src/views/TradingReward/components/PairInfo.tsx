import styled from 'styled-components'
import { Text, Flex, Skeleton } from '@pancakeswap/uikit'
import { TokenPairImage } from 'components/TokenImage'
import { Token } from '@pancakeswap/swap-sdk-core'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const TokenWrapper = styled.div`
  padding-right: 8px;
  width: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 40px;
  }
`

interface PairInfoProps {
  isReady: boolean
  lpSymbol: string
  token: Token
  quoteToken: Token
}

const PairInfo: React.FunctionComponent<React.PropsWithChildren<PairInfoProps>> = ({
  isReady,
  lpSymbol,
  token,
  quoteToken,
}) => {
  if (!isReady) {
    return (
      <Container>
        <Skeleton mr="8px" width={32} height={32} variant="circle" />
        <div>
          <Skeleton width={40} height={10} mb="4px" />
          <Skeleton width={60} height={24} />
        </div>
      </Container>
    )
  }

  return (
    <Flex alignItems="center">
      <Container>
        <TokenWrapper>
          <TokenPairImage width={40} height={40} variant="inverted" primaryToken={token} secondaryToken={quoteToken} />
        </TokenWrapper>
        <div>
          <Text bold>{lpSymbol}</Text>
        </div>
      </Container>
    </Flex>
  )
}

export default PairInfo