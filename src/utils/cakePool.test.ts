import BigNumber from 'bignumber.js'
import { addWeeks, addDays } from 'date-fns'
import { VaultPosition, getVaultPosition } from './cakePool'

describe('cakePool', () => {
  const NOW = new Date('2022-01-01').getTime()

  jest.useFakeTimers().setSystemTime(NOW)

  it.each([
    // None
    [{}, VaultPosition.None],
    [{ userShares: null }, VaultPosition.None],
    [{ userShares: undefined, lockEndTime: '0', locked: true }, VaultPosition.None],
    [{ userShares: new BigNumber('0') }, VaultPosition.None],
    // Flexible
    [{ userShares: new BigNumber('1') }, VaultPosition.Flexible],
    [{ userShares: new BigNumber('1'), locked: false }, VaultPosition.Flexible],
    [{ userShares: new BigNumber('1'), locked: false, lockEndTime: `${NOW - 1000}` }, VaultPosition.Flexible],
    // Locked
    [{ userShares: new BigNumber('1'), locked: true }, VaultPosition.Locked],
    [
      {
        userShares: new BigNumber('1'),
        locked: true,
        lockEndTime: (addDays(new Date(NOW), 1).getTime() / 1000).toString(),
      },
      VaultPosition.Locked,
    ],
    // LockedEnd
    [
      {
        userShares: new BigNumber('1'),
        locked: true,
        lockEndTime: (addDays(new Date(NOW), -1).getTime() / 1000).toString(),
      },
      VaultPosition.LockedEnd,
    ],
    // after burning
    [
      {
        userShares: new BigNumber('1'),
        locked: true,
        lockEndTime: (addDays(new Date(NOW), -8).getTime() / 1000).toString(),
      },
      VaultPosition.AfterBurning,
    ],
  ])(`%s should be %s`, (params, result) => {
    expect(getVaultPosition(params)).toBe(result)
  })

  it('should be not be Locked if lockEndTime after now ', () => {
    expect(
      getVaultPosition({
        userShares: new BigNumber('1'),
        locked: true,
        lockEndTime: (addWeeks(new Date(NOW), -1).getTime() / 1000).toString(),
      }),
    ).not.toBe(VaultPosition.Locked)
  })
})
