// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Link = {
  id: number,
  title: string,
  icon: string
  href: string
}

const allMyLinks: Link[] = [
  {
    id: 1,
    title: 'Agende um horário',
    icon: 'whatsapp',
    href: 'https://api.whatsapp.com/send?phone=5511932253838'
  },
  {
    id: 2,
    title: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/ruutelimaa'
  },
]

export async function getLinks(): Promise<Link[]> {
  return allMyLinks
}

export async function getWhatsappLink(): Promise<string> {
  return allMyLinks[0].href;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Link[]>
) {
  const links = await getLinks()
  res.status(200).json(links)
}
