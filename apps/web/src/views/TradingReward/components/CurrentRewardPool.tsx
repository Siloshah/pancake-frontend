import styled from 'styled-components'
import { Box, Flex, Text, Button } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const Container = styled(Flex)`
  position: relative;
  width: 100%;
  padding: 40px 0;
  margin: 80px auto auto auto;
  flex-direction: column;
  border-radius: 32px;
  background: linear-gradient(180deg, #7645d9 0%, #5121b1 100%);
  z-index: 1;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 1140px;
  }
`

const StyledHeading = styled(Text)`
  position: relative;
  font-size: 56px;
  font-weight: 900;
  line-height: 98%;
  letter-spacing: 0.01em;
  background: linear-gradient(166.02deg, #ffb237 -5.1%, #ffeb37 75.24%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;

  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 10px rgba(56, 50, 65, 1);
  }
`

const StyledButton = styled(Button)`
  background: linear-gradient(180deg, #fcc631 0%, #ff9d00 100%);
  color: #08060b;
`

const Decorations = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  > img {
    position: absolute;
  }
  & :nth-child(1) {
    bottom: -12%;
    left: -6%;
  }
  & :nth-child(2) {
    bottom: 0;
    right: 0;
  }
}`

const CurrentRewardPool = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <StyledHeading data-text={t('Current Reward Pool')}>{t('Current Reward Pool')}</StyledHeading>
      <Flex flexDirection="column" width={['100%', '530px']} margin={['40px auto auto auto']}>
        <Flex justifyContent="space-between" mb="10px">
          <Text color="white" bold fontSize={['20px']}>
            {t('Starts')}
          </Text>
          <Text color="white" bold fontSize={['20px']}>
            on Feb 1, 2023, 8:00 AM
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mb="10px">
          <Text color="white" bold fontSize={['20px']}>
            {t('Ends')}
          </Text>
          <Text color="white" bold fontSize={['20px']}>
            in 3d 5h 6m
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mb="10px">
          <Text color="white" bold fontSize={['20px']}>
            {t('Total volume generated')}
          </Text>
          <Text color="white" bold fontSize={['20px']}>
            $123,456,789,123.456
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mb="10px">
          <Text color="white" bold fontSize={['20px']}>
            {t('Total reward to distribute')}
          </Text>
          <Text color="white" bold fontSize={['20px']}>
            $42,000 in CAKE
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mb="10px">
          <Text color="white" bold fontSize={['20px']}>
            {t('Number of eligible pairs')}
          </Text>
          <Flex>
            <Text mr="8px" color="white" bold fontSize={['20px']}>
              12
            </Text>
            <StyledButton scale="sm">{t('View Pairs')}</StyledButton>
          </Flex>
        </Flex>
      </Flex>
      <Decorations>
        <img src="/images/trading-reward/pool-1.png" width="307px" height="195px" alt="pool-1" />
        <img src="/images/trading-reward/pool-2.png" width="106px" height="106px" alt="pool-2" />
      </Decorations>
    </Container>
  )
}

export default CurrentRewardPool
