import data from '../data.json'

export async function GET() {
  const featuredProductys = data.products.filter((product) => product.featured)

  return Response.json(featuredProductys)
}
