import type { GlobalConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'

export const CheckoutToggle: GlobalConfig = {
  slug: 'checkoutToggle',
  access: {
    read: () => true,
    update: adminOnly,
  },
  fields: [
    {
      name: 'checkoutToggle',
      type: 'checkbox',
      label: 'Disable Checkout',
      defaultValue: true,
      admin: {
        description:
          'If disabled, the checkout process will be disabled and the "Add to Cart" button will be hidden.',
      },
    },
  ],
}
