import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  console.log(images);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-64 flex-col">
            <img src={image.url} alt="image" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
