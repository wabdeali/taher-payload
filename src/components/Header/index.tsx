import { getCachedGlobal } from '@/utilities/getGlobals'

import { HeaderClient } from './index.client'
import './index.css'

export async function Header() {
  const header = await getCachedGlobal('header', 1)()
  const checkoutDisabled = await getCachedGlobal('checkoutToggle', 1)()

  return <HeaderClient header={header} checkoutDisabled={checkoutDisabled.checkoutToggle!!} />
}
