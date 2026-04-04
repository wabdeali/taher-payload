import type { GlobalConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'

export const Logo: GlobalConfig = {
  slug: 'logo',
  access: {
    read: () => true,
    update: adminOnly,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      label: 'Logo',
      relationTo: 'media',
      admin: {
        description: 'Upload the logo for the site.',
      },
    },
  ],
}
