import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const featuredProducts = data.products.filter(
    (product) => product.featured === true,
  )
  return Response.json(featuredProducts)
}
