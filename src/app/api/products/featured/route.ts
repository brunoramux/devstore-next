import data from '../data.json'

export async function GET() {
  const featuredProducts = data.products.filter(
    (product) => product.featured === true,
  )
  return Response.json(featuredProducts)
}
